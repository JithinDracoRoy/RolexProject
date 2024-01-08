"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");

var _firebaseFirestore = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");

var firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62"
};
var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var db = (0, _firebaseFirestore.getFirestore)(app); // Reference to your Firestore collection

var storeWatchesRef = (0, _firebaseFirestore.collection)(db, 'StoreWatches'); // Function to create and append a card element

function createCard(imageData, nameData, detailsData, priceData, docId) {
  var card = document.createElement('div');
  card.className = 'card col-4';
  card.style.textAlign = "center";
  card.style.fontFamily = "sans-serif";
  var image = document.createElement('img');
  image.src = imageData;
  image.style.width = "80%";
  image.style.marginLeft = "-50px";
  card.appendChild(image);
  var name = document.createElement('div');
  name.style.fontSize = "20px";
  name.style.color = "#197149";
  name.style.marginTop = "-210px";
  name.style.marginLeft = "150px";
  name.style.fontWeight = "bold";
  name.textContent = nameData;
  card.appendChild(name);
  var details = document.createElement('div');
  details.textContent = detailsData;
  details.style.marginLeft = "150px";
  card.appendChild(details);
  var price = document.createElement('div');
  var formattedNumber = priceData.toLocaleString("en-IN");
  price.innerHTML = "&#8377; " + formattedNumber;
  price.style.marginLeft = "150px";
  card.appendChild(price);
  var buy = document.createElement('button');
  buy.textContent = "Add to cart";
  buy.style.width = "40%";
  buy.className = "btn btn-success";
  buy.style.backgroundColor = "#197149";
  buy.style.marginTop = "20px";
  buy.style.borderRadius = "20px";
  buy.style.marginLeft = "180px";
  buy.style.marginBottom = "100px";
  buy.addEventListener('click', function () {
    // Retrieve data associated with the clicked card
    var selectedImageData = imageData;
    var selectedNameData = nameData;
    var selectedDetailsData = detailsData;
    var selectedPriceData = priceData;
    var selectedDocId = docId;
    var docRef = (0, _firebaseFirestore.setDoc)((0, _firebaseFirestore.doc)(db, 'Cart', docId), {
      image: selectedImageData,
      name: selectedNameData,
      details: selectedDetailsData,
      price: selectedPriceData
    });
  });
  card.appendChild(buy);
  document.getElementById('main').appendChild(card);
} // Function to fetch data and create card elements


(0, _firebaseFirestore.getDocs)(storeWatchesRef).then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
    var namedata = doc.data().name;
    var imageData = doc.data().image;
    var detailsData = doc.data().details;
    var priceData = doc.data().price;
    var docId = doc.id;
    createCard(imageData, namedata, detailsData, priceData, docId);
  });
})["catch"](function (error) {
  console.error("Error getting data: ", error);
});