
// hello(leave);

// function hello(callBack){
//     console.log("Hello");
//     callBack();
    
// }

// function goodBye(){
//     console.log("Goodbye");
    
// }

// function leave(){
//     console.log("Leave");
    
// }
////////////////////////////////////////////

function sum(callBack, x, y){
    let result = x + y;
    callBack(result);
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole, 1, 2);