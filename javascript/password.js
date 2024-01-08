
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, fetchSignInMethodsForEmail, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; 
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

// Get the input field and button from the HTML
const emailInput = document.getElementById('emailInput');
const sendButton = document.getElementById('send-btn');

const passwordEmailSent=document.getElementById("passwordEmailSent");
const passwordEmailNotSent=document.getElementById("passwordEmailNotSent");
const emailCheckResult = document.getElementById("emailCheckResult");

// Attach a click event listener to the button
sendButton.addEventListener('click', () => {
const email = emailInput.value; // Get the entered email from the input field
passwordEmailNotSent.innerText=""; 
passwordEmailSent.innerText="";
emailCheckResult.innerText="";
fetchSignInMethodsForEmail(auth, email)
.then((methods) => {
  // Email found, methods array will contain sign-in methods for the email
  console.log("Sign-in methods for", email, ":", methods);
  emailCheckResult.style.color="green";
  emailCheckResult.innerText = `Email ${email} found in Firebase Authentication.`;
  // You can display a success message or take further action here
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Email sent successfully
      console.log("Password reset email sent to", email);
      
      passwordEmailSent.innerText="A password reset  has been sent to your email.Please check your email.";
      
      // You can redirect the user or show a success message here
    
    })
    .catch((error) => {
      // An error occurred while sending the email
      console.error("Error sending password reset email:", error.message);
      
      passwordEmailNotSent.innerText="Error in sending email.Please try again";
      
      
      // Handle the error, display an error message, etc.
    });
  })
.catch((error) => {
  // Email not found or error occurred
  console.error("Error checking email:", error.message);
  emailCheckResult.style.color="red";
  emailCheckResult.innerText = `Email ${email} not found in Firebase Authentication`;
  // Handle the error or display a message accordingly
});
});
  
