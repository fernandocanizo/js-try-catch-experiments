# `try/catch` experiments

Current Node (v8.9.3) stack traces for asynchronous events do not show full stack traces.

These are experiments to find a better way to handle errors.

Some conversations to check out:

https://github.com/nodejs/node/issues/11865

https://github.com/mattinsler/longjohn

Use `USE_REJECT=true node <whatever>/top.js` to run bottom function with
`Promise.reject()`, else it'll default to `throw` from a `setTimeout`.

## haywire-errors

Shows error handling with single top-level `try/catch`.

## try-catch-everywhere

Shows handling errors on each step of the stack.
