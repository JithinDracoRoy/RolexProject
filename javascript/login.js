// @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {firebaseConfig} from "../javascript/config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const submitButton = document.getElementById("submit-btn");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");
const userName = document.getElementById("username");
const returnBtn = document.getElementById("return-btn");
const errorInSigningIn=document.getElementById("signUpErrorid");

createacctbtn.addEventListener("click", async function () {
  const username = userName.value;
  const signupEmail = signupEmailIn.value;
  const signupPassword = signupPasswordIn.value;
  const confirmSignUpPassword = confirmSignUpPasswordIn.value;
  checkPasswordStrength(signupPassword);
  const strengthIndicator = document.getElementById('password-strength');
  const signUpUserId = document.getElementById("username");
  
  checkUsernameValidity(username);
  
  const signUpUserError = document.getElementById("signup-username-error");
  checkFieldNull(signUpUserId,signUpUserError);
  const signUpEmailId = document.getElementById("email-signup");
  const signUpEmailError = document.getElementById("signup-email-error");
  const signUpEmailInvalid=document.getElementById("invalid-email-format-signUp");
  signUpEmailInvalid.style.display="none";
  checkFieldNull(signUpEmailId,signUpEmailError);
  
  if(signupEmail){
  if (validateEmail(signupEmail)) {
  } else {
    signUpEmailInvalid.style.display="block";
  }}
  const signUpPasswordId = document.getElementById("password-signup");
  const signUpPasswordError = document.getElementById("signup-password-error");
  checkFieldNull(signUpPasswordId,signUpPasswordError);
  const confirmsignUpPasswordId = document.getElementById("confirm-password-signup");
  const confirmsignUpPasswordError= document.getElementById("confirm-password-signup-error");
  checkFieldNull(confirmsignUpPasswordId,confirmsignUpPasswordError);
  const passwordNotMatch=document.getElementById("password-no-match");
  passwordNotMatch.style.display="none";
  const validationMessage = document.getElementById('username-validation');
 
if(signupPassword !== confirmSignUpPassword)
{
 passwordNotMatch.style.display="block";
}


  // if (
  //   signupPassword !== confirmSignUpPassword ||
  //   !signupEmail ||
  //   !signupPassword ||
  //   !confirmSignUpPassword
  // ) {
  //   window.alert("Please ensure all fields are filled correctly.");
  //   return;
  // }

  try {
    const createAccountMessage=document.getElementById("account-creat");
    console.log(validationMessage.innerText);
    console.log(signUpUserError.style.display);
    console.log(signUpEmailError.style.display);
    console.log(signUpEmailInvalid.style.display);
    console.log(signUpPasswordError.style.display);
    console.log(passwordNotMatch.style.display);
    console.log(strengthIndicator.innerText);
    
    if (
      validationMessage.innerText === 'Username is valid' &&
      signUpUserError.style.display === "none" &&
      signUpEmailError.style.display === "none" &&
      signUpEmailInvalid.style.display === "none" &&
      signUpPasswordError.style.display === "none" &&
      confirmsignUpPasswordError.style.display === "none" &&
      passwordNotMatch.style.display === "none" &&
      strengthIndicator.innerText === 'Strong password'
    ) {
    
    console.log("account created successfully");
    const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
    //window.alert("Success! Your Account has been created.");
    createAccountMessage.innerText="Your account has been created.Please return to sign in page";
    const user = userCredential.user;
    let empty = [];
    await setDoc(doc(db, "User", signupEmail), {
      
        name: username,
        cart:empty,
        wishlist: empty,

    });

    console.log("User document successfully written!");
   } // Redirect or perform any other action after successful signup and database update
   else{
    createAccountMessage.innerText="Your account has not been created.please try again";
    
   }
  } catch (error) {
    // window.alert("Error occurred. Try again.");
    console.error("Error creating user or writing document: ", error);
    // Handle errors during user creation or database update
  }
});

submitButton.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;
  
  const signInEmailId = document.getElementById("email");
  const signInEmailError = document.getElementById("signin-email-error");
  const signInEmailInvalid=document.getElementById("invalid-email-format-signIn");
  signInEmailInvalid.style.display="none";
  
  checkFieldNull(signInEmailId,signInEmailError);
  if(email){
  if (validateEmail(email)) {    
  } else {
    signInEmailInvalid.style.display="block";
  }}
  const signInPasswordId=document.getElementById("password");
  const signInPasswordError=document.getElementById("sign-in-password-error");
  checkFieldNull(signInPasswordId,signInPasswordError);

  signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       const user = userCredential.user;
       errorInSigningIn.innerHTML="";
       console.log("Sign in Successful");
  //     window.alert("Success! Welcome back!");
  //     // Redirect or perform any other action after successful sign-in
     })
    .catch((error) => {
  //     window.alert("Error occurred. Try again.");
    
    errorInSigningIn.innerHTML="Error in signing in.Enter valid credentials";
     console.error("Error signing in: ", error);
  //     // Handle sign-in errors
    })
});

signupButton.addEventListener("click", function () {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});

const passwordFieldSignIn = document.getElementById('password');
const buttonSignIn = document.getElementById('toggleButton-signin');
const  signInToggleIcon = document.getElementById("signIn-Icon")
const passwordFieldSignUp= document.getElementById('password-signup');
const buttonSignUp = document.getElementById('toggleButton-signup');
const  signUpToggleIcon = document.getElementById("signUp-Icon");
const passwordFieldSignUpConfirm = document.getElementById('confirm-password-signup');
const buttonSignUpConfirm = document.getElementById('toggleButton-confirm');
const  signUpConfirmToggleIcon = document.getElementById("signUpConfirm-Icon")
buttonSignIn.addEventListener("click" ,()=>{
  console.log("signinClick");
  togglePasswordVisibility(passwordFieldSignIn,signInToggleIcon)
})
buttonSignUp.addEventListener("click" ,()=>{
  console.log("signUpClick");
  togglePasswordVisibility(passwordFieldSignUp,signUpToggleIcon)
})
buttonSignUpConfirm.addEventListener("click" ,()=>{
  console.log("signUpConfirmClick");
  togglePasswordVisibility(passwordFieldSignUpConfirm,signUpConfirmToggleIcon)
})

function togglePasswordVisibility(passwordField ,toggelIcon) {
  console.log("signToggle");  
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggelIcon.classList.remove("bi-eye-slash-fill");
    toggelIcon.classList.add("bi-eye-fill");
  } else {
    passwordField.type = 'password';
    toggelIcon.classList.add("bi-eye-slash-fill");
    toggelIcon.classList.remove("bi-eye-fill");
  }
}
function checkFieldNull(checkId,error) {
  console.log("red function");
  
    if (!checkId.value) {      
      error.style.display = 'block';
      checkId.classList.add("border-color-red");
    } else {
      error.style.display = 'none';
      checkId.classList.remove("border-color-red");
    }


}
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


function checkPasswordStrength(passwordcheck) {
  
  const strengthIndicator = document.getElementById('password-strength');
  const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');

  if (passwordcheck.length === 0) {
    strengthIndicator.innerText = '';
  } else if (strongRegex.test(passwordcheck)) {
    strengthIndicator.innerText = 'Strong password';
    strengthIndicator.style.color = 'green';
  } else {
    strengthIndicator.innerText = 'Weak password';
    strengthIndicator.style.color = 'red';
  }
}
function checkUsernameValidity(username) {
  
  const validationMessage = document.getElementById('username-validation');
   
  if (username.length === 0) {
    validationMessage.innerText = '';
    // validationMessage.style.color = 'red';
  } else if (username.length < 5) {
    validationMessage.innerText = 'Username should be at least 5 characters';
    validationMessage.style.color = 'red';
  } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    validationMessage.innerText = 'Username can only contain letters, numbers, and underscores';
    validationMessage.style.color = 'red';
  } else {
    validationMessage.innerText = 'Username is valid';
    validationMessage.style.color = 'green';
  }
}
