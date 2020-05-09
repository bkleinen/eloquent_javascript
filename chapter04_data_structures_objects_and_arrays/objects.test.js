test('object properties', () => {
    let day1 = {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running"]
    };
    expect(day1.squirrel).toBe(false);
    expect(day1.wolf).toBe(undefined);
    // expect(() => {day1.wolf}).toThrow(ReferenceError); // → undefined
    day1.wolf = false;
    expect(day1.wolf).toBe(false);
});
test('property names can be strings', () => {
    let descriptions = {
        work: "Went to work",
        "touched tree": "Touched a tree"
    };
    expect(descriptions.work).toBe("Went to work");
    // found in https://www.w3schools.com/js/js_objects.asp
    expect(descriptions["touched tree"]).toBe("Touched a tree");

});

test('checking on keys', () => {
    let anObject = {left: 1, right: 2};
    expect(anObject.left).toBe(1);
    delete anObject.left;
    expect(anObject.left).toBe(undefined);
    expect("left" in anObject).toBe(false);
    expect("right" in anObject).toBe(true);
});
test('object keys', () => {
    expect(Object.keys({x: 0, y: 0, z: 2})).toStrictEqual(["x", "y", "z"]);
});

test('You can see them as long, flat octopuses with all their tentacles in a neat row, labeled with numbers.', () => {
    let journal = [
        {
            events: ["work", "touched tree", "pizza",
                "running", "television"],
            squirrel: false
        },
        {
            events: ["work", "ice cream", "cauliflower",
                "lasagna", "touched tree", "brushed teeth"],
            squirrel: false
        },
        {
            events: ["weekend", "cycling", "break", "peanuts",
                "beer"],
            squirrel: true
        },
        /* and so on... */
    ];
});

test('const objects', () => {
    const score = {visitors: 0, home: 0};
// This is okay
    score.visitors = 1;
    // This isn't allowed
    //  score = {visitors: 1, home: 1};
    expect(score.visitors).toBe(1);

});

test('check if field is defined', () =>{
    const score = {visitors: 0, home: 0};
    const fieldNameDefined = "visitors"
    const fieldNameUndefined = "all"
    expect(score[fieldNameDefined] == undefined).toBe(false)
    expect(score[fieldNameUndefined] == undefined).toBe(true)
})