test('for of for in', () => {
    let arr = [3, 5, 7];
    arr.foo = "hallo";
    let a = [];
    for (let i in arr) {
        a.push(i);
        //console.log(i); // logs "0", "1", "2", "foo"
    }
    expect(a).toStrictEqual([ "0", "1", "2", "foo"]);
    a = [];
    for (let i of arr) { // werte
        a.push(i);
    }
    expect(a).toStrictEqual([ 3, 5, 7,]);
});