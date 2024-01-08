import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc, doc, addDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62",
};

//const user=localStorage.getItem("user");
const user = "pavi@gmail.com";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemsListContainer = document.querySelector(".items-list");
const savedItemsContainer = document.querySelector(".saveditems"); // Added reference to the saved items container
const cartCollection = collection(db, "User");
const saveForLaterCollection = collection(db, "SaveForLater"); // Added SaveForLater collection reference
const storeWatchesRef = collection(db, "StoreWatches");
const docRef = doc(db, 'User', user);
const docSnapshot = await getDoc(docRef);
let totalPrice = 0;
const shippingCharge = 1000;
let orderTotal = 0;
let cartId = [];

// Function to delete a document from the "Cart" collection
function deleteItemFromCart(itemId) {
  console.log(itemId);
  const collectionRef = collection(db, "User");
  const itemRef = doc(collectionRef, itemId);

  deleteDoc(itemRef);
}

// Function to add a document to the "SaveForLater" collection
async function saveItemForLater(itemData) {
  await addDoc(saveForLaterCollection, itemData);
}

async function getId(user) {
  try {

    if (docSnapshot.exists()) {
      return docSnapshot.data().cart;
    } else {
      console.error("Document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error updating cart:", error);
    return null;
  }
}

getDocs(storeWatchesRef)
  .then(async (querySnapshot) => {
    const user = localStorage.getItem("user");
    const cartId = await getId("pavi@gmail.com"); // Get the cartId

    querySnapshot.forEach((doc) => {
      // Check if the item is in the user's cart
      if (cartId.includes(doc.id)) {
        const namedata = doc.data().name;
        const imageData = doc.data().image;
        const detailsData = doc.data().details;
        const priceData = doc.data().price;
        const formatPrice = priceData.toLocaleString("en-IN");
        const price = "Rs." + formatPrice;
        const itemId = doc.id; // Save the document ID for later reference


        const itemDataDiv = document.createElement("div");

        itemDataDiv.className = "item-data";
        itemDataDiv.innerHTML = `
         <div class=maindiv>
          <div class=cartimage>
          <img id="img" src="${imageData}" alt="Product Image">
          </div>
          <div class=cartname>
          <span id="name">${namedata}</span>
          </div>
          <div class=trashicon>
          <span class="icon-trash" data-item-id="${itemId}"><i class="bi bi-trash"></i></span>
          </div>
          <div class=saveicon>
          <span class="icon-save" data-item-id="${itemId}"><i class="bi bi-save"></i></span>
          </div>
         </div>
          <div class=desc>
          <p id="description"><b>${detailsData}</b></p>
          </div>
          <hr id=firstline>
          <div class="price-div">
            <span id="pricename"><b>Price</b></span>
            <span id="price">${price}</span>
          </div>
          <hr id=secondline>
        `;
        const itemPrice = doc.data().price;
        totalPrice += itemPrice;
        orderTotal = totalPrice + shippingCharge;
        itemsListContainer.appendChild(itemDataDiv);

        // Add a click event listener to the trash icon
        const trashIcon = itemDataDiv.querySelector(".icon-trash");
        trashIcon.addEventListener("click", () => {
          // Delete the corresponding document from the "Cart" collection
          deleteItemFromCart(itemId);

          // Delete the item from the page
          itemDataDiv.remove();

          // Update the total prices
          totalPrice -= itemPrice;
          orderTotal = totalPrice + shippingCharge;

          // Update the displayed totals
          displaySubtotal(totalPrice);
          displayTotalPrice(orderTotal);
        });

        // Add a click event listener to the save icon
        const saveIcon = itemDataDiv.querySelector(".icon-save");
        saveIcon.addEventListener("click", () => {
          // Save the corresponding document to the "SaveForLater" collection
          saveItemForLater(doc.data());

          // Optionally, you can remove the item from the cart after saving for later
          deleteItemFromCart(itemId);
          itemDataDiv.remove();

          // Update the total prices
          totalPrice -= itemPrice;
          orderTotal = totalPrice + shippingCharge;

          // Update the displayed totals
          displaySubtotal(totalPrice);
          displayTotalPrice(orderTotal);
        });
      }
    }
    );

    // Display the initial subtotal and total
    displaySubtotal(totalPrice);
    displayTotalPrice(orderTotal);
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

function displaySubtotal(subtotal) {

  const formatSubtotal = subtotal.toLocaleString("en-IN");
  const subtotall = "Rs." + formatSubtotal;
  const subTotalDiv = document.getElementById('amount');
  subTotalDiv.textContent = subtotall;
}

function displayTotalPrice(orderTotal) {
  const formatOrdertotal = orderTotal.toLocaleString("en-IN");
  const ordertotall = "Rs." + formatOrdertotal;
  const orderDiv = document.getElementById('total');
  orderDiv.textContent = ordertotall;

}


// Use async function to handle promises
(async () => {
  try {
    console.log("hi");
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      console.log("hi");
      var newname = docSnapshot.data().name;
      newname = newname.charAt(0).toUpperCase() + newname.slice(1);
      console.log(newname);
      document.getElementById("login").innerHTML = `<i class="fa fa-user"  aria-hidden="true"><span style="margin-left:9px" ">${newname}</span></i>`;

    }
  } catch (error) {
    console.error("Error fetching user document:", error);
  }
})();
// ... (existing code)

// Assuming user information is available in the cart.js file
//const userName = "User123"; // Replace with your actual way of getting the user name

// Store the user name in localStorage for access in other pages
localStorage.setItem("userName", user);

$(document).ready(function () {
  $('.carousel').slick({
    autoplay: true, // Set to true for automatic slideshow
    autoplaySpeed: 1000, // Adjust the delay between slides in milliseconds
    dots: true, // Display dots for navigation
    infinite: true, // Enable infinite loop
    speed: 800, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1 // Number of slides to scroll at a time
  });
});




