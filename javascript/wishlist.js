// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {   getFirestore, collection, getDocs, doc, getDoc,onSnapshot,
  addDoc, deleteDoc, setDoc,
  query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {firebaseConfig } from '../javascript/config.js'

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const user = localStorage.getItem("user");
const user = "jintu@gmail.com";

//colRef -> docRef -> colRef2 -> docRef2
const userCollectionRef = collection(db,"User");
const userDocRef = doc(userCollectionRef,user)
const userWishlistCollectionRef = collection(userDocRef,"wishlist");

onSnapshot(userWishlistCollectionRef, (snapshot) => {
  const changes = snapshot.docChanges(); // Get all changes since the last snapshot
  changes.forEach((change) => {
    const type = change.type; // added, modified, or removed
    const data = change.doc.data(); // Document data for the change
    const watchId = change.doc.id; // Document ID

    // Handle the change based on its type
    showQRCOdeGenerationOption();
    if (type === "added") {
     createCard(watchId,data)
    } else if (type === "modified") {
      removeFromWishlist(watchId);
      createCard(watchId);
    } else if (type === "removed") {
      removeFromWishlist(watchId)
    }
   
  });
});

const showQRCOdeGenerationOption=()=>{
  getDocs(userWishlistCollectionRef)
    .then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("Collection is empty");
        const element = document.querySelector(".show-qr-find-rolex");
        if (element) { 
          element.innerHTML ="";       
          element.innerHTML = `<p id="find-rolex"><a href="../html/Store.html">Find Your Rolex&nbsp;&nbsp;<span>></span></a></p>`;
        }
      } else {
        console.log("Collection is : " + querySnapshot.size);
        const element = document.querySelector(".show-qr-find-rolex");
        if (element) {  
          element.innerHTML = `<p id="show-qr">Show QR code to share to a phone.<i class="bi bi-qr-code-scan"></i><p>`;
          addEventListnersForQRCode();
        }
        
      }
    })
    .catch((error) => {
      console.error("Error checking collection:", error);
    });
}

const addEventListnersForQRCode=()=>{
  const qrCode = document.getElementById("qrcode-popup")
  const showQRCodeButton = document.getElementById("show-qr");
  if(showQRCodeButton){
    showQRCodeButton.addEventListener("click",()=>{
      qrCode.style.display = "block";
      const qrActiveFixed = document.querySelectorAll(".qr-fixed");
      qrActiveFixed.forEach((element) => {
        element.classList.add("qr-popup-active");
      });
  })
  const removeQRCodeButton = document.getElementById("qr-code-remove");
  removeQRCodeButton.addEventListener("click",()=>{
      qrCode.style.display = "none";
      const qrActiveFixed = document.querySelectorAll(".qr-fixed");
      qrActiveFixed.forEach((element) => {
        element.classList.remove("qr-popup-active");
      });
  })
  }
}

window.onload = () => {
  showQRCOdeGenerationOption();
};


const createCard=(watchId,data)=> {
  const card = document.createElement('div');
  card.className = "wishlist-card";
  card.id=watchId;

  // Add content to the card
  card.innerHTML = `
    <h4 class="wishlist-card-series">${data.series}</h4>
    <p class="wishlist-card-model">${data.model}</p>
    <a href="${data.brochure}" target="_blank">
      <p class="wishlist-card-downlaod-button" id="${watchId}-download-btn">
          Download Brochure<i class="bi bi-download"></i>
      </p> 
    </a> 
    <img class="wishlist-card-img " src="${data.img}" alt="Product Image">
    <i class="bi bi-x-lg wishlist-card-remove-button " id="${watchId}-remove-btn"></i> 
  `;
  const wishListContainer = document.getElementById("wishlist-container");
  wishListContainer.appendChild(card);
  
  const removeBtnId = `${watchId}-remove-btn`;
  const removeCardButton = document.getElementById(removeBtnId);
  removeCardButton.addEventListener('click', function(event) {
    event.preventDefault();
    let watchId = removeCardButton.id;
    watchId = watchId.replace("-remove-btn","");
    removeFromWishlist(watchId)
  });
}

const removeFromWishlist=(watchId)=>{
  const userWishlistCollectionRef = collection(userDocRef,"wishlist");
  const wishlistDocRef = doc(userWishlistCollectionRef, watchId);
  deleteDoc(wishlistDocRef);
  const wishListContainer = document.getElementById("wishlist-container");
  const card = document.getElementById(watchId)
  if(card != null){
    wishListContainer.removeChild(card);
  }  
}



const recommendations =() => {

  const sessionStorage = window.sessionStorage;
  let recommendationsArray = JSON.parse(sessionStorage.getItem('recommendationsArray'));

  //Sort collection names by descending frequency
  const sortedCollectionNames = recommendationsArray.sort((a, b) => {
    const aCount = recommendationsArray.filter((name) => name === a).length;
    const bCount = recommendationsArray.filter((name) => name === b).length;
    return bCount - aCount; // Sort in descending order
  });
  const watchIdRecommendationArray = []; // Create an empty set

  // 3. Set to track used collection names
  const usedCollectionNames = new Set();

  // 4. Process collections in sorted order
  sortedCollectionNames.forEach((collectionName) => {
    if (!usedCollectionNames.has(collectionName)) {
      usedCollectionNames.add(collectionName);

      const collectionRef = collection(db, collectionName);
      getDocs(collectionRef)
        .then((querySnapshot) => {
          const documentIds = querySnapshot.docs.map((doc) => doc.id);
          watchIdRecommendationArray.push(...documentIds); // Add IDs to the set
        })
        .catch((error) => {
          console.error("Error fetching documents for " + collectionName + ":", error);
        });
    }
  });


// 3. Process each unique ID
watchIdRecommendationArray.forEach((watchId) => {
  try {
    // 4. Retrieve object from local storage
    const watchData = JSON.parse(localStorage.getItem(watchId));

  const card = document.createElement('div');
  card.className = "recommendation-card";
  card.id=watchId;

  // Add content to the card
  card.innerHTML = `
    <h4 class="recommendation-card-series">${watchData.series}</h4>
    <p class="recommedation-card-model">${watchData.model}</p>
    <img class="recommendation-card-img " src="${watchData.img}" alt="Product Image">
    <i class="recommendation-card-fav-icon" id="${watchId}-fav-icon"></i> 
  `;
  const recommendationContainer = document.getElementById("recommendation-container");
  recommendationContainer.appendChild(card);

  } catch (error) {
    console.error("Error processing ID " + uniqueId + ":", error);
  }
});
}













