
let kleinerGleich12 = 0;
let groesser12 = 0;
const anzahlIterationen = 100;

// Schleife
for (let i = 5; i < anzahlIterationen; i++) {
    const zufallszahl = Math.floor(Math.random() * 15);

    if (zufallszahl > 12) {
        console.log(`Zufallszahl ${zufallszahl} ist größer als 12`);
        groesser12++;
    } else {
        console.log(`Zufallszahl ${zufallszahl} ist  als 12`);
        kleinerGleich12++;
    }
}

// Ausgabe der Ergebnisse
console.log(`\nAnzahl der Zahlen kleiner oder gleich 12: ${kleinerGleich12}`);
console.log(`\nAnzahl der Zahlen größer als 12: ${groesser12}`);
