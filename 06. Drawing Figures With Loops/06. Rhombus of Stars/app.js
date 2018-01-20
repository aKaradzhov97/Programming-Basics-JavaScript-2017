function rhombusOfStars([arg1]) {
    let n = Number(arg1);

    //First half
    for (var row = 1; row <= n; row++) {
        console.log(" ".repeat(n - row) + "* ".repeat(row) + " ".repeat(n - row));
    }

    //Second half
    for (var row = n - 1; row >= 1; row--) {
        console.log(" ".repeat(n - row) + "* ".repeat(row) + " ".repeat(n - row));
    }
}