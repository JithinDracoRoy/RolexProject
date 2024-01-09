import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
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
 
// Reference to the 'DateJust' collection and the 'Video1' document
const storeWatchesRef = collection(db,'StoreWatches')
 
// Get the document data from Firestore
getDocs(storeWatchesRef)
  .then((snapshot) => {
      let watches=[]
      snapshot.docs.forEach((doc)=>{
        watches.push({...doc.data()})
      })
      console.log(watches[0].name);
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

  let check = parseInt(localStorage.getItem("check"));
    if (check === 1) {
        document.getElementById("login").innerHTML = "<b>Store</b>";
        document.getElementById("login").addEventListener("click", function () {
            window.location.href = "../html/store.html";
        });
    }
    else{
      document.getElementById("login").addEventListener("click", function () {
        window.location.href = "../html/login-page.html";
    });
    }
function logScrollPosition() {
  var scrollPosition = parseInt(window.scrollY);
  console.log("Scroll Position: " + scrollPosition);
  if (scrollPosition > 250 && scrollPosition < 800) {
    document.getElementById("firsttext").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("datejust").style.opacity = "0";
  }
  if (scrollPosition > 800 && scrollPosition < 1300) {
    document.getElementById("firsttext").style.opacity = "0";
    document.getElementById("datejust").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("submariner").style.opacity = "0";
  }
  if (scrollPosition > 1300 && scrollPosition < 1800) {
    document.getElementById("datejust").style.opacity = "0";
    document.getElementById("submariner").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("gmtmaster").style.opacity = "0";
  }
  if (scrollPosition > 1800 && scrollPosition < 2400) {
    document.getElementById("submariner").style.opacity = "0";
    document.getElementById("gmtmaster").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("oyster").style.opacity = "0";
  }
  if (scrollPosition > 2400 && scrollPosition < 2900) {
    document.getElementById("gmtmaster").style.opacity = "0";
    document.getElementById("oyster").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("daydate").style.opacity = "0";
  }
  if (scrollPosition > 2900 && scrollPosition < 3400) {
    document.getElementById("oyster").style.opacity = "0";
    document.getElementById("daydate").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("seadweller").style.opacity = "0";
  }
  if (scrollPosition > 3400 && scrollPosition < 4000) {
    document.getElementById("daydate").style.opacity = "0";
    document.getElementById("seadweller").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("deepsea").style.opacity = "0";
  }
  if (scrollPosition > 4000 && scrollPosition < 4500) {
    document.getElementById("seadweller").style.opacity = "0";
    document.getElementById("deepsea").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("ladydatejust").style.opacity = "0";
  }
  if (scrollPosition > 4500 && scrollPosition < 5000) {
    document.getElementById("deepsea").style.opacity = "0";
    document.getElementById("ladydatejust").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("cosmograph").style.opacity = "0";
  }
  if (scrollPosition > 5000 && scrollPosition < 5500) {
    document.getElementById("ladydatejust").style.opacity = "0";
    document.getElementById("cosmograph").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("yatchmaster").style.opacity = "0";
  }
  if (scrollPosition > 5500 && scrollPosition < 6000) {
    document.getElementById("cosmograph").style.opacity = "0";
    document.getElementById("yatchmaster").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("airking").style.opacity = "0";
  }
  if (scrollPosition > 6000 && scrollPosition < 6500) {
    document.getElementById("yatchmaster").style.opacity = "0";
    document.getElementById("airking").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("explorer").style.opacity = "0";
  }
  if (scrollPosition > 6600 && scrollPosition < 7000) {
    document.getElementById("airking").style.opacity = "0";
    document.getElementById("explorer").style.animation = "smooth-appear 1s ease forwards";
  }
}
window.addEventListener('scroll', logScrollPosition);