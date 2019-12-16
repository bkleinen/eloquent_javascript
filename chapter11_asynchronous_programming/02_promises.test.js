/*
https://eloquentjavascript.net/11_async.html#h_sdRy5CTAP
This is what the standard class Promise is for. A promise is an
asynchronous action that may complete at some point and produce
a value. It is able to notify anyone who is interested when its
value is available.
 */

test('promise', done => {
    let fifteen = Promise.resolve(42);
    fifteen.then(value => {
        expect(`Got ${value}`).toBe("Got 42");
        done();
    });
});
/*
It is useful to think of promises as a device to move
values into an asynchronous reality.
 */
var bigOak = require("./crow-tech").bigOak;
test('read storage with promise', testDone => {
    function storage(nest, name) {
        return new Promise(resolve => {
            nest.readStorage(name, result => resolve(result));
        });
    }

    storage(bigOak, "enemies")
        .then(value => {
            expect(value).toStrictEqual(["Farmer Jacques' dog", "The butcher", "That one-legged jackdaw", "The boy with the airgun"]);
           // console.log("Got", value);
            testDone();
        });

});