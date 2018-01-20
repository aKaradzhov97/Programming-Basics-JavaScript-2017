function squareOfStars([n]) {
    n = Number(n);
    for (var row = 0; row < n; row++) {
        console.log('* '.repeat(n));
    }
}