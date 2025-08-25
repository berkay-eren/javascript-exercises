const repeatString = function(str, limit) {
    if(limit < 0) return "ERROR";
    let res = "";
    for(let i = 0; i < limit; i++){
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
