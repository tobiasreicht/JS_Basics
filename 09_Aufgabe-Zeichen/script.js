let grid = "";

for (let index = 1; index <= 16; index++) {
    if (index  <= 4 ) {
        grid += "x";
    } 
    else if (index <=8 ) {
        grid += "o";
    }
    else if (index <=12 ) {
        grid += "x";
    }
    else if (index <=16 ) {
        grid  += "o";
    }

    if((index % 4) == 0) {
        grid += "\n";
    }
}


console.log(grid);



//Versuche in einer for - Schleife (1-100)
//alle geraden Zahlen zu addieren 
//(zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 
let result = 0;
for (let index = 0; index <= 100; index++) {
    if ((index % 2) == 0)
    {
        result += index;
    }
}
console.log(result);




let grid1 = "";

for (let index = 1; index <= 6; index++) {
    if (index  <= 4 ) {
        grid1 += "x";
    } 
    else if (index == 5 ) {
        grid1 += "   x";
    }
    else if (index == 6 ) {
        grid1 += "   x";
    }
    if(index == 5 && 6) {
        grid1 += "\n";
    }

    console.log(grid1);
}



