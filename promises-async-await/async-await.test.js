// examples from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

describe("async and await", () => {
    test('plain function', () => {
        function hello() {
            return "Hello"
        }

        expect(typeof hello() ).toBe("string")
        expect(hello()).toBe("Hello");
    })
    /*
    This is one of the traits of async functions — their return values are guaranteed to be converted to promises.
     */
    test('async function returns a promise', () => {
        async function hello() {
            return "Hello"
        }

        const result = hello()
        expect(result instanceof Promise).toBe(true);
    })
    test('needs to be continued!',()=>{

        expect(true).toBe(false)
    })
})

