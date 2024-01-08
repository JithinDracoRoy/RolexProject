// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {   getFirestore, collection, getDocs, doc, getDoc,onSnapshot,
  setDoc, deleteDoc, 
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

//colRef -> docRef -> colRef2 -> docRef2
const watchCollectionRef = collection(db, "WatchCollection"); //Get collection "WatchCollection" from databse
const mainWatchCollectionDocRef = doc(watchCollectionRef,"watchCollection");  // Get doc "watchCollection" from collection "WatchCollection"
const gmtMastersIICollectionRef = collection(mainWatchCollectionDocRef,"GMT-Masters II")//Get collection "GMT-Masters II" from doc "watchCollection"
const wishlistCollectionRef = collection(db,"Wishlist");

getDocs(gmtMastersIICollectionRef).then((snapshot)=>{
    snapshot.docs.forEach((doc) => {    
    let button = document.createElement("button");
    button.id = doc.id; // Set button ID to document ID
    button.classList.add("design-btn");

    // Attach click event listener
    button.addEventListener("click", async () => {
      const watchId = button.id;
      await displayWatchData(watchId);
    })
    document.querySelector(".design-btn-div").appendChild(button);
  })
})
.catch(err => {
  console.log(err.message)
})

// Function to display watch data based on ID
async function displayWatchData(watchId) {
  try {
    getDocs(gmtMastersIICollectionRef)
    .then((snapshot)=>{
        snapshot.docs.forEach((doc) => {
        document.getElementById(doc.id).style.backgroundColor="#b1bece"; 
      })
    })
    .catch(err => {
      console.log(err.message)
    })

    const watchDocRef = doc(gmtMastersIICollectionRef, watchId);
    const snapshot = await getDoc(watchDocRef);
    const watchData = snapshot.data();

    // Access and display the fields
    const watchSeriesElement = document.getElementById("design-title");
    const watchModelElement = document.getElementById("design-name");
    const watchImageElement = document.getElementById("design-model");

    watchSeriesElement.textContent = watchData.series;
    watchModelElement.textContent = watchData.model;
    watchImageElement.src = watchData.img; // Assuming a valid image URL
    document.getElementById(watchId).style.backgroundColor="white";

    const wishlistButton = document.querySelector(".add-fav-label");
    wishlistButton.id = snapshot.id + "-fav";

    await checkWishlistStatus(watchId);

  } catch (error) {
    console.error("Error loading watch data:", error);
    // Handle the error appropriately, e.g., display an error message
  }
}

//check presence of document in wishlist
async function checkWishlistStatus(watchId) {

  const wishlistCollectionRef = collection(db,"Wishlist")
  const wishlistDocRef = doc(wishlistCollectionRef, watchId);
  const wishlistButton = document.querySelector(".add-fav-label");
  const wishlistButtonIcon = document.querySelector(".fav-icon");
  const wishlistButtonLabel = document.querySelector(".fav-label");

  getDoc(wishlistDocRef)
  .then(snapshot =>{
    if(snapshot.exists()){
      wishlistButtonLabel.textContent = "Remove from Wishlist";
      wishlistButtonIcon.classList.remove("bi-suit-heart");
      wishlistButtonIcon.classList.add("bi-suit-heart-fill");
    }
    else{
      wishlistButtonLabel.textContent = "Add to Wishlist";
      wishlistButtonIcon.classList.remove("bi-suit-heart-fill");
      wishlistButtonIcon.classList.add("bi-suit-heart");
    }
  })
  
  wishlistButton.addEventListener("click", async () => {
    const wishlistButton = document.querySelector(".add-fav-label");
    let watchId = wishlistButton.id;
    watchId = watchId.replace("-fav","");
    await updateWishlistCollection(watchId);
  });
}

//Function to update wishlist
async function updateWishlistCollection(watchId){
  const wishlistCollectionRef = collection(db,"Wishlist")
  const wishlistDocRef = doc(wishlistCollectionRef, watchId);
  const watchDocRef = doc(gmtMastersIICollectionRef, watchId);
  const snapshot = await getDoc(watchDocRef);
  const watchData = snapshot.data();
 
  getDoc(wishlistDocRef)
  .then(snapshot =>{
    if(snapshot.exists()){
      deleteDoc(wishlistDocRef);
    }
    else{  
      setDoc(wishlistDocRef,watchData);
    }
    checkWishlistStatus(watchId)
  })
}

window.onload = function() {
  displayWatchData("Oystersteel")
};

onSnapshot(wishlistCollectionRef, (snapshot) => {
  const changes = snapshot.docChanges(); // Get all changes since the last snapshot
  changes.forEach((change) => {
      const type = change.type; // added, modified, or removed
      const data = change.doc.data(); // Document data for the change
      const watchId = change.doc.id; // Document ID
    checkWishlistStatus(watchId)
  });
});




    
  
 

