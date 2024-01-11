// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {   getFirestore, collection, getDocs, doc, getDoc,onSnapshot,
  addDoc, deleteDoc, 
  query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ... your Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);

// Reference to the 'GMT-Masters II' collection and the 'discoverModel' document
const watchesRef = doc(db, "GMT-Masters II", "discoverModel");

const imageOneElement = document.getElementById("image-one");
const imageTwoElement = document.getElementById("image-two");
const imageThreeElement = document.getElementById("image-three");

// Get the document data from Firestore
getDoc(watchesRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const imageOneContent = docSnapshot.data().imageOne;
      const imageTwoContent = docSnapshot.data().imageTwo;
      const imageThreeContent = docSnapshot.data().imageThree;

      imageOneElement.src= imageOneContent;
      imageTwoElement.src= imageTwoContent;
      imageThreeElement.src= imageThreeContent;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });