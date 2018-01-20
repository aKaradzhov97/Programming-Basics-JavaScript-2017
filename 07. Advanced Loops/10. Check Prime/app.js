function primeNumber([num]) {
    let isPrime = true;
    num = Number(num);
    if (num < 2) {
        isPrime = false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Prime");
    } else {
        console.log("Not prime");
    }
}