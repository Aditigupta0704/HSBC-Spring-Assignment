function sqr(n) {
    var sqrtarr = new Array();
    for (var _i = 0, n_1 = n; _i < n_1.length; _i++) {
        var i = n_1[_i];
        sqrtarr.push(Math.sqrt(i));
    }
    return sqrtarr;
}
var arr = sqr([4, 16, 25]);
console.log(arr);
