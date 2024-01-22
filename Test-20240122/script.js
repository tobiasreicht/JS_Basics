var max = 34;
var min = 51;
var test = 10; 
const anzahlIterationen = 20;
 
for (let i = 0; i < anzahlIterationen; i++) {
    const zufallszahl = Math.floor(Math.random() * (max - min + 1)) + min;


     if (zufallszahl == 36) {
        console.log(zufallszahl);
     } 

     if (zufallszahl == 37) {
        console.log(zufallszahl);
     } 

     if (zufallszahl == 38) {
        console.log(zufallszahl);
     } 

    if (zufallszahl == 35){
        console.log(`Ohhh`);
    }

    if (zufallszahl == 50 ) {
        console.log(`Jupidu`);
    } 
    else {
        console.log("nichts"); 
    }
}
