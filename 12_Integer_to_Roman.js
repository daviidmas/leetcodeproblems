/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let numString = num.toString()
    let res = ""
    for(let i=0;i<numString.length;i++){
        let numi = numString[i] * Math.pow(10, numString.length-(i+1))
        if(numi.toString()[0] == "4") {
            switch(numi.toString().length) {
                case 1:
                    res += "IV"
                    break;
                case 2:
                    res += "XL"    
                    break;
                case 3:
                    res += "CD"    
                    break;
            }
        } else if (numi.toString()[0] == "9") {
            switch(numi.toString().length) {
                case 1:
                    res += "IX"
                    break;
                case 2:
                    res += "XC"    
                    break;
                case 3:
                    res += "CM"    
                    break;
            }
        } else {
            if(numi%1000==0 || numi-1000 >= 0) {
                for(let i=0;i<Math.floor(numi/1000);i++){
                    res += "M"
                }
            } else if(numi%500==0 || numi-500 >= 0) {
                let count  = numi
                for(let i=0;i<Math.floor(numi/500);i++){
                    res += "D"
                    count -= 500
                }
                if(count > 0) {
                    if(count%100==0 || count-100 >= 0) {
                        for(let i=0;i<Math.floor(count/100);i++){
                            res += "C"
                        }
                    }
                }
            } else if(numi%100==0 || numi-100 >= 0) {
                for(let i=0;i<Math.floor(numi/100);i++){
                    res += "C"
                }
            } else if(numi%50==0 || numi-50 >= 0) {
                let count = numi
                for(let i=0;i<Math.floor(numi/50);i++){
                    res += "L"
                    count -= 50
                }
                if(count > 0) {
                    if(count%10==0 || count-10 >= 0) {
                        for(let i=0;i<Math.floor(count/10);i++){
                            res += "X"
                        }
                    }
                }
            } else if(numi%10==0 || numi-10 >= 0) {
                for(let i=0;i<Math.floor(numi/10);i++){
                    res += "X"
                }
            } else if(numi%5==0 || numi-5 >= 0) {
                let count = numi
                for(let i=0;i<Math.floor(numi/5);i++){
                    res += "V"
                    count -= 5
                }
                if(count > 0) {
                    if(count%1==0 || count-1 >= 0) {
                        for(let i=0;i<Math.floor(count/1);i++){
                            res += "I"
                        }
                    }
                }
            } else if(numi%1==0 || numi-1 >= 0) {
                for(let i=0;i<Math.floor(numi/1);i++){
                    res += "I"
                }
            }
        }
    }
    return res
};

console.log(intToRoman(58))