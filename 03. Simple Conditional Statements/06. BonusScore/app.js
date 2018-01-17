function bonusPoints([arg1]) {
    let startPoints = Number(arg1);
    let bonusPoints = 0;
    if (startPoints <= 100) {
        bonusPoints = 5;
    } else if (startPoints <= 1000) {
        bonusPoints = startPoints * 0.2;
    } else {
        bonusPoints = startPoints * 0.1;
    }

    if (startPoints % 2 == 0) {
        bonusPoints = bonusPoints + 1;
    }
    if (startPoints % 10 == 5) {
        bonusPoints = bonusPoints + 2;
    }
    console.log(bonusPoints);
    console.log(startPoints + bonusPoints);
}