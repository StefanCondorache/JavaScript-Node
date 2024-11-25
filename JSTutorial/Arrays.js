let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

console.log(fruits);

for(let fruit of fruits){
    console.log(fruit + ": " + typeof(fruit).toString());

}

console.log("----------------");

for(let fruit in fruits){
    console.log(fruit + ": " + typeof(fruit).toString());
}

console.log(fruits.length);

fruits.push("coconat");

console.log(fruits.sort().reverse());
//--------------------------------------------------------------
console.log();

let numbers = [1, 5, 2, 6, 7, 3, 4, 10, 21];
let maximum = Math.max(...numbers); // spread operator = ...

console.log(maximum);

console.log(..."LETTERS");
//--------------------------------------------------------------
console.log();

function openFridge(...foods){     // rest parameters = ... ; combine everything in an array
    console.log(foods);
}

const food1 = "pizza1";
const food2 = "pizza2";
const food3 = "pizza3";
const food4 = "pizza4";

openFridge(food1, food2, food3, food4)
//--------------------------------------------------------------
console.log("\nFor each method: ")
function display(element){
    process.stdout.write(element.toString() + " ");
}

function double(element, index, array){
    array[index] = element * 2;
}

function square(elemnet, index, array){
    array[index] = elemnet**2;
}

numbers.forEach(display);

numbers.forEach(double)
console.log();
numbers.forEach(display);

numbers.forEach(square)
console.log();
numbers.forEach(display);
///////////////////////////////////////////////////

fruits.sort();
console.log("\n\nSorted array: ",fruits);

numbers.sort();
console.log("\nSorted lexicographicly array: ",numbers);

numbers.sort((a, b) => a - b); // it's useful for sorting objects
console.log("\nSorted based on a condition array: ",numbers);
//////////////////////////////////////////////////////

const cards = ['A', 'J', 'Q', 'K', 2, 3, 4, 5, 6, 7, 8, 9, 10]

function shuffle(array){
    for(let i = array.length-1; i > 0; i--){
        const random = Math.floor(Math.random() * (i+1));
        
        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);
console.log("\nShuffled array: ",cards);
