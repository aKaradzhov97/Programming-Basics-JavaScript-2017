function volleyball([arg1, arg2, arg3]) {
    let typeOfYear = arg1.toLowerCase();
    let holidays = Number(arg2);
    let weekendsHome = Number(arg3);
    let weekendsSofia = 48 - weekendsHome;
    let gamesInSofia = weekendsSofia * (3 / 4);
    let holidayGamesInSofia = holidays * (2 / 3);
    let totalGamesNormalYear = weekendsHome + gamesInSofia + holidayGamesInSofia;
    if (typeOfYear === "leap") {
        console.log(Math.floor(totalGamesNormalYear + (totalGamesNormalYear * 0.15)));
    } else if (typeOfYear === "normal") {
        console.log(Math.floor(totalGamesNormalYear));
    }
}