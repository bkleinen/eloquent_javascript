test('sum of range', () => {
    let range = (a, b) => {
        return rangeWithStep(a, b, 1);
    };
    let rangeWithStep = (a, b, step) => {
        if (a > b) return range(b, a, step);
        let result = [];
        for (let i = a; i <= b; i += step) {
            result.push(i);
        }
        return result;
    };
    let sum = (a, b) => {
        let sum = 0;
        for (let i of range(a, b)) {
            sum += i;
        }
        return sum;
    }
    expect(range(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(sum(1, 10)).toEqual(55);
});

test('reverse array', () => {
    // Your code here.
    let reverseArray = (a) => {
        let b = [];
        do {
            b.push(a.pop())
        } while (a.length > 0);
        return b;
    };
    expect(reverseArray(["A", "B", "C"])).toStrictEqual(["C", "B", "A"]);
    let swap = (a,i,j) => {
        h = a [i];
        a[i] = a [j];
        a [j] = h;
    };
    let reverseArrayInPlace = (a) => {
        let middle = a.length / 2;
        let last = a.length - 1;
        for(let i = 0; i< middle; i++) {
            swap(a,i,last-i);
        }
    };

    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    expect(arrayValue).toStrictEqual([5, 4, 3, 2, 1]);

});