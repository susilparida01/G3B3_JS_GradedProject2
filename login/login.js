localStorage.setItem("UserName1", "Admin");
localStorage.setItem("Password1", "admin@pass");
localStorage.setItem("UserName2", "User");
localStorage.setItem("Password2", "user@pass");

let UserName1 = localStorage.getItem("UserName1");
let Password1 = localStorage.getItem("Password1");
let UserName2 = localStorage.getItem("UserName2");
let Password2 = localStorage.getItem("Password2");

const validUsernamePasswords = [
  {
    username: UserName1,
    password: Password1,
  },
  {
    username: UserName2,
    password: Password2,
  },
];

// html nodes
const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const errorField = document.getElementById("error");

// Clears the error when data in inputs are changed
usernameField.onfocus = clearError;
passwordField.onfocus = clearError;

// will prevent the user to come to login page from resume list page
window.history.forward();
function noBack() {
  window.history.forward();
}

// Clears the error
function clearError() {
    errorField.innerText = "";
    errorField.style.display = "none";
}

// calls onLoginClick when submit on the login page is clicked
loginForm.onsubmit = function (event) {
  onLoginClick(event);
};

// validates the info entered by user
// redirect the user to resume list page or shows the error based on entered data
function onLoginClick(event) {
  event.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  const currentUser = validUsernamePasswords.find((userData) => {
    return userData.username === username;
  });
  if (!currentUser) {
    errorField.innerText = "User doesn't exist";
    errorField.style.display = "block";
  } else if (currentUser.password === password) {
    // Save Creds In Local Storage
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
    // Navigate to resume viewer
    window.location.href = "../resume/resume-page.html";
  } else {
    alert("Invalid username/password.");
  }
}