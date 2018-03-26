function energyLoss(args) {
    let trainingDays = Number(args[0]);
    let dancersCount = Number(args[1]);
    let trainDays = 1;
    let drainedEnergy = 0;
    let undrainedEnergy = 0;
    let totalEnergy = 100 * trainingDays * dancersCount;
    for (var i = 2; i < args.length; i++) {
        let hoursOfTrain = Number(args[i]);
        let drainedEnergyPerDancer = 0;
        if (trainDays % 2 == 0 && hoursOfTrain % 2 == 0) {
            drainedEnergyPerDancer = 68;
        } else if (trainDays % 2 == 1 && hoursOfTrain % 2 == 0) {
            drainedEnergyPerDancer = 49;
        } else if (trainDays % 2 == 0 && hoursOfTrain % 2 == 1) {
            drainedEnergyPerDancer = 65;
        } else if (trainDays % 2 == 1 && hoursOfTrain % 2 == 1) {
            drainedEnergyPerDancer = 30;
        }
        trainDays++;
        drainedEnergy = (drainedEnergyPerDancer * dancersCount) + drainedEnergy;
        undrainedEnergy = totalEnergy - drainedEnergy;
    }
    let undrainedEnePerDancerPerDay = undrainedEnergy / trainingDays / dancersCount;
    if (undrainedEnePerDancerPerDay < 50) {
        console.log(`They are wasted! Energy left: ${undrainedEnePerDancerPerDay.toFixed(2)}`);
    } else {
        console.log(`They feel good! Energy left: ${undrainedEnePerDancerPerDay.toFixed(2)}`);
    }
}
//energyLoss([6, 90, 4, 2, 7, 2, 8, 6]);