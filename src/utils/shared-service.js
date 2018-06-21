'use strict'

let stripNamespace = function(obj, ns) {
    if (obj instanceof Array || obj instanceof Object) {
        var objString = JSON.stringify(obj);
        objString = objString.replace(new RegExp(ns, 'g'), '')
        var result = JSON.parse(objString);
    } else if (obj instanceof String) {
        var result = obj.replace(new RegExp(ns, 'g'), '')
    } else {
        var result = obj;
    }
    return result;
}

let loader = {
    page: true
}

let sharedService = {
    stripNamespace: stripNamespace,
    loader: loader
};


export default sharedService;