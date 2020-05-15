describe('modules injection', () => {
    describe('values', () => {
        const theModule = require('./the_module')
        it("exports a function", () => {
            expect(theModule.malleableFunction()).toBe("malleableFunction says: nothing")
        })
        it("function can be changed", () => {
            theModule.value = "something"
            expect(theModule.malleableFunction()).toBe("malleableFunction says: something")
        })
    })
    describe('methods', () => {
        const theModule = require('./the_module')
        function injectedHook(){
            return "injected hook"
        }
        it("exports a function", () => {
            expect(theModule.templateMethod()).toBe("templateMethod says: internal hook")
        })
        it("function can be changed", () => {
            theModule.hook = injectedHook
            expect(theModule.templateMethod()).toBe("templateMethod says: injected hook")
        })
    })
})