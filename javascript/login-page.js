import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct")

const signupEmailIn = document.getElementById("email-signup");
const usernameIn = document.getElementById("username");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email, password, username, signupEmail, signupPassword, confirmSignUpPassword, empty = [];

createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  username = usernameIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.")
    isVerified = false;
  }

  if (signupEmail == null || username == null || signupPassword == null || confirmSignUpPassword == null) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    const userDocRef = doc(db, 'User', signupEmail);
    setDoc(userDocRef, {
      name: username,
      cart: empty,
      wishlist: [],
      saveforlater: empty
    });

    // Now, add an item to the wishlist collection
    const wishlistCollectionRef = collection(userDocRef, 'wishlist'); // Use userDocRef here
    const wishlistItemDocRef = doc(wishlistCollectionRef);
    setDoc(wishlistItemDocRef, {
      item: 'Your Wishlist Item Here',
      // Other wishlist item properties
    });
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        window.alert("Success!Your Account has been created.");
        localStorage.setItem("check", 1);
        localStorage.setItem("user", signupEmail);
        window.location.href = "../html/MainPage.html";
      })
      .catch((error) => {
        window.alert("Error occurred. Try again. ", error);
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("You have successfully loged  in!");
      window.alert("Success! Welcome back!");
      localStorage.setItem("check", 1);
      localStorage.setItem("user", email);
      window.location.href = "../html/MainPage.html";
      // ...
    })
    .catch((error) => {
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
