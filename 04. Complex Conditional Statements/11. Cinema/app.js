function cinema([arg1, arg2, arg3]) {
    let type = arg1.toLowerCase();
    let rows = Number(arg2);
    let cols = Number(arg3);
    let ticketPrice = 0;
    let totalTickets = cols * rows;

    if (type === "premiere") {
        ticketPrice = 12;
    } else if (type === "normal") {
        ticketPrice = 7.50;
    } else if (type === "discount") {
        ticketPrice = 5.00;
    }

    console.log(`${(ticketPrice * totalTickets).toFixed(2)} leva`);
}