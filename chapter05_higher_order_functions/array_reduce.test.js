const adder = (acc, val) => acc + val
test('reduce initial value', () => {
    expect([1, 2, 3, 4, 5].reduce(adder, 23)).toBe(38);

});

groupModules = function (modules, module) {
    const code = module.code
    if (!(code in modules)) {
        modules[code] = {code: code, modules: []}
    }
    modules[code].modules.push(module)
    return modules
}


test('reduce object keys', () => {
    const modules = [{code: "B1", name: "Informatics 1 SU"},
        {code: "B1", name: "Informatics 1 Lab"},
        {code: "B15", name: "b1"},
        {code: "B15", name: "b2"}]
    const actual = modules.reduce(groupModules, {});
    const expected =  {"B1": {"code": "B1", "modules": [{"code": "B1", "name": "Informatics 1 SU"}, {"code": "B1", "name": "Informatics 1 Lab"}]}, "B15": {"code": "B15", "modules": [{"code": "B15", "name": "b1"}, {"code": "B15", "name": "b2"}]}}
    expect(actual).toStrictEqual(expected)

});