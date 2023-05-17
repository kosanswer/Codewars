function noSpace(x){
let newStr = ''
    for(let y = 0; y < x.length; y++) {
        if(x[y] !== " "){
            newStr += x[y]
        }
    }
    return newStr
}
