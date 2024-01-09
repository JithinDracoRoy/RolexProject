"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");

var _firebaseAnalytics = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js");

var _firebaseAuth = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js");

var firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62"
};
var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var analytics = (0, _firebaseAnalytics.getAnalytics)(app);
var auth = (0, _firebaseAuth.getAuth)(app);
var submitButton = document.getElementById("submit");
var signupButton = document.getElementById("sign-up");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var main = document.getElementById("main");
var createacct = document.getElementById("create-acct");
var signupEmailIn = document.getElementById("email-signup");
var confirmSignupEmailIn = document.getElementById("confirm-email-signup");
var signupPasswordIn = document.getElementById("password-signup");
var confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
var createacctbtn = document.getElementById("create-acct-btn");
var returnBtn = document.getElementById("return-btn");
var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword, check;
createacctbtn.addEventListener("click", function () {
  var isVerified = true;
  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;

  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;

  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    (0, _firebaseAuth.createUserWithEmailAndPassword)(auth, signupEmail, signupPassword).then(function (userCredential) {
      // Signed in 
      var user = userCredential.user;
      window.alert("Success!Your Account has been created.");
      localStorage.setItem("check", 1);
      window.location.href = "../html/MainPage.html";
    })["catch"](function (error) {
      var errorCode = error.code;
      var errorMessage = error.message; // ..

      window.alert("Error occurred. Try again.");
    });
  }
});
submitButton.addEventListener("click", function () {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);
  (0, _firebaseAuth.signInWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
    // Signed in
    var user = userCredential.user;
    console.log("You have successfully loged  in!");
    window.alert("Success! Welcome back!");
    localStorage.setItem("check", 1);
    window.location.href = "../html/MainPage.html"; // ...
  })["catch"](function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error occurred. Try again.", errorCode);
    window.alert("Error occurred. Try again.", errorMessage);
  });
});
signupButton.addEventListener("click", function () {
  main.style.display = "none";
  createacct.style.display = "block";
});
returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});