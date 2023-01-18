//making variable that will be the options avialable for the password to choose from to generate
var passLength = 8;
var passOptions = [];


var symbolArr = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '='];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var trueQuestions = gitQuestions();
  var passwordText = document.querySelector("#password");


  if (trueQuestions) {
  var password = generatePassword();
  passwordText.value = password;
  }
}

//Math.random to generate random number of array with math.floor to round down
function generatePassword() {
  var currPassword = "";
  for (var i = 0; i < charLength; i++) {
    var randomChar = Math.floor(Math.random() * passOptions.length);
    currPassword = currPassword + passOptions[randomChar]
  }
  return currPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function gitQuestions() {
  //Prompting the questions on what you want your password length and ext. to be
charLength = parseInt(prompt("Password Length? (8 - 128 only)"));
//if the input is not a number it throws alert
if(isNaN(charLength) || charLength < 8 || charLength > 128) {
  alert("Invalid Password Length");
  return false;
}

if (confirm("Add lowercase letters to your password?")) {
  passOptions = passOptions.concat(lowerArr);
}

if (confirm("Add Uppercase letters to your password?")) {
  passOptions = passOptions.concat(upperArr);
}

if (confirm("Add Symbols to your password?")) {
  passOptions = passOptions.concat(symbolArr);
}

if (confirm("Add Numbers to your password?")) {
  passOptions = passOptions.concat(numArr);
}
return true;
}