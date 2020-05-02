/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

test('Promise.all 1', done => {
    Promise.all([promise1, promise2, promise3]).then(function(values) {
        expect(values).toStrictEqual([ 3, 42, 'foo' ]);
        done();
    });
})

// expected output: Array [3, 42, "foo"]


//
function simpleSlowAsyncMethod(n) {
    setTimeout((n) => {
        return n * 2;
    }, 1000)
}

function multiplyer(n) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, n*2);
    })
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const promises = numbers.map(multiplyer);


test('Promise.all numbers', done => {

    Promise.all(promises).then(function(values) {
        expect(values).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
        done();
    });
})



