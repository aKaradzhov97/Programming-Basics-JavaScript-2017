function pointInTheFigure([size, x, y]) {
    size = Number(size);
    x = Number(x);
    y = Number(y);
    let insideDown = (x > 0) && (x < 3 * size) && (y > 0) && (y < size);
    let insideUp = (x > size) && (x < 2 * size) && (y > 0) && (y < 4 * size);

    let borderDown = (x >= 0 && x <= 3 * size && y == 0) || (x == 0 && y >= 0 && y <= size) || (x >= 0 && x <= size && y == size) || (x >= 2 * size && x <= 3 * size && y == size) || (x == 3 * size && y >= 0 && y <= size);
    let borderUp = (x == size && y >= size && y <= 4 * size) || (y == 4 * size && x >= size && x <= 2 * size) || (x == 2 * size && y >= size && y <= 4 * size);

    if (insideUp || insideDown) {
        console.log("inside");
    } else if (borderUp || borderDown) {
        console.log("border");
    } else {
        console.log("outside");
    }
}
pointInTheFigure([10, 1, 9]);