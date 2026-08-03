/* ------ RANDOM CODES ------ */

//NOTE: submit button is initially disabled upon loading of this page

var code = ""; //to store generated codes and initialize to empty value
var getCode = ""; //to store entered code
var btnvalue; //for button boolean value

//Create variable to hold the type of characters we want to show as codes
var str =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

//Function to generate combination of characters
function generateCode() {
  //Generate character multiple times using a loop
  for (var i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Determine when to enable or disable button
function disableButton(btnvalue) {
  document.getElementById("submit").disabled = btnvalue;

  //Test if button is disabled or enabled
  if (btnvalue == true) {
    //Set button and label color translucent
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 0.3)";

    document.getElementById("submit").style.color =
      "rgba(255, 255, 255, 0.5)";
  } else {
    //Set button and label color with no transparency
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 1)";

    document.getElementById("submit").style.color =
      "rgba(255, 255, 255, 1)";
  }
}

//Listen to user input code
var codebox = document.getElementById("codeentered");

codebox.addEventListener("input", evaluateCode);

//Run function if detected user had entered a character in textbox
function evaluateCode() {
  getCode = document.getElementById("codeentered").value;

  //Remove any hidden characters entered
  var charset1 = getCode.trim();

  //Remove any hidden characters generated
  var charset2 = code.trim();

  //Test if code entered matches the number of generated characters
  if (charset1.length == charset2.length && charset1 == charset2) {
    //If match, run the function to enable button
    disableButton(false);
  } else {
    //If the codes do not match, keep the button disabled
    disableButton(true);
  }
}