

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, fetchSignInMethodsForEmail, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore,collection,getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; 
import { firebaseConfig } from "../javascript/config.js";

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
let flag=0;
const email = emailInput.value; // Get the entered email from the input field
passwordEmailNotSent.innerText=""; 
passwordEmailSent.innerText="";
emailCheckResult.innerText="";
const emailUsers = collection(db,"User");
getDocs(emailUsers).then((querySnapshot)=>{
  querySnapshot.forEach((doc)=>{
    var docId = doc.id;
    if(docId==email){
      flag=1;
      sendPasswordResetEmail(auth, email)
    .then(() => {
      // Email sent successfully
      console.log("Password reset email sent to", email);
      emailCheckResult.style.color="green";
      emailCheckResult.innerText = `Email ${email} found in Firebase Authentication.`;
      passwordEmailSent.innerText="A password reset  has been sent to your email.Please check your email.";
      // You can redirect the user or show a success message here
    })
    .catch((error) => {
      // An error occurred while sending the email
      console.error("Error sending password reset email:", error.message);
      passwordEmailNotSent.innerText="Error in sending email.Please try again";
      // Handle the error, display an error message, etc.
    });
    }
  })
})
setTimeout(() => {
  if(flag==0){
    emailCheckResult.style.color="red";
    emailCheckResult.innerText = `Email ${email} not found in Firebase Authentication`;
  }
}, 3000);


});
