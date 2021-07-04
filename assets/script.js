var generateBtn = document.querySelector("#generate");
//PASSWORD GENERATOR
function makePassword() {
  function getPassword() {
    var password = "";
    var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerSet = "abcdefghijklmnopqrstuvwxyz";
    var numberSet = "1234567890";
    var characterSet = "!@#$%^&*()_-+{}[]|:;',.=<>/";
    //GETTING INPUTS
    var input = prompt("Enter with input leght (8 untill 128 characters)");
    //IF STATEMENTS FOR INPUTS
    if (input === null) {
      return;
    } else if (input < 8 || input > 128) {
      alert(
        "You have set the letter limit for the password, PLEASE try again."
      );
      getPassword();
    } else {
      var choiceLower = confirm(
        " add a lowercase characters? If yes, click Ok. if no, click Cancel"
      );
      var choiceUpper = confirm(
        " add an uppercase characters? If yes, click Ok. if no, click Cancel"
      );
      var choiceNum = confirm(
        " add a numeric characters? If yes, click Ok. if no, click Cancel"
      );
      var choiceCharacter = confirm(
        "add a special characters? If yes, click Ok. if no, click Cancel"
      );
    }
    //CHECKING VALID INPUT
    if (
      choiceLower === false &&
      choiceUpper === false &&
      choiceNum === false &&
      choiceCharacter === false
    ) {
      alert("Please you have to choose at least one of option, TRY AGAIN.");
      getPassword();
    }
    //IF STATEMENT IF USER CLICK 'CANCEL'
    if (choiceLower == false) {
      lowerSet = "";
    }
    if (choiceUpper == false) {
      upperSet = "";
    }
    if (choiceNum == false) {
      numberSet = "";
    }
    if (choiceCharacter == false) {
      characterSet = "";
    }
    //LOOP FUNCTION
    function createMyPassword() {
      for (var i = 0; i < input; i++) {
        var randomNumber = "";
        randomNumber = upperSet + lowerSet + numberSet + characterSet;
        password += randomNumber.substring(
          Math.floor(Math.random()) * randomNumber.length
        );
      }
    }
    createMyPassword();
    return password;
  }
  var readyPassword = getPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = readyPassword;
}
generateBtn.addEventListener("click", makePassword());
