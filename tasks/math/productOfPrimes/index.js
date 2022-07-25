"use strict";
exports.__esModule = true;
exports.productOfPrimes = void 0;
var productOfPrimes = function (val) {
    var res = false;
    for (var i = 1; i < val; i++) {
        for (var j = 1; j < val; j++) {
            if (j * i === val && isPrime(i) && isPrime(j)) {
                res = true;
                console.log(i + "   " + j);
            }
            res = false;
        }
    }
    return res;
};
exports.productOfPrimes = productOfPrimes;
var isPrime = function (num) {
    for (var i = 1; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
};
