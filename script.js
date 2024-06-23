
// lists to store the user data
var userFirstName = [];
var userLastName = [];
var userEmail = [];

var errorMessage = document.getElementById("error-message");

var continueButton = document.getElementById("continue-button");

continueButton.addEventListener("click", signUserUp);

// function for sign up
function signUserUp() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var emailElement = document.getElementById("set-email");
  var email = emailElement.value;


  if (!email.includes(".edu")) {
    emailElement.classList.add('error');
    errorMessage.innerHTML = "Please enter a valid .edu email address.";
  } else {
    emailElement.classList.remove('error');
    errorMessage.innerHTML = "";
    userFirstName.push(firstName);
    userLastName.push(lastName);
    userEmail.push(email);

    // Logging user data for verification
    for (var i = 0; i < userFirstName.length; i++) {
      console.log(userFirstName[i] + " " + userLastName[i] + " " + userEmail[i]);
    }

    window.location.href = "thank-you.html";
  }
}
