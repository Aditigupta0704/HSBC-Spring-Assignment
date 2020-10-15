function cal(x, y) {
    var a = 1;
    var res = 1;
    while (a <= y) {
        res = res * x;
        a = a + 1;
    }
    return res;
}
var s = cal(2, 3);
console.log(s);
