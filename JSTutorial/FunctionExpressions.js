
const hello = function(){
    console.log("Hello");
}

setTimeout(hello, 3000)

setTimeout(function(){
    console.log("This is a callback function");
}, 2000)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const squares = numbers.map(function(element){
    return element**2;
});

const evenNums = squares.filter((element) => {
    return element % 2 === 0;
});

console.log(squares);
console.log(evenNums);

