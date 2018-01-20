function house([arg1]) {
    let n = Number(arg1);
    let currentStars = 0;
    if (n % 2 === 1) {
        currentStars = 1;
    } else {
        currentStars = 2;
    }
    let roofRowIndex = Math.floor((n + 1) / 2);
    for (var row = 0; row < roofRowIndex; row++) {
        console.log("-".repeat((n - currentStars) / 2) + "*".repeat(currentStars) + "-".repeat((n - currentStars) / 2));
        currentStars += 2;
    }
    let heightOfHouseBody = n - roofRowIndex;
    for (var i = roofRowIndex; i < n; i++) {
        console.log("|" + "*".repeat(n - 2) + "|");
    }
}