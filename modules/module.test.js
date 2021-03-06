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
    describe('all blocks use the same import', () => {
        const theModule = require('./the_module')
        it("new import - influenced by other tests", () => {
            expect(theModule.malleableFunction()).toBe("malleableFunction says: something")
        })
    })
    describe('all blocks use the same import even if named differently', () => {
        const theModule2 = require('./the_module')
        it("new import - influenced by other tests", () => {
            expect(theModule2.malleableFunction()).toBe("malleableFunction says: something")
        })
    })
    describe('methods written to local variables', () => {
        const theModule = require('./the_module')
        function injectedHook(){
            return "injected hook"
        }
        it("exports a function", () => {
            expect(theModule.templateMethodWithAdapter()).toBe("templateMethodWithAdapter says: local adapter")
        })
        it("function can be changed", () => {
            theModule.useAdapter(() => "injected adapter")
            expect(theModule.templateMethodWithAdapter()).toBe("templateMethodWithAdapter says: injected adapter")
        })
    })
})