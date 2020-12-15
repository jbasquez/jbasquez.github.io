const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const specialchar = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const allFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
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
