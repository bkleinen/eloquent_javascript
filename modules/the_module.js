

function malleableFunction(){
    return "malleableFunction says: "+ module.exports.value
}
function templateMethod(){
    return "templateMethod says: "+ module.exports.hook()
}
function hookMethod(){
    return "internal hook"
}

function localAdapter(){
    return "local adapter"
}
let adapter = localAdapter

function useAdapter( f) {
    adapter = f
}

function templateMethodWithAdapter(){
    return "templateMethodWithAdapter says: " + adapter()
}
module.exports = {
    malleableFunction: malleableFunction,
    templateMethod: templateMethod,
    value: "nothing",
    hook: hookMethod,
    templateMethodWithAdapter: templateMethodWithAdapter,
    useAdapter: useAdapter
}