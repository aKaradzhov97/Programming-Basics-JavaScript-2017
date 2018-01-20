function squareFrame([arg1]) {
    let n = Number(arg1);

    //First row
    console.log("+ " + "- ".repeat(n - 2) + "+");

    //Middle part
    for (var i = 1; i <= n - 2; i++) {
        console.log("| " + "- ".repeat(n - 2) + "|");
    }

    //Last row
    console.log("+ " + "- ".repeat(n - 2) + "+");
}