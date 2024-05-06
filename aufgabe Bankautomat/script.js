const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = () => {
    return new Promise((resolve) => {
        rl.question("", (userRes) => {
            resolve(userRes);
            //rl.close();
        });
    });
};


let Konto = 0;

mainmenu();

async function mainmenu() {
   while(true) {
    console.log("wählen sie die Gewünschte Funktion");
    console.log("1. Einzahlen");
    console.log("2. Abheben");
    console.log("3. Kontostand");
    console.log("4. Beenden");

    let selection = await readLineAsync();
    console.log("Selection",selection);
    switch(selection) {
        case "1":
            await aPaymentIn();
            break;
        case "2":
            await getMoneyfromBalance();
            break;
        case "3":
            console.log("inside");
            checkBalance();
            break;
        case "4":
            Stop();
            break;
        default:
            console.log("Ungültige Auswahl. Bitte wählen Sie eine der verfügbaren Optionen.");
            mainmenu();
            break;
    }
   }
}

async function aPaymentIn() {
    console.log("Geben Sie den Betrag ein, den Sie einzahlen möchten:");
    let amount = parseFloat(await readLineAsync());
    if (isNaN(amount) || amount <= 0) {
        console.log("Ungültiger Betrag. Bitte geben Sie einen positiven Betrag ein.");
    } else {
        Konto += amount;
        console.log(`Einzahlung von ${amount}€ erfolgreich.`);
        mainmenu();
    }
}

async function getMoneyfromBalance() {
    console.log("Geben Sie den Betrag ein, den Sie abheben möchten:");
    let amount = parseFloat(await readLineAsync());
    if (isNaN(amount) || amount <= 0 || amount > Konto) {
        console.log("Ungültiger Betrag. Möglicherweise haben Sie nicht genug Guthaben oder geben Sie einen positiven Betrag ein.");
    } else {
        Konto -= amount;
        console.log(`Abhebung von ${amount}€ erfolgreich.`);
        mainmenu();
    }
}

function checkBalance() {
    console.log(`Ihr Kontostand beträgt ${Konto}€.`);
  
}

function Stop() {
    console.log("Vielen Dank für die Nutzung unseres Bankautomaten. Auf Wiedersehen!");
    readline.close();
}
