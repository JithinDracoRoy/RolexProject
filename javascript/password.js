
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
const userNameGet=document.getElementById('name')

// Attach a click event listener to the button
sendButton.addEventListener('click', () => {
const email = emailInput.value; // Get the entered email from the input field
  
  // Send a password reset email to the provided email
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Email sent successfully
      console.log("Password reset email sent to", email);
      // You can redirect the user or show a success message here
    
    })
    .catch((error) => {
      // An error occurred while sending the email
      console.error("Error sending password reset email:", error.message);
      // Handle the error, display an error message, etc.
    });
});
