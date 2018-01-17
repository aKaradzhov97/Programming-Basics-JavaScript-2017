function rectangleAreaParameter([arg1, arg2, arg3, arg4]) {
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let perimeter = a * b;
    let area = a + b + a + b;
    console.log(perimeter);
    console.log(area);
}