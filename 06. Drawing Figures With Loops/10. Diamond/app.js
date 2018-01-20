function diamond([n]) {
    n = Number(n);
    let = currentNumberOfStartStars = 0;
    if (n % 2 === 0) {
        currentNumberOfStartStars = 2;
    } else {
        currentNumberOfStartStars = 1;
    }
    let numberOfOuterDashes = (n - currentNumberOfStartStars) / 2;
    //First Row

    console.log("-".repeat(numberOfOuterDashes) +
        "*".repeat(currentNumberOfStartStars) +
        "-".repeat(numberOfOuterDashes));

    //First middle of Diamond
    let numberOfDashesInMiddle = currentNumberOfStartStars;
    let heightOfFirstMiddle = Math.floor((n - 1) / 2);


    for (var i = 0; i < heightOfFirstMiddle; i++) {
        let numberOfOuterDashes = (n - 2 - numberOfDashesInMiddle) / 2;
        console.log(
            "-".repeat(numberOfOuterDashes) +
            "*" +
            "-".repeat(numberOfDashesInMiddle) +
            "*" +
            "-".repeat(numberOfOuterDashes));
        numberOfDashesInMiddle += 2;
    }
    //Second middle of Diamond
    numberOfDashesInMiddle -= 4
    for (var i = heightOfFirstMiddle - 2; i >= 0; i--) {
        let numberOfOuterDashes = (n - 2 - numberOfDashesInMiddle) / 2;
        console.log(
            "-".repeat(numberOfOuterDashes) +
            "*" +
            "-".repeat(numberOfDashesInMiddle) +
            "*" +
            "-".repeat(numberOfOuterDashes));
        numberOfDashesInMiddle -= 2;
    }
    //Last Row
    if (n > 2) {
        console.log("-".repeat(numberOfOuterDashes) +
            "*".repeat(currentNumberOfStartStars) +
            "-".repeat(numberOfOuterDashes));
    }
}