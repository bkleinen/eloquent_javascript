test('car and cat', () => {
    verify(/ca(r|t)/,
        ["my car", "bad cats"],
        ["camper", "high art"]);
});
test('pop and prop', () => {
    verify(/pr?op/,
        ["pop culture", "mad props"],
        ["plop", "prrrop"]);

});
test('ferret, ferry, and ferrari', () => {
    verify(/ferr(et|y|ari)/,
        ["ferret", "ferry", "ferrari"],
        ["ferrum", "transfer A"]);

});
test('Any word ending in ious', () => {
    verify(/ious\b/,
        ["how delicious", "spacious room"],
        ["ruinous", "consciousness"]);
});
test('A whitespace character followed by a period, comma, colon, or semicolon', () => {
    verify(/\s[.,;:]/,
        ["bad punctuation ."],
        ["escape the period"]);
});
test('A word longer than six letters', () => {
    verify(/\w{7,}/,
        ["hottentottententen"],
        ["no", "hotten totten tenten"]);
});
test('A word without the letter e (or E)', () => {
    verify(/\b[^E^e\s]+\b/,
        ["red platypus", "wobbling nest"],
        ["earth bed", "learning ape", "BEET"]);
});


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source === "...") return;
    for (let str of yes) {
        expect(str).toMatch(regexp);
        //expect(regexp.test(str)).toBe(true);
    }
    for (let str of no)  {
        expect(str).not.toMatch(regexp);
        //expect(regexp.test(str)).toBe(false);
    }
}