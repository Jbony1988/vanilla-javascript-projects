// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form");
const errorsList = document.querySelector(".errors-list");
const errorsContainer = document.querySelector(".errors");
console.log(form);

// TODO: Create an event listener for when the form is submitted and do the following inside of it.

form.addEventListener("submit", (e) => {
  //    TODO: Create an array to store all error messages and clear any old error messages

  const errorMessages = [];
  clearErrors();

  const username = form.elements["username"].value;
  const password = form.elements["password"].value;
  const passwordConfirmation = form.elements["password-confirmation"].value;
  const terms = form.elements["terms"].checked;
  //      1. Ensure the username is at least 6 characters long
  if (username.length < 6) {
    errorMessages.push("username must be at least 6 characters");
  }
  // 2. Ensure the password is at least 10 characters long
  if (password.length < 10) {
    errorMessages.push("password must be at least 10 characters");
  }
  //      3. Ensure the password and confirmation password match
  if (passwordConfirmation !== password) {
    errorMessages.push("password and confirmation password must match");
  }
  //      4. Ensure the terms checkbox is checked
  if (!terms) {
    errorMessages.push("Terms checkbox must be checked");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages);
  }
});

//    TODO: If there are any errors then prevent the form from submitting and show the error messages

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  while (errorsList.firstChild) {
    errorsList.removeChild(errorsList.firstChild);
  }

  errorsContainer.classList.remove("show");
  // if (errorsList.children.length === 0) {
  //   window.location.href = 'thank-you.html';
  // }
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorMessages.forEach((errorMsg) => {
    const li = document.createElement("li");
    li.innerText = errorMsg;
    errorsList.appendChild(li);
  });
  errorsContainer.classList.add("show");
}
