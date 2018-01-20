function evenPowersOf2([n]) {
    n = Number(n);
    let num = 1;

    for (var i = 0; i <= n; i+=2) {
        console.log(num);
        num = num * 4;
    }
}