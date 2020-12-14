const allFunc = {
    lower: getRandomLower;
    upper: getRandomUpper;
    number: 
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol() {
    const symbols = '`~!@#$%^&*()_-+={}[]|\:;,.<>?/';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
