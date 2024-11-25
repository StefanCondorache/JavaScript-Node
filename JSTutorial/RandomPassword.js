
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    
    const lowerCaseChars = "abcdefghijklmnopqrtsuvwxyz";
    const upperCaseChars = lowerCaseChars.toUpperCase();
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()-_=+{}|:<>?[];',./";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
     
    if( length <= 0 ) return "Password Length must be at least 1"; 
    if( allowedChars.length === 0) return "At least 1 set of characters needs to be selected";

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;

}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

for(let i = 0; i < 100; i++){
    console.log(generatePassword(passwordLength, 
        includeLowerCase, 
        includeUpperCase, 
        includeNumbers, 
        includeSymbols));
}

