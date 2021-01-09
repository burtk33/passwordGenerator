// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = false;
var uppercase = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password function
function generatePassword() {
  var passwordLength = prompt("How long should the password be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters!");
  }
  else {
    lowercaseModifier();
    uppercaseModifier();
  }

}

//Prompt user to include lowercase characters
function lowercaseModifier() {
  var includeLower = prompt("Do you want the password to include lowercase letters? (y/n)?")
  if (includeLower === "y") {
    lowercase = true;
  }
  else {
    lowercase = false;
  }
}

//Prompt user to include upper case characters
function uppercaseModifier() {
  var includeUpper = prompt("Do you want the password to include uppercase letters? (y/n)?")
  if (includeUpper === "y") {
    uppercase = true;
  }
  else {
    uppercase = false;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
