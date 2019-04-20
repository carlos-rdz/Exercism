

export function transform(oldObj){
    let newObj = {}
    for (var key in oldObj) {
        oldObj[key].forEach(element => {

            newObj[element.toLowerCase()] = parseInt(key)
        });
    }
    return newObj
}