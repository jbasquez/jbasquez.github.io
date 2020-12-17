const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbols
};

generate.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

function generatePassword(lower, upper, number, symbol, length) {
    
    let generatedPassword = '';
    
    const typesCount = lower + upper + number + symbols;
    
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
        (
        item => Object.values(item)[0]
        );
    
    if(typesCount === 0) {
        return '';
    }
    for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}


function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbols() {
    const symbols = '!@#$%^&*';
    return symbols[Math.floor(Math.random() * symbols.length)];
}