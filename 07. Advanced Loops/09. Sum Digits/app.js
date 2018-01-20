function sumDigits([num]) {
    let sum = 0;
    while (num !== 0) {
        let currentDigit = num % 10;
        num = Math.floor(num / 10);
        sum += currentDigit;
    }
    console.log(sum);
}