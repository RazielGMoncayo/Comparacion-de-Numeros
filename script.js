//* User input 
let num1 = parseFloat(prompt("Enter the first number"));
let num2 = parseFloat(prompt("Enter the second number"));
let num3 = parseFloat(prompt("Enter the third number"));


const numberList = [];
numberList.push(num1,num2,num3);
numberList.sort();

console.log("The numbers ordered from largest to smallest are:")
console.log(`First number: ${numberList[0]}`)
console.log(`Second number: ${numberList[1]}`)
console.log(`Third number: ${numberList[2]}`)

numberList.reverse();

console.log("The numbers ordered from smallest to largest are:")
console.log(`First number: ${numberList[0]}`)
console.log(`Second number: ${numberList[1]}`)
console.log(`Third number: ${numberList[2]}`)


for (let i = 1; i < numberList.length; i++){
    if (numberList[i] === numberList[i-1] ) {
        console.log(`The number ${numberList[i]} is repeated`);
    }
}