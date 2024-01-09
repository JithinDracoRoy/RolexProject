// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {   getFirestore, collection, getDocs, doc, getDoc,onSnapshot,
  addDoc, deleteDoc, 
  query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  import {firebaseConfig } from '../javascript/config.js'


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