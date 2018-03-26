function groupName([firstLetter, secondLetter, thirdLetter, forthLetter, num]) {
    let a = Number(firstLetter.charCodeAt(0));
    let b = Number(secondLetter.charCodeAt(0));
    let c = Number(thirdLetter.charCodeAt(0));
    let d = Number(forthLetter.charCodeAt(0));
    let e = Number(num);

    let counter = -1;
    for (var i = Number('A'.charCodeAt(0)); i <= a; i++) {
        for (var j = Number('a'.charCodeAt(0)); j <= b; j++) {
            for (var k = Number('a'.charCodeAt(0)); k <= c; k++) {
                for (var g = Number('a'.charCodeAt(0)); g <= d; g++) {
                    for (var h = 0; h <= e; h++) {
                        counter++;
                    }
                }
            }
        }
    }
    console.log(counter);
}
groupName(['A', "a", "a", "a", 0]);