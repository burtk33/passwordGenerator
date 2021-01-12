// Assignment Code, Global Variables
var generateBtn = document.querySelector("#generate");
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;
var pwArray = [];
var pwPlace = "";
var breakPoint = true;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //resetting variables so generator can be run indefinitely without refreshing the page
  lowercase = false;
  uppercase = false;
  numeric = false;
  special = false;
  pwArray = [];
  pwPlace = "";
  breakPoint = true;

}

//generate password master function
function generatePassword() {
  var passwordLength = prompt("How long should the password be?");

  // making sure character length is within range
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters!");
  }
  else {
    lowercaseModifier();
    uppercaseModifier();
    numericModifier();
    specialModifier();
    addToArray();
    if (breakPoint === true) {
      for (var i = 0; i < passwordLength; i++) {
        var arraySelector = Math.floor(Math.random() * pwArray.length);
        console.log(pwArray[arraySelector]);
        pwPlace += pwArray[arraySelector];
        console.log(pwPlace);
      }
    }
  }
  return pwPlace;
}

//function to prompt user to include lowercase characters
function lowercaseModifier() {
  var includeLower = prompt("Do you want the password to include lowercase letters? (y/n)")
  if (includeLower === "y") {
    lowercase = true;
  }
}

//function to prompt user to include upper case characters
function uppercaseModifier() {
  var includeUpper = prompt("Do you want the password to include uppercase letters? (y/n)")
  if (includeUpper === "y") {
    uppercase = true;
  }
}

//function to prompt user to include numeric values
function numericModifier() {
  var includeNum = prompt("Do you want the password to include numeric values? (y/n)")
  if (includeNum === "y") {
    numeric = true;
  }
}

//function to prompt user to include special characters
function specialModifier() {
  var includeSpecial = prompt("Do you want the password to include special characters? (y/n)")
  if (includeSpecial === "y") {
    special = true;
  }
}

// adding character values that user wishes to include to an array
function addToArray() {
  if (lowercase === true) {
    pwArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }

  if (uppercase === true) {
    pwArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }

  if (numeric === true) {
    pwArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }

  if (special === true) {
    pwArray.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "{", "}", "[", "]", ";", ":", "'", "?", "/", "-", "_", "<", ">", ",", "|", "~");
  }

  // a break clause in the function if no characters are selected
  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert("You did not select any characters. Please try again.");
    breakPoint = false;
  }
  console.log(pwArray);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
