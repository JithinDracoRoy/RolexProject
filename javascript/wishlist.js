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

//colRef -> docRef -> colRef2 -> docRef2
const wishlistCollectionRef = collection(db, "Wishlist"); //Get collection "WatchCollection" from databse
// const mainWatchCollectionDocRef = doc(watchCollectionRef,"watchCollection");  // Get doc "watchCollection" from collection "WatchCollection"
// const gmtMastersIICollectionRef = collection(mainWatchCollectionDocRef,"GMT-Masters II")//Get collection "GMT-Masters II" from doc "watchCollection"

// getDocs(wishlistCollectionRef)
//     .then((snapshot)=>{
//       let test=[]
//       snapshot.docs.forEach((doc) => {
//         test.push({...doc.data()})
//       })
//       console.log(test);
//     })
//     .catch(err => {
//       console.log(err.message)
//     })

    // db.collection("Wishlist").doc("SF")
    // .onSnapshot((doc) => {
    //     console.log("Current data: ", doc.data());
    // }); 

onSnapshot(wishlistCollectionRef, (snapshot) => {
  const changes = snapshot.docChanges(); // Get all changes since the last snapshot
  changes.forEach((change) => {
    const type = change.type; // added, modified, or removed
    const data = change.doc.data(); // Document data for the change
    const watchId = change.doc.id; // Document ID
    // let test=[]
    // test.push({...data})
    // console.log(test)

    // Handle the change based on its type
    if (type === "added") {
      // console.log(type);
      // Add the new document data to your UI...
     createCard(watchId,data)
    } else if (type === "modified") {
      // Update the existing document data in your UI...
      modifyWishList(watchId)
      // console.log(type);
    } else if (type === "removed") {
      // Remove the document from your UI...
      removeFromWishlist(watchId)
      // console.log(type);
    }
  });
});


function createCard(watchId,data) {
  // console.log("create card");
  const card = document.createElement('div');
  card.className = "wishlist-card";
  card.id=watchId;

  // card.classList.add = "col-3"

  // Add content to the card
  card.innerHTML = `
    <img class="wishlist-card-img" src="${data.img}" alt="Product Image">
    <h2 class="wishlist-card-series">${data.series}</h2>
    <p class="wishlist-card-model">${data.model}</p>
    <p class="wishlist-card-price">Price: ${data.price}</p>
    <button class="wishlist-card-downlaod-button">Download Brochure</button>
    <button class="wishlist-card-remove-button" id="${watchId}-remove-btn">Remove</button>
  `;
  // console.log(watchId);
  // console.log(`'${watchId}'`);
  const wishListContainer = document.getElementById("wishlist-container");
  wishListContainer.appendChild(card);
  
  const removeBtnId = `${watchId}-remove-btn`;
  // console.log(removeBtnId);
  const removeCardButton = document.getElementById(removeBtnId);
  // console.log(removeCardButton);
  removeCardButton.addEventListener('click', function() {
    let watchId = removeCardButton.id;
    watchId = watchId.replace("-remove-btn","");
    removeFromWishlist(watchId)
  });
}

  function removeFromWishlist(watchId){
  // console.log(watchId);
  const wishlistCollectionRef = collection(db,"Wishlist")
  const wishlistDocRef = doc(wishlistCollectionRef, watchId);
  // const watchDocRef = doc(gmtMastersIICollectionRef, watchId);
  // const snapshot = await getDoc(watchDocRef);
  deleteDoc(wishlistDocRef);
  const wishListContainer = document.getElementById("wishlist-container");
  const card = document.getElementById(watchId)
  // console.log(card)
  if(card != null){
    wishListContainer.removeChild(card);
  }
  
}

// function modifyWishList(watchId){

// }



