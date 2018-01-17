function squareOfStars([arg1]) {
    let n = Number(arg1);
    console.log("*".repeat(n));

    for (var row = 0; row < n - 2; row++) {
        console.log("*" + " ".repeat(n - 2) + "*");
    }

    console.log("*".repeat(n));
}