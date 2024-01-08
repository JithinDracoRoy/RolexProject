"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");

var _firebaseAuth = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js");

var _firebaseFirestore = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");

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
var auth = (0, _firebaseAuth.getAuth)(app);
var db = (0, _firebaseFirestore.getFirestore)(app);
var submitButton = document.getElementById("submit");
var signupButton = document.getElementById("sign-up");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var main = document.getElementById("main");
var createacct = document.getElementById("create-acct");
var signupEmailIn = document.getElementById("email-signup");
var usernameIn = document.getElementById("username");
var signupPasswordIn = document.getElementById("password-signup");
var confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
var createacctbtn = document.getElementById("create-acct-btn");
var returnBtn = document.getElementById("return-btn");
var email,
    password,
    username,
    signupEmail,
    signupPassword,
    confirmSignUpPassword,
    empty = [];
createacctbtn.addEventListener("click", function () {
  var isVerified = true;
  signupEmail = signupEmailIn.value;
  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  username = usernameIn.value;

  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (signupEmail == null || username == null || signupPassword == null || confirmSignUpPassword == null) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    (0, _firebaseFirestore.setDoc)((0, _firebaseFirestore.doc)(db, 'User', signupEmail), {
      name: username,
      cart: empty,
      wishlist: [],
      saveforlater: empty
    });
    var wishlistCollectionRef = (0, _firebaseFirestore.collection)(_firebaseFirestore.doc, 'wishlist');
    var wishlistItemDocRef = (0, _firebaseFirestore.doc)(wishlistCollectionRef);
    (0, _firebaseFirestore.setDoc)(wishlistItemDocRef, {
      item: 'Your Wishlist Item Here' // Other wishlist item properties

    });
    (0, _firebaseAuth.createUserWithEmailAndPassword)(auth, signupEmail, signupPassword).then(function (userCredential) {
      window.alert("Success!Your Account has been created.");
      localStorage.setItem("check", 1);
      localStorage.setItem("user", signupEmail);
      window.location.href = "../html/MainPage.html";
    })["catch"](function (error) {
      window.alert("Error occurred. Try again. ", error);
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
    console.log("Error occurred. Try again.", error);
    window.alert("Error occurred. Try again.");
  });
});
signupButton.addEventListener("click", function () {
  console.log("Sign-up button clicked");
  main.style.display = "none";
  createacct.style.display = "block";
});
returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});