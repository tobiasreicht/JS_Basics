let bit = [0,0,0,1,1,1,0,0,0];

for (let i = 0; i < bit.length; i++) {
    if (bit[i]== 0) {
        bit[i] = 1;
    } else if (bit[i] ==1 ){
        bit[i] = 0;
    }
}

let result = "";
for(let i = 0; i < bit.length; i++) {
    result += bit[i];
}

console.log(result);