function halfSumElement(args) {
    let n = Number(args[0]);
    let maxNumber = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for (var i = 1; i <= n; i++) {
        if (Number(args[i]) > maxNumber) {
            maxNumber = Number(args[i]);
        }
    }

    for (var i = 1; i <= n; i++) {
        sum += Number(args[i]);
    }
    sum = sum - maxNumber;
    if (sum === maxNumber) {
        console.log(`Yes`)
        console.log(`Sum = ${sum}`)
    } else {
        console.log(`No`)
        console.log(`Diff = ${Math.abs(sum - maxNumber)}`)
    }
}