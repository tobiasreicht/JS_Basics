 // Erstelle eine Zufallszahl zwischen 5 und 10 

 

// Wenn der Wert 10 ist gib aus Ten 

// Wenn der Wert 9 ist gib aus Nine 

// Wenn der Wert 8 ist gib aus Eight 

// etc. 
var max = 10;
var min = 5;
var test = 10; 
const anzahlIterationen = 1;
 
for (let i = 0; i < anzahlIterationen; i++) {
    const zufallszahl = Math.floor(Math.random() * (max - min + 1)) + min;

    if (zufallszahl == 10) {
        console.log(`ten`);
    
    } 
    if (zufallszahl == 9){
        console.log(`nine`);
    }
    if (zufallszahl == 8) {
        console.log(`eight`);
    } else {
        console.log(zufallszahl); 
    }
}

