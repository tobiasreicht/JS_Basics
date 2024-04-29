import { resolve } from "path";
import { createInterface } from "readline";
 
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            //readline.close();
        });
    });
};


let Konto = "0";

mainmenu();

async function mainmenu() {
    console.log("wählen sie die Gewünschte Funktion");
    console.log("Einzahlen");
    console.log("Abheben");
    console.log("Kontostand");
    console.log("Beenden");

    let selection = await readLineAsync();
    switch (selection) {
        case 1: 
        console.log("Welchen Betrag möchten sie einzahlen");
        
        break; 
    
    }

}

