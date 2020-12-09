// Assignment Code
var generateBtn = document.querySelector("#generate");
var pop = document.querySelector("#password")
var pass = '';
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + "abcdefghijklmnopqrstuvwxyz1234567890" + "!@#$%^&*()"; 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(event) {
  if(event.target.matches("button")){
    alert("This works")
  }
})
