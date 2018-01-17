function sumNumbers(args) {
    let sum = 0;
    for (var num = 1; num < args.length; num++) {
        sum = sum + Number(args[num]);
    }
    console.log(sum);
}