function tradeComissions([arg1, arg2]) {
    let city = arg1.toLowerCase();
    let sales = Number(arg2);
    let commission = -1;

    if (city === "sofia") {
        if (sales > 0 && sales <= 500) {
            commission = 0.05;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.08;
        } else if (sales > 10000) {
            commission = 0.12;
        }
    } else if (city === "varna") {
        if (sales > 0 && sales <= 500) {
            commission = 0.045;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.10;
        } else if (sales > 10000) {
            commission = 0.13;
        }
    } else if (city === "plovdiv") {
        if (sales > 0 && sales <= 500) {
            commission = 0.055;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.12;
        } else if (sales > 10000) {
            commission = 0.145;
        }
    }
    if (commission < 0) {
        console.log("error");
    } else {
        console.log((sales * commission).toFixed(2));
    }
}