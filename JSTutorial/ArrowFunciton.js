function hello(){
    console.log("Hello");
}

const hello1 = function(){
    console.log("Hello");
}

const hello2 = (name) => console.log(`Hello ${name}`);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);
