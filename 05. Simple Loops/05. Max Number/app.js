function maxNumber(inputParameters) {
    let biggestNumber = Number.NEGATIVE_INFINITY;
    for (var i = 1; i < inputParameters.length; i++) {
        let currentNumber = Number(inputParameters[i]);
        if (currentNumber > biggestNumber) {
            biggestNumber = currentNumber;
        }
    }
    console.log(biggestNumber);
}