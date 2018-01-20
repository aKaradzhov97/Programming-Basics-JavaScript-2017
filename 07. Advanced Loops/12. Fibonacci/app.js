function fibonacci(n) {
    n = Number(n);
    let firstNum = 1;
    let secondNum = 1;
    let fibonacciNum = 0;
    if (n < 2) {
        fibonacciNum = 1;
    } else {
        for (let i = 1; i < n; i++) {
            fibonacciNum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = fibonacciNum;
        }
    }
    console.log(fibonacciNum);
}