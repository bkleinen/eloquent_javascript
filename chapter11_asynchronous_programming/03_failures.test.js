/*
A widely used convention is that the first argument to the callback is
used to indicate that the action failed, and the second contains the
value produced by the action when it was successful. Such callback
 functions must always check whether they received an exception and
 make sure that any problems they cause, including exceptions thrown
 by functions they call, are caught and given to the right function.

Promises make this easier.

They can be either resolved (the action finished successfully) or
rejected (it failed). Resolve handlers (as registered with then) are
called only when the action is successful, and rejections are
automatically propagated to the new promise that is returned by then.
And when a handler throws an exception, this automatically causes the
promise produced by its then call to be rejected. So if any element in
a chain of asynchronous actions fails, the outcome of the whole chain
is marked as rejected, and no success handlers are called beyond the
point where it failed.


 */
test('handling failures with Promise', done => {
    new Promise((_, reject) => reject(new Error("Fail")))
        .then(value => console.log("Handler 1"))
        .catch(reason => {
            console.log("Caught failure " + reason);
            return "nothing";
        })
        .then(value => console.log("Handler 2", value)).then(_ => done());
// → Caught failure Error: Fail
// → Handler 2 nothing

});

test('handling failures with Promise 2', done => {
    let result = "";
    new Promise((_, reject) => reject(new Error("Fail")))
        .then(value => result += "Handler 1")
        .catch(reason => {
            result += "Caught failure " + reason +" ";
            return "nothing";
        })
        .then(value => result += "Handler 2" + value)
        .then(_ => {
            expect(result).toBe( "Caught failure Error: Fail Handler 2nothing");
            done();
        });
// → Caught failure Error: Fail
// → Handler 2 nothing

});