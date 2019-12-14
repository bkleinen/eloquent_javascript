require('./journal.js');
// https://eloquentjavascript.net/04_data.html
test('', () => {
    function phi([n00, n01, n10, n11]) {
        return (n11 * n00 - n10 * n01) /
            Math.sqrt((n10 + n11) * (n00 + n01) *
                (n01 + n11) * (n00 + n10));
    }

    function tableFor(event, journal) {
        let table = [0, 0, 0, 0];
        for (let entry of JOURNAL) {
            let index = 0;
            if (entry.events.includes(event)) index += 1;
            if (entry.squirrel) index += 2;
            table[index] += 1;
        }
        return table;
    }

    expect(tableFor("pizza", JOURNAL)).toStrictEqual([76, 9, 4, 1]);

    function journalEvents(journal) {
        let events = [];
        for (let entry of journal) {
            for (let event of entry.events) {
                if (!events.includes(event)) {
                    events.push(event);
                }
            }
        }
        return events;
    }

    expect(journalEvents(JOURNAL)).toStrictEqual([
        "carrot",
        "exercise",
        "weekend",
        "bread",
        "pudding",
        "brushed teeth",
        "touched tree",
        "nachos",
        "cycling",
        "brussel sprouts",
        "ice cream",
        "computer",
        "potatoes",
        "candy",
        "dentist",
        "running",
        "pizza",
        "work",
        "beer",
        "cauliflower",
        "lasagna",
        "lettuce",
        "television",
        "spaghetti",
        "reading",
        "peanuts",
    ]);
    let allEvents = journalEvents(JOURNAL);
    for (let event of allEvents) {
        let correlation = phi(tableFor(event, JOURNAL));
        if (correlation > 0.1 || correlation < -0.1) {
            console.log(event + ":", correlation);
        }
    }

    for (let entry of JOURNAL) {
        if (entry.events.includes("peanuts") &&
            !entry.events.includes("brushed teeth")) {
            entry.events.push("peanut teeth");
        }
    }
    console.log("peanut teeth correlation: " + phi(tableFor("peanut teeth", JOURNAL)));
});