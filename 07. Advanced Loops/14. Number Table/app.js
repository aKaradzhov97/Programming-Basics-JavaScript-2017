function numberTable(n) {
    n = Number(n);
    let result = "";

    for (var row = 0; row < n; row++) {
        for (var col = 0; col < n; col++) {
            let num = row + col + 1;

            if (num > n) {
                num = 2 * n - num;
            }
            result += num + " ";
        }
        console.log(result);
        result = "";
    }
}