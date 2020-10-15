function cal(n) {
    var min = n[0];
    var max = n[0];
    var s = 0;
    for (var _i = 0, n_1 = n; _i < n_1.length; _i++) {
        var element = n_1[_i];
        if (min > element)
            min = element;
    }
    console.log("minimum is" + min);
    for (var _a = 0, n_2 = n; _a < n_2.length; _a++) {
        var element = n_2[_a];
        if (max < element)
            max = element;
    }
    console.log("maximum is" + max);
    for (var _b = 0, n_3 = n; _b < n_3.length; _b++) {
        var e = n_3[_b];
        s += e;
    }
    console.log(s);
}
var n = [2, 4, 5, 3];
cal(n);
