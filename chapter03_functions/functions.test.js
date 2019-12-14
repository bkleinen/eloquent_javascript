function square(x) {
    return x * x;
}

let launchMissiles = function () {
    // missileSystem.launch("now");
};
let safeMode = true;
if (safeMode) {
    launchMissiles = function () {/* do nothing */
    };
}
const square1 = (x) => {
    return x * x;
};
const square2 = x => x * x;

test('stack', () => {
        function chicken() {
            return egg();
        }

        function egg() {
            return chicken();
        }
        //expect(chicken()).toBe("");
        expect(() => {
            chicken();
        }).toThrow();
    }
)
;