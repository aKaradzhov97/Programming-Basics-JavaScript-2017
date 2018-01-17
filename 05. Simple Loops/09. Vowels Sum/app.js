function vowelsSum([arg1]) {
    let s = arg1;
    let sum = 0;

    for (var i = 1; i <= s.length; i++) {
        if (s[i] === "a") {
            sum++;
        } else if (s[i] === "e") {
            sum += 2;
        } else if (s[i] === "i") {
            sum += 3;
        } else if (s[i] === "o") {
            sum += 4;
        } else if (s[i] === "u") {
            sum += 5;
        }
    }
    console.log(sum);
}