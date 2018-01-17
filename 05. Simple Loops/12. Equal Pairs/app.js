function equalPairs(parameters) {
    let numberOfPairs = Number(parameters[0]);
    let previousSum = Number(parameters[1]) + Number(parameters[2]);
    let currentSum = previousSum;
    let maxDifference = 0;
    for (var i = 3; i < parameters.length; i += 2) {
        let firstElementOfPair = Number(parameters[i]);
        let secondElementOfPair = Number(parameters[i + 1]);

        currentSum = firstElementOfPair + secondElementOfPair;
        if (previousSum !== currentSum) {
            maxDifference = Math.abs(previousSum - currentSum);
        }

        previousSum = currentSum;
    }
    if (maxDifference === 0) {
        console.log(`Yes, value=${currentSum}`);
    } else {
        console.log(`No, maxdiff=${maxDifference}`);
    }
}