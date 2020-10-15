function find(n) {
    var s = 0;
    var r;
    while (n != 0) {
        r = n % 10;
        s = s + r;
        n = Math.floor(n / 10);
    }
    return s;
}
var sum = find(12345);
console.log(sum);
