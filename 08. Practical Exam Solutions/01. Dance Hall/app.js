function danceHall([arg1, arg2, arg3]) {
    let roomLength = Number(arg1);
    let roomWidth = Number(arg2);
    let wardrobeSide = Number(arg3);

    let roomArea = (roomLength * 100) * (roomWidth * 100);
    let wardrobeArea = (wardrobeSide * 100) * (wardrobeSide * 100);
    let benchArea = roomArea / 10;
    let freeSpace = roomArea - (benchArea + wardrobeArea);
    let dancers = Math.floor(freeSpace / (40 + 7000));
    console.log(dancers);
}