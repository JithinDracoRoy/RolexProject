import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

function deleteUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Sign in the user with provided email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Get the user UID
        const user = userCredential.user;
        user
        .delete()
        .then(() => {
            // User deleted.
            console.log("User Account Deleted Successful");
            alert("User deleted successfully");
        })
        .catch((error) => {
            // An error occurred
            // ...
        });
        // Delete the user using the UID
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error('Error signing in:', error);
        alert("Account delete unsuccessful,enter valid credentials")
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    console.log("Executing");
    const deleteButton = document.getElementsByClassName('delete')[0]; // Selecting the first element with the 'delete' class
    deleteButton.addEventListener('click', function() {
      // Call deleteUser() function when the button is clicked
      deleteUser();
    });
  });