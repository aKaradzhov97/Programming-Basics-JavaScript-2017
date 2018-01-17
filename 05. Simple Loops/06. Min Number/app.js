function minNumber(inputParameters) {
    let minNumber = Number.POSITIVE_INFINITY;
    for (var i = 1; i < inputParameters.length; i++) {
        let currentNumber = Number(inputParameters[i]);
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
    }
    console.log(minNumber);
}