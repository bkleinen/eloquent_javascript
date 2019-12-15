require('./scripts.js');
test('living scripts, my filter and map', () => {
    function filter(array, test) {
        let passed = [];
        for (let element of array) {
            if (test(element)) {
                passed.push(element);
            }
        }
        return passed;
    }

    function map(array, fun) {
        let result = [];
        for (let element of array) {
            result.push(fun(element));
        }
        return result;
    }

    let living = filter(SCRIPTS, script => script.living)
    expect(living.length).toBe(83);
    expect(map(living, e => e.name)).toStrictEqual(["Adlam", "Arabic", "Armenian", "Balinese", "Bamum", "Batak", "Bengali", "Bopomofo", "Braille", "Buginese", "Buhid", "Chakma", "Canadian Aboriginal", "Cham", "Cherokee", "Cyrillic", "Devanagari", "Deseret", "Duployan", "Ethiopic", "Georgian", "Masaram Gondi", "Greek", "Gujarati", "Gurmukhi", "Hangul", "Han", "Hanunoo", "Hebrew", "Hiragana", "Pahawh Hmong", "Javanese", "Kayah Li", "Katakana", "Khmer", "Kannada", "Tai Tham", "Lao", "Latin", "Lepcha", "Limbu", "Lisu", "Mandaic", "Mende Kikakui", "Malayalam", "Mro", "Meetei Mayek", "Myanmar", "Newa", "Nushu", "Ol Chiki", "Oriya", "Osage", "Osmanya", "Pau Cin Hau", "Miao", "Rejang", "Samaritan", "Saurashtra", "SignWriting", "Shavian", "Sharada", "Khudawadi", "Sinhala", "Sora Sompeng", "Sundanese", "Syloti Nagri", "Syriac", "Tagbanwa", "Takri", "Tai Le", "New Tai Lue", "Tamil", "Tai Viet", "Telugu", "Tifinagh", "Tagalog", "Thaana", "Thai", "Tirhuta", "Vai", "Warang Citi", "Yi"]);

});
test('their filter and map', () => {
    function filter(array, test) {
        let passed = [];
        for (let element of array) {
            if (test(element)) {
                passed.push(element);
            }
        }
        return passed;
    }

    function map(array, transform) {
        let mapped = [];
        for (let element of array) {
            mapped.push(transform(element));
        }
        return mapped;
    }

    let rtlScripts = SCRIPTS.filter(s => s.direction === "rtl");
    expect(map(rtlScripts, s => s.name)).toStrictEqual([
        "Adlam",
        "Arabic",
        "Imperial Aramaic",
        "Avestan",
        "Cypriot",
        "Hatran",
        "Hebrew",
        "Old Hungarian",
        "Kharoshthi",
        "Lydian",
        "Mandaic",
        "Manichaean",
        "Mende Kikakui",
        "Meroitic Cursive",
        "Meroitic Hieroglyphs",
        "Old North Arabian",
        "Nabataean",
        "Nko",
        "Old Turkic",
        "Palmyrene",
        "Inscriptional Pahlavi",
        "Psalter Pahlavi",
        "Phoenician",
        "Inscriptional Parthian",
        "Samaritan",
        "Old South Arabian",
        "Syriac",
        "Thaana",
    ]);
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

});

test('reduce', () => {
    function reduce(array, combine, start) {
        let current = start;
        for (let element of array) {
            current = combine(current, element);
        }
        return current;
    }
    expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);

    function average(array) {
        return array.reduce((a, b) => a + b) / array.length;
    }
    // the living scripts are younger than the non-living scripts.
    expect(Math.round(average(
        SCRIPTS.filter(s => s.living).map(s => s.year)))).toBe(1165);

    expect(Math.round(average(
        SCRIPTS.filter(s => !s.living).map(s => s.year)))).toBe(204);

});