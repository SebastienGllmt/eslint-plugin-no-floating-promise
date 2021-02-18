# eslint-plugin-no-floating-promise

Detects missing await on async function calls

**STOP**: Are you a Flow or a Typescript user?
Prefer these:
- Flow: [link](https://github.com/facebook/flow/pull/8482)
- Typescript: [link](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-floating-promise`:

```
$ npm install eslint-plugin-no-floating-promise --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-floating-promise` globally.

## Usage

Add `no-floating-promise` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-floating-promise"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-floating-promise/no-floating-promise": 2
    }
}
```

# Rule definition

_The `--fix` option on the command line automatically fixes problems reported by this rule._

Promises that are never awaited can cause unexpected behavior because they may be scheduled to execute at an unexpected time.

It's easy to accidentally make this mistake. For example, suppose we have the code

```js
function writeToDb() {
  // synchronously write to DB
}
writeToDb();
```

but the code gets refactored so that writing to the database is asynchronous.

```js
async function writeToDb() {
  // asynchronously write to DB
}
writeToDb(); // <- note we have no await here but probably the user intended to await on this!
```

## Rule Details

This rule will fire for any call to an `async` function that both

* not used (not assigned to a variable, not the return type of a function, etc.)
* not awaited on

Examples of **incorrect** code for this rule:

```js
/*eslint no-floating-promise: "error"*/

async function foo() {}
foo();

(async () => 5)();

// note: function is not async but a Promise return type is specified
function foo(): Promise<void> { return Promise.resolve(); };
foo();
```

Examples of **correct** code for this rule:

```js
/*eslint no-floating-promise: "error"*/

async function foo() {}
await foo();

await (async () => 5)();

// note: function is not async but a Promise return type is specified
function foo(): Promise<void> { return Promise.resolve(); };
await foo();

// note: promise is not awaited, but it is chained with a 'then'
async function foo() {}
foo().then(() => {});
```

You may catch additional errors by combining this rule with `no-unused-expression`.

For example the following will not be considered an error by this plugin, but `no-unused-expression` will complain that `fooResult` is never used.

```js
async function foo() {}
const fooResult = foo();
```

## When Not To Use It

If you often make use of asynchronous functions were you explicitly do not want to await on them.

# Notable design decisions

## Promises returned by non-async functions

It's possible for a function to return a promise and not be async (as seen in test cases for this rule). My rule can leverage type annotations to detect these cases but if no type annotation  is present, then no error is reported. We could modify this rule to traverse into the AST to see if the return is a promise or not but this sounds more expensive and would still not catch all cases so I didn't include this logic.

Additionally, TypeAnnotations are only generated for explicit Flow types so this rule can't take advantage of Flow inference. You could argue this rule would be more effective if implemented directly in Flow but this rule can still catch cases for vanilla Javascript so it didn't feel right to make Flow a dependency for this kind of linting.

## Scope of the rule

Currently using `then`  or `catch` silences this rule
```js
async function foo() {}
foo().then(() => {});
```

You could argue this is desired since it avoids false-positive where developers explicitly do not want to await. I'm open to feedback about whether or not people want this behavior.

## Missing `await` in non-async context

Right now my rule reports an error in the following case
```js
async function foo() {}
function bar() {
    foo();
}
```

However, adding an `await` here is not  possible because `bar` is not an async function. In fact, my auto-fix rule would add an `await` in front of `foo` which would result in a compiler error.

However, likely this actually is an error and the user actually should make `bar` an async function. However, I am open to disabling this rule in this context if that's what people want.

# Limitations

1) It cannot make use of Flow inference (you need to explicitly specify types)
2) It does not work across file boundaries (if import a function from a different file, you don't have any information)
3) It doesn't work on member function calls (`foo.bar()` will not detect  an error  even if  `bar` is an async function)
