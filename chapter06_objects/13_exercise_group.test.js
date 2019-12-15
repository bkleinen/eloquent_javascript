class Group {
    static from(iterable) {
        return new Group(iterable)

    }

    constructor(iterable) {
        this.content = [];
        for (let e of iterable) {
            this.add(e);
        }
    }

    add(e) {
        this.content.push(e)
    }

    has(e) {
        return this.content.includes(e)
    }

    get size() {
        return this.content.length;
    }

    delete(element_to_delete) {
        this.content = this.content.filter(e => e != element_to_delete);
    }
}

test('test group', () => {
    let group = Group.from([10, 20]);
    expect(group.has(10)).toBe(true);
    expect(group.has(30)).toBe(false);
    group.add(10);
    group.delete(10);
    expect(group.has(10)).toBe(false);
});

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        console.log("gz" + this.group.size)
        if (this.index === this.group.size) return {done: true};
        let value = this.group.content[this.index];

        this.index += 1;
        return {value: value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
};
test('iterator', () => {
    // Your code here (and the code from the previous exercise)
    let result = "";
    for (let value of Group.from(["a", "b", "c"])) {
        result += value + " ";
    }
    expect(result).toBe("a b c ");
});