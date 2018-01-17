function pointInRectangle([x1, y1, x2, y2, xOfPoint, yOfPoint]) {
    let leftSide = Math.min(x1, x2);
    let rightSide = Math.max(x1, x2);
    let topSide = Math.min(y1, y2);
    let bottomSide = Math.max(y1, y2);

    if (xOfPoint >= leftSide && xOfPoint <= rightSide && yOfPoint >= topSide && yOfPoint <= bottomSide) {
        console.log('Inside');
    } else {
        console.log('Outside');
    }
}