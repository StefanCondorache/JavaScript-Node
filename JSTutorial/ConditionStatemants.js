let age = 18;

if(age > 20){
    console.log(true);
}
else if(age > 16){
    console.log("Maybe");
    
}
else{
    console.log(false);
}


message = (age >= 18) ? "You are an adult" : "You are a minor";


let avg = 0;
for(let i = 1; i <= 10; i++){
    avg += i**i;
    console.log(avg/(i+1));
}