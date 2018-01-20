function sunglasses([arg1]) {
    let n = Number(arg1);

    //First row
    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));

    //Middle rows
    let middleRow = Math.floor(((n - 2) - 1) / 2);
    for (var row = 0; row < n - 2; row++) {
        if (row === middleRow) {
            console.log("*" + "/".repeat(2 * n - 2) + "*" + "|".repeat(n) + "*" + "/".repeat(2 * n - 2) + "*");
        } else {
            console.log("*" + "/".repeat(2 * n - 2) + "*" + " ".repeat(n) + "*" + "/".repeat(2 * n - 2) + "*");
        }
    }

    //Last row
    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));
}