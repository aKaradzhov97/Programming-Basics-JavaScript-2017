function numberPyramid(n) {
    n = Number(n);
    let counter = 1;
    let num = 1;
    let row = "";

    while (num <= n) {
        for (var j = 0; j < num; j++) {
            if (counter <= n) {
                row = row + counter + " ";
                counter++;
            } else {
                break;
            }
        }
        console.log(row);
        row = "";
        num++;
    }
}
numberPyramid(10);