// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {firebaseConfig } from '../javascript/config.js'


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
// Reference to the 'GMT-Masters II' collection and the '3Dmodel' document
const watchesRef = doc(db, "GMT-Masters II", "3Dmodel");

const modelPageTitleElement = document.getElementById("model-page-title");
const modelParaOneElement = document.getElementById("model-para-one");
const modelParaTwoElement = document.getElementById("model-para-two");

 
// Get the document data from Firestore
getDoc(watchesRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const titleContent = docSnapshot.data().title;
      const paraOneContent = docSnapshot.data().paraOne;
      const paraTwoContent = docSnapshot.data().paraTwo;

      modelPageTitleElement.innerHTML = titleContent ;
      modelParaOneElement.innerText = paraOneContent ;
      modelParaTwoElement.innerText = paraTwoContent ;

    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });



  