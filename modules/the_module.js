

function malleableFunction(){
    return "malleableFunction says: "+ module.exports.value
}
function templateMethod(){
    return "templateMethod says: "+ module.exports.hook()
}
function hookMethod(){
    return "internal hook"
}
module.exports = {
    malleableFunction: malleableFunction,
    templateMethod: templateMethod,
    value: "nothing",
    hook: hookMethod
}