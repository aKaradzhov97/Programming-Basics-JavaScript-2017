function animalType([animal]) {
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
            console.log("reptile");
            break;
        case "tortoise":
            console.log("reptile");
            break;
        case "snake":
            console.log("reptile");
        default:
            console.log("unknown");
            break;
    }
}