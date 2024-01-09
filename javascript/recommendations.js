import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
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
// const user = localStorage.getItem("user");
const user = "jintu@gmail.com";
// colRef -> docRef -> colRef2 -> docRef2
const userCollectionRef = collection(db, "User");
const userDocRef = doc(userCollectionRef, user);
const userWishlistCollectionRef = collection(userDocRef, "wishlist");
const recommendations = () => {
    const sessionStorage = window.sessionStorage;
    let recommendationsArray = JSON.parse(sessionStorage.getItem('recommendationsArray'));
    // Sort collection names by descending frequency
    const sortedCollectionNames = recommendationsArray.sort((a, b) => {
        const aCount = recommendationsArray.filter((name) => name === a).length;
        const bCount = recommendationsArray.filter((name) => name === b).length;
        return bCount - aCount; // Sort in descending order
    });
    const watchIdRecommendationArray = []; // Create an empty array
    // Set to track used collection names
    const usedCollectionNames = new Set();
    // Process collections in sorted order
    sortedCollectionNames.forEach((collectionName) => {
        if (!usedCollectionNames.has(collectionName)) {
            usedCollectionNames.add(collectionName);
            const collectionRef = collection(db, collectionName);
            getDocs(collectionRef)
                .then((querySnapshot) => {
                const documentIds = querySnapshot.docs.map((doc) => doc.id);
                watchIdRecommendationArray.push(...documentIds); // Add IDs to the array
            })
                .catch((error) => {
                console.error(`Error fetching documents for ${collectionName}:`, error);
            });
        }
    });
    // Process each unique ID
    watchIdRecommendationArray.forEach((watchId) => {
        try {
            // Retrieve object from local storage
            const watchData = JSON.parse(localStorage.getItem(watchId));
            const card = document.createElement('div');
            card.className = 'recommendation-card';
            card.id = watchId;
            // Add content to the card
            card.innerHTML = `
          <h4 class="recommendation-card-series">${watchData.series}</h4>
          <p class="recommedation-card-model">${watchData.model}</p>
          <img class="recommendation-card-img " src="${watchData.img}" alt="Product Image">
          <i class="recommendation-card-fav-icon" id="${watchId}-fav-icon"></i> 
        `;
            const recommendationContainer = document.getElementById('recommendation-container');
            if (recommendationContainer) {
                recommendationContainer.appendChild(card);
            }
        }
        catch (error) {
            console.error(`Error processing ID ${watchId}:`, error);
        }
    });
};
