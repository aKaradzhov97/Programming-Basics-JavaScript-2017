function passwordGuess([arg1]) {
    let pass = "s3cr3t!P@ssw0rd";
    let password = arg1;
    if (pass === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}