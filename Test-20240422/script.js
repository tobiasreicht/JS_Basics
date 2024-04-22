
//aufgabe 3

let calc = 0;
let count = 0;
const temperatures = "-1,5,51,-10,-11,2,90,-8,-44".split(",");
for (let i = 0; i < temperatures.length; i++) {
    if(temperatures[i] >= -30 && temperatures[i] <= 50) {
    calc += parseInt(temperatures[i]);
    count++;
    }
}
let avg = calc / count;
console.log(avg);

//aufgabe 2

let counter = 0;
let numbers = "8,2,1,4,6,1,8,7".split(",");
let max = Math.max(...numbers);
for (let i = 0; i < numbers.length; i++) {
    if (Math.max(...numbers) == numbers[i]) {
        counter++;
    }
}
console.log("Max: " + max)
console.log("Count: " + counter);

//aufgabe 1

const data = "Hans geht heute schiwmmen das ist gut";
let arr = data.split(" ");
arr.reverse();
let output = "";
for(let i = arr.length - 1; i >= 0; i--) {
    if(i != 0) {
        output += arr[i];
    }
}

console.log(output)