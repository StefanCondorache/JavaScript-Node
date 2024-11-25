
// try{
//     console.lag("Hello");

const { stdin } = require('process');

//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESURCES
//     console.log("This always executes")
// }

// console.log("This comment should be written   <--------------");
// ////////////////////////////////////////////////////

try{
    const divident = 1;
    const divisor = Number("14");   // User Input

    if(divisor == 0){
        throw new Error("You can't devide by 0");
    }
    if(isNaN(divident) || isNaN(divisor)){
        throw new Error("Values must be a number")
    }

    const result = divident / divisor;
    console.log(result, divident, divisor);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end")





