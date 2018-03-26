function choreography([arg1, arg2, arg3]) {
    let steps = Number(arg1);
    let dancers = Number(arg2);
    let daysForLearning = Number(arg3);

    let stepsPerDayInPercent = Math.ceil(((steps / daysForLearning) / steps) * 100);
    let stepsForEachDancer = stepsPerDayInPercent / dancers;

    if (stepsPerDayInPercent <= 13) {
        console.log(`Yes, they will succeed in that goal! ${stepsForEachDancer.toFixed(2)}%.`);
    } else {
        console.log(`No, They will not succeed in that goal! Required ${stepsForEachDancer.toFixed(2)}% steps to be learned per day.`);
    }
}