function numberFrom1To100(inputNumbers) {
    let currentNumber = Number(inputNumbers[0]);
    let counter = 1;
    while (currentNumber < 1 || currentNumber > 100) {
        console.log("Invalid number");
        currentNumber = inputNumbers[counter];
        counter++;
    }

    console.log(`The number is: ${currentNumber}`);
}