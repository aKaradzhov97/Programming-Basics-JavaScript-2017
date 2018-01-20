function christmasTree([arg1]) {
    let n = Number(arg1);
    for (var row = 0; row <= n; row++) {
        console.log(" ".repeat(n - row) + "*".repeat(row) + " | " + "*".repeat(row) + " ".repeat(n - row));
    }
}