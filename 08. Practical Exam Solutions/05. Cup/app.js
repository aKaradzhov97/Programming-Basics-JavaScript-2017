function cup([arg1]) {
    let n = Number(arg1)
    let cupWidth = 5 * n
    let dotsBeforeSharps = n
    let sharps = 3 * n
    for (var i = 0; i < n / 2; i++) {
        console.log(".".repeat(dotsBeforeSharps) + "#".repeat(sharps) + ".".repeat(dotsBeforeSharps))
        dotsBeforeSharps++
        sharps = sharps - 2
    }
    let dotsTwo = 1.5 * n
    let middleDots = (5 * n) - (2 * dotsTwo + 2)
    let rowsTwo = Math.ceil(n + 1) / 2
    for (var i = 0; i < rowsTwo; i++) {
        console.log(".".repeat(dotsTwo) + "#" + ".".repeat(middleDots) + "#" + ".".repeat(dotsTwo))
        dotsTwo++
        middleDots = middleDots - 2
    }
    let rowsThree = n / 2
    let side = (2 * n) - 2
    let center = (5 * n) - (2 * side)
    console.log(".".repeat(2 * n) + "#".repeat(n) + ".".repeat(2 * n))
    for (var i = 0; i < rowsThree; i++) {
        console.log(".".repeat(side) + "#".repeat(center) + ".".repeat(side))
    }
    let sideOfText = ((5 * n) - 10) / 2
    console.log(".".repeat(sideOfText) + "D^A^N^C^E^" + ".".repeat(sideOfText))
    let bottom = (n + 1) / 2
    for (var i = 0; i < bottom; i++) {
        console.log(".".repeat(side) + "#".repeat(center) + ".".repeat(side))
    }
}
//cup([10]);