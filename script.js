// Dom Elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lengthEl = document.querySelector("#length");
var uppercaseEl = document.querySelector("#uppercase");
var lowercaseEl = document.querySelector("#lowercase");
var numberEl = document.querySelector("#numbers");
var symbolEl = document.querySelector("#symbols");

//Object containing functions
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  passwordText.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,  
    hasSymbol, 
    length)
})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol;

//  const typeArr = [{lower}, {upper}, {number}, {symbol}].filter
//  (item=> Object.values(item)[0]);

  if(length < 8 || length > 128) {
    alert("Password length must be between 8 and 128.")
    return ""
  }
//simple form of the code below it. 
  for(let i = 0; i < length; i += typesCount) {
    if(lower) { generatedPassword += getRandomLower();}
    if(upper) { generatedPassword += getRandomUpper();}
    if(number) { generatedPassword += getRandomNumber();}
    if(symbol) { generatedPassword += getRandomSymbol();}

//    typeArr.forEach(type => {
//     let funcName = Object.keys(type)[0];
//      console.log('Func Name', funcName)
//      generatedPassword += randomFunc[funcName]();
//    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  console.log(finalPassword)

  return finalPassword;
}

//Generate Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 33)
}
// Write password to the #password input


