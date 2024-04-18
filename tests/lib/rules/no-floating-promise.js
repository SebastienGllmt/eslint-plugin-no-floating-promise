/**
 * @fileoverview Tests for no-floating-promise rule.
 * @author Sebastien Guillemot
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path"),
    rule = require("../../../lib/rules/no-floating-promise"),
    { RuleTester } = require('eslint');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Gets the specified parser.
 *
 * @param {string} name - The parser name to get.
 * @returns {function} specificed parser
 */
function parser(name) {
    return require(`../../fixtures/parsers/no-floating-promise/${name}.js`);
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ languageOptions: { ecmaVersion: 8, sourceType: "module" } });

ruleTester.run("no-floating-promise", rule, {
    valid: [
        {

            // awaiting a function identifier works
            code: "async function foo() {}; async function wrap() { await foo(); }",
            languageOptions: { ecmaVersion: 8 }
        },
        {

            // if not awaited but used in an assignment, no error is reported
            code: "async function foo() {}; async function wrap() { const a = foo(); }",
            languageOptions: { ecmaVersion: 8 }
        },
        {

            // if not awaited but returned, no error is reported
            code: "async function foo() {}; function bar() { return foo(); };",
            languageOptions: { ecmaVersion: 8 }
        },
        {

            // awaiting a non-async function that returns a Promise works
            code: "function foo(): Promise<void> { return Promise.resolve(); }; async function wrap() { await foo(); }",
            languageOptions: {
              ecmaVersion: 8,
              parser: parser("no-floating-promise-typed")
            }
        },
        {

            // awaiting a FunctionExpression works
            code: "async function wrap() { await (async function () { return 5; })(); };",
            languageOptions: { ecmaVersion: 8 }
        },
        {

            // awaiting an ArrowFunctionExpression works
            code: "async function wrap() { await (async () => 5)(); };",
            languageOptions: { ecmaVersion: 8 }
        },
        {

            // doesn't break regular function calls
            code: "function foo() {}; foo();",
            languageOptions: { ecmaVersion: 8 }
        },
        {

            /**
             * no Flow type definition that specified this function returns a promise
             * means unfortunately we won"t catch it
             */
            code: "function foo() { return Promise.resolve(); }; async function wrap() { foo(); }",
            languageOptions: { ecmaVersion: 8 }
        },
        {

            // doesn't crash when type "any" is used
            code: "function foo(): any { return Promise.resolve(); }; async function wrap() { foo(); }",
            languageOptions: {
              ecmaVersion: 8,
              parser: parser("floating-promise-any")
            }
        },
        {

            // no error if then is used
            code: "async function foo() {}; async function wrap() { foo().then(() => {}); }",
            languageOptions: { ecmaVersion: 8 }
        },
        {

            // This should fail but unfortunately it doesn't
            code: "class Foo { async bar() { } }; const foo = new Foo(); foo.bar();",
        },
        {
            code: 'const foo = async ( lambda: void=>void ) { lambda(); }',
            languageOptions: {
              ecmaVersion: 8,
              parser: parser("no-floating-promise-argument")
            }
        }
    ],
    invalid: [
        {

            // fails if missing an await on a regular function call
            code: "async function foo() {}; async function wrap() { foo(); }",
            output: "async function foo() {}; async function wrap() { await foo(); }",
            languageOptions: { ecmaVersion: 8 },
            errors: [{ messageId: "foundFloating" }]
        },
        {

            // fails if missing an await on a regular function call wrapped in something
            code: "async function foo() {}; async function wrap() { (foo)(); }",
            output: "async function foo() {}; async function wrap() { await (foo)(); }",
            languageOptions: { ecmaVersion: 8 },
            errors: [{ messageId: "foundFloating" }]
        },
        {

            // fails if you"re missing an await on a non-async function that returns a Promise
            code: "function foo(): Promise<void> { return Promise.resolve(); }; async function wrap() { foo(); }",
            output: "function foo(): Promise<void> { return Promise.resolve(); }; async function wrap() { await foo(); }",
            languageOptions: {
              ecmaVersion: 8,
              parser: parser("floating-promise-typed-identifier")
            },
            errors: [{ messageId: "foundFloating" }]
        },
        {

            // fails when missing an await on a FunctionExpression
            code: "async function wrap() { (async function () { return 5; })(); };",
            output: "async function wrap() { await (async function () { return 5; })(); };",
            languageOptions: { ecmaVersion: 8 },
            errors: [{ messageId: "foundFloating" }]
        },
        {

            // fails when missing an await on an ArrowFunctionExpression
            code: "async function wrap() { (async () => 5)(); };",
            output: "async function wrap() { await (async () => 5)(); };",
            languageOptions: { ecmaVersion: 8 },
            errors: [{ messageId: "foundFloating" }]
        },
        {

            // fails when missing an await on a non-async FunctionExpression that returns a Promise
            code: "async function wrap() { (function (): Promise<void> { return Promise.resolve(); })(); };",
            output: "async function wrap() { await (function (): Promise<void> { return Promise.resolve(); })(); };",
            languageOptions: {
              ecmaVersion: 8,
              parser: parser("floating-promise-typed-expression")
            },
            errors: [{ messageId: "foundFloating" }]
        },
        {

            // calling a lambda function argument
            code: 'class Foo { foo = async ( lambda: (void=>Promise<void>) ) => { lambda(); }}',
            output: 'class Foo { foo = async ( lambda: (void=>Promise<void>) ) => { await lambda(); }}',
            languageOptions: {
              ecmaVersion: 8,
              parser: parser("floating-promise-argument")
            },
            errors: [{ messageId: "foundFloating" }]
        },
    ]
});
