//import {bigOak} from "./crow-tech";
var bigOak = require("./crow-tech").bigOak;
var defineRequestType = require("./crow-tech").defineRequestType;

test('bigOak', done => {
    bigOak.readStorage("food caches", caches => {
        let firstCache = caches[0];
        bigOak.readStorage(firstCache, info => {
            expect(info).toBe("A hollow above the third big branch from the bottom. Several pieces of bread and a pile of acorns.");
            done();
        });
    });
});

test('messaging', done => {
    bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
        () => {
            console.log("Note delivered.");
            done();
        });
});