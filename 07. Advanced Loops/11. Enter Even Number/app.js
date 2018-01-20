function enterEvenNumber(inputNumbers) {
    let n;
    for (var i = 0; i < inputNumbers.length; i++) {
        try {
            console.log("Enter even number: ");
            n = Number(inputNumbers[i]);
            if (n % 2 === 0) {
                console.log("Even number entered: " + n);
                break;
            } else {
                console.log("Invalid number!");
                continue;
            }
        } catch (e) {
            console.log("Invalid number!");
            continue;
        }
    }
}