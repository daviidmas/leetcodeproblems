/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = ""
    let rest = 0
    let oplength = a.length > b.length ? a.length : b.length
    if (a.length > b.length){
        let ilength = a.length-b.length
        for(let i=0;i<ilength;i++){
            b = "0" + b
        }
    } else if(b.length > a.length){
        let jlength = b.length-a.length
        for(let i=0;i<jlength;i++){
            a = "0" + a
        }
    }
    console.log(a)
    console.log(b)
    for(let i=oplength-1;i>=0;i--) {
        console.log("a: " + a[i])
        console.log("b: " + b[i])
        console.log("rest: " + rest)
        if(a[i]=="1"&&b[i]=="1") {
            if(rest==1) {
                res = "1" + res
            } else {
                res = "0" + res
                rest = 1
            }
        } else if(a[i]=="0"&&b[i]=="1"||a[i]=="1"&&b[i]=="0") {
            if(rest == 0) {
                res = "1" + res
            } else {
                res = "0" + res
            }
        } else {
            if(rest==1) {
                res = "1" + res
                rest = 0
            } else {
                res = "0" + res
            }
        }
        console.log("res: " + res)
        
    }
    console.log(rest)
    if(rest==1) {
        res = "1" + res
    }
    return res
};

a = "100", b = "110010"
console.log(addBinary(a, b))