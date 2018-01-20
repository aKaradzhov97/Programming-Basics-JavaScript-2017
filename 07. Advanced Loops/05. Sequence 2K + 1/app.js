function sequence2KPlus1([n]) {
    let currentNumber = 1;
    while (currentNumber <= n) {
        console.log(currentNumber);
        currentNumber = currentNumber * 2 + 1;
    }
}