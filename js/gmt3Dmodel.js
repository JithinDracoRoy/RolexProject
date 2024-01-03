// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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



  