describe("jest shared state", () => {
    let counter = 0
    it("increases counter 1", () => {
        counter++
        expect(counter).toBe(1)
    })
    it("increases counter 2", () => {
        counter++
        expect(counter).not.toBe(1)
    })
})