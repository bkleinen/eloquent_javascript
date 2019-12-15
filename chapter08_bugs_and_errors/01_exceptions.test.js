class MultiplicatorUnitFailure extends Error {
}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            return reliableMultiply(a, b);
        } else {
            throw e;
        }
    }
}


test('a hundert reliable multiplies', () => {
    for (let i = 0; i < 100; i++) {
        let a = Math.floor(Math.random() * 100);
        let b = Math.floor(Math.random() * 100);
        expect(reliableMultiply(a, b)).toBe(a * b);
    }
});
// finally example
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
}