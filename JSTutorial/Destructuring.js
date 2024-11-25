
// Exemple 1

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

// Exemple 2

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// Exemple 3

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// Exemple 4

const person1 = {
    firstName : "SpongeBob",
    lastName : "SquarePants",
    age : 30,
    job : "Fry Cook"
}

const person2 = {
    firstName : "Patrick",
    lastName : "Star",
    age : 34
}

const {firstName, lastName, age, job} = person1;
const {firstName : firstName2, lastName : lastName2, age : age2, job : job2} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log("\n",firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2, "\n");

// Exemple 5

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age} `);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2)