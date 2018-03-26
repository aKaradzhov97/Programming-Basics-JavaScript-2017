function finalCompetition([arg1, arg2, arg3, arg4]) {
    let dancers = Number(arg1);
    let numberOfPoints = Number(arg2);
    let season = arg3.toLowerCase();
    let place = arg4.toLowerCase();

    let expenses = 0;
    let prize = 0;

    if (place === "bulgaria") {
        prize = numberOfPoints * dancers;
    } else if (place === "abroad") {
        prize = (numberOfPoints * dancers) * 1.5;
    }

    if (season === "summer") {
        if (place === "bulgaria") {
            expenses = 0.95;
        } else if (place === "abroad") {
            expenses = 0.9;
        }
    } else if (season === "winter") {
        if (place === "bulgaria") {
            expenses = 0.92;
        } else if (place === "abroad") {
            expenses = 0.85;
        }
    }
    let moneyLeft = prize * expenses;
    let charityMoney = moneyLeft * 0.75;
    let moneyAfterCharity = moneyLeft - charityMoney;
    let moneyPerDancer = (moneyAfterCharity / dancers).toFixed(2);

    console.log(`Charity - ${charityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer}`);
}