function triangleOfDollars([arg1]) {
    let n = Number(arg1);
    for (var i = 1; i < n + 1; i++) {
        console.log("$ ".repeat(i));
    }
}