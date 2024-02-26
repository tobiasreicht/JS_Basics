//schwere variante

output = "";
output2  = "";
output3 = "";
output4 = "";


for (let index = 1; index < 20; index++) {
    if (index <5)   {
        output += "x";
        console.log(output);
    }
    if (index >5 && index <10) {
        output2 += "O";
        console.log(output2);
        }
    if (index >10 && index <15) {
        output3 += "x";
        console.log(output3);
        }
    if (index >15 && index <20) {
        output4 += "O";
        console.log(output4);
        }
    
}

//einfache variante


for (let index = 0; index < 4; index++) {
    if (index  == 0 ) {
        for (let i = 0; i < 4; i++) {
            output += "x";
        }
    } else if (index == 1) {
            output += "o";
        }
    }


console.log(output);
