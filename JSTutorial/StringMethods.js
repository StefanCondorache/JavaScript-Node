let userName = "userName";
let a = 1;

console.log(`Char at ${a}: `,userName.charAt(a));
console.log(`Index of 'r': `,userName.indexOf('r'));
console.log("Last indexOf 'm': ",userName.lastIndexOf('m'));
console.log("Length: ",userName.length);

process.stdout.write("input: ");  // async method for User Input
process.stdin.on('data', 
    (data) => {
        userName = data.toString();
        console.log(typeof(userName));
        process.exit();
    }
)

// const readlineSync = require('readline-sync');
// const answer = readlineSync.question("Enter your input: ").toString()     // for sync method there is needed a download "npm install readline-sync"
// console.log(`Here is your input -> ${answer}`);


console.log("String trim: ",userName.trim());
console.log("ToLowerCase: ",userName.toLowerCase());
console.log("ToUpperCase: ",userName.toUpperCase());
console.log("String repeat: ",userName.repeat(3));
console.log("Boolean:", userName.startsWith("nice"));
console.log("Boolean:",userName.endsWith("nice"));
console.log("Boolean:",userName.includes("nice"));
console.log("Replace: ",userName.replaceAll("a","NICE"));
console.log(userName.padStart(15, 'Nigger'));


let subString = userName.slice(0, 4);




