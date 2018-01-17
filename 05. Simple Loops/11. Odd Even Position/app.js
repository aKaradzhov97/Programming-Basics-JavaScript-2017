function oddEvenPositions(args) {
    let n = Number(args[0]);

    let evenSum = Number(0);
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;

    let oddSum = Number(0);
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;

    for (var i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        if (i % 2 === 0) {
            evenSum += currentNumber;
            if (evenMin > currentNumber) {
                evenMin = currentNumber;
            }
            if (evenMax < currentNumber) {
                evenMax = currentNumber;
            }
        } else {
            oddSum += currentNumber;
            if (oddMin > currentNumber) {
                oddMin = currentNumber;
            }
            if (oddMax < currentNumber) {
                oddMax = currentNumber;
            }
        }
    }
    console.log("OddSum=" + oddSum + ",");
    if (oddMin == Infinity) {
        console.log("OddMin=No,");
    } else {
        console.log("OddMin=" + oddMin + ",");
    }
    if (oddMax == -Infinity) {
        console.log("OddMax=No,");
    } else {
        console.log("OddMax=" + oddMax + ",");
    }
    console.log("EvenSum=" + evenSum + ",");
    if (evenMin == Infinity) {
        console.log("EvenMin=No,");
    } else {
        console.log("EvenMin=" + evenMin + ",");
    }
    if (evenMax == -Infinity) {
        console.log("EvenMax=No,");
    } else {
        console.log("EvenMax=" + evenMax + ",");
    }
}