/**
 * @fileoverview Rule to avoid "floating" promises
 * @author Sebastien Guillemot
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const getName = (node) => {
    if (node.name) {
        return node.name;
    }
    if (node.id.name) {
        return node.id.name;
    }
  
    return null;
};

/**
 * recursively go up levels in scope until we find our variable declaration
 * @param {Scope} scope - starting scope for search
 * @param {string} name - name of literal to look for
 * @returns {Variable|null|void}  variable corresponding to literal
 */
function findInScope(scope, name) {
    if (name === null || typeof name === "undefined" || scope === null || typeof scope === "undefined") {
        return null;
    }
    const definition = scope.set.get(name);

    if (definition === null || typeof definition === "undefined") {
        return findInScope(scope.upper, name);
    }

    if (definition.defs.length === 0) {
        return null;
    }
    if (getName(definition.defs[0].node) === name) {
        const subDef = definition.defs[0];

        if (subDef === null || typeof subDef === "undefined") {
            return null;
        }

        return subDef.node;
    }

    for (const variable of scope.variables) {
        for (const identifier of variable.identifiers) {
            if (getName(identifier) === name) {
            return identifier;
            }
        }
    }

    return null;
}

/**
 * Gets a string representation of a type if one exists
 * @param {*} type - object representing a type
 * @returns {string|null|void} type if one exists
 */
function getTypeAnnotation(type) {
    if (type === null || type === undefined) {
        return undefined;
    }
    if (type.typeAnnotation) {
        return getTypeAnnotation(type.typeAnnotation);
    }

    if (type.returnType) {
        return getTypeAnnotation(type.returnType);
    }

    return getName(type);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow floating promises",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-floating-promise"
        },

        schema: [],

        fixable: "code",

        messages: {
            foundFloating: "Floating promises can lead to unexpected scheduling."
        }
    },

    create(context) {
        return {

            /*
             * Note: CallExpression does not match on "await foo()" as this is an AwaitExpression
             * so this condition already filters out non-floating promises
             */
            "ExpressionStatement > CallExpression"(node) {
                // need this indirection to handle cases like foo.bar();
                const callee = node.parent.expression.callee;

                // handle anonymously function calls
                if (
                    callee.type === "ArrowFunctionExpression" ||
                    callee.type === "FunctionExpression") {
                    if (callee.async || getTypeAnnotation(callee.returnType) === "Promise") {
                        context.report({
                            fix(fixer) {
                                return fixer.replaceText(node, `await ${context.getSourceCode().getText(node)}`);
                            },
                            loc: node.loc,
                            messageId: "foundFloating",
                            node
                        });
                    }
                }

                if (callee.type === "MemberExpression") {
                    return;

                    /**
                     * Note: most likely you will fail to find this variable in scope
                     * since its scope is most likely inside a class
                     *
                     * theoretically you would look up the typeAnnotation of node.callee.object
                     * and then look at the type of callee.property inside it
                     * however in most cases this won't really work since definitions will cross file boundaries
                     */
                }

                // handle named function calls
                if (callee.type === "Identifier") {
                    const variable = findInScope(context.getScope(node), callee.name);
                    if (variable === null || typeof variable === "undefined") {
                        return;
                    }

                    if (variable.async || getTypeAnnotation(variable) === "Promise") {
                        context.report({
                            fix(fixer) {
                                return fixer.replaceText(node, `await ${context.getSourceCode().getText(node)}`);
                            },
                            loc: node.loc,
                            messageId: "foundFloating",
                            node
                        });
                    }
                }
            }
        };
    }
};
