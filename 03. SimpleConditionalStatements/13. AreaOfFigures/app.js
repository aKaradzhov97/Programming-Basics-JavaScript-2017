function areaOfFigures(args) {
    let areaOfSquare = (args[1] * args[1]).toFixed(3);
    let areaOfRect = (args[1] * args[2]).toFixed(3);
    let areaOfCircle = (Math.PI * args[1] * args[1]).toFixed(3);
    let areaOfTriangle = (args[1] * args[2] / 2).toFixed(3);
    if (args[0] === "square") {
        console.log(areaOfSquare);
    } else if (args[0] === "rectangle") {
        console.log(areaOfRect);
    } else if (args[0] === "circle") {
        console.log(areaOfCircle);
    } else if (args[0] === "triangle") {
        console.log(areaOfTriangle);
    }
}