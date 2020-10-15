function strJoin(n, name1, name2, name3) {
    var strArr = new Array(name1, name2, name3);
    var res = new String;
    strArr.sort();
    for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
        var i = strArr_1[_i];
        res = res.concat(i);
        res = res.concat(n);
    }
    return res;
}
var s = strJoin("#", "Aditi", "Amisha", "Pooja");
console.log(s);
