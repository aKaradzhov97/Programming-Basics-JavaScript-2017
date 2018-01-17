function equalNumber([arg1, arg2, arg3]) {
    let first = Number(arg1);
    let second = Number(arg2);
    let third = Number(arg3);

    if (first === second && first === third) {
        console.log("yes");
    } else {
        console.log("no");
    }
}