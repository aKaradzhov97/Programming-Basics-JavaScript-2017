function leftAndRightSum(args) {
    let n = Number(args[0]);

    let leftSum = 0;
    let rightSum = 0;

    for (var i = 1; i <= n; i++) {
        leftSum += Number(args[i]);
    }
    for (var j = n + 1; j <= 2 * n; j++) {
        rightSum += Number(args[j]);
    }

    if (leftSum === rightSum) {
        console.log("Yes, sum = " + leftSum);
    } else {
        console.log("No, diff = " + Math.abs(leftSum - rightSum));
    }
}