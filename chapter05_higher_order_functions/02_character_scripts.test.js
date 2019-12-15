
var cs = require('./character_scripts.js');
test('count scripts', () => {

    expect(cs.characterScript(121).name).toBe("Latin");
// → {name: "Latin", …}

    expect(cs.countBy([1, 2, 3, 4, 5], n => n > 2)).toStrictEqual([{name: false, count: 2}, {name: true, count: 3}]);

    expect(cs.textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')).toBe("61% Han, 22% Latin, 17% Cyrillic");
// → 61% Han, 22% Latin, 17% Cyrillic
});