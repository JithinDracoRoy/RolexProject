import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig } from "../javascript/config.js";

//const user=localStorage.getItem("user");
const user = localStorage.getItem("user");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemsListContainer = document.querySelector(".items-list");

const storeWatchesRef = collection(db, "StoreWatches");
const docRef = doc(db, "User", user);
const docSnapshot = await getDoc(docRef);
let totalPrice = 0;
const shippingCharge = 1000;
let orderTotal = 0;
localStorage.setItem("store",0);

// Function to delete a document from the "Cart" collection
async function deleteItemFromCart(itemId) {
  console.log(itemId);
  const userId = localStorage.getItem("user");
  const userRef = doc(collection(db, "User"), userId);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    // Get the user's cart array
    const cartArray = userDoc.data().cart || [];
    // Log the cart items
    console.log("Current cart:", cartArray);
    // Find the index of the item to be removed
    const indexToRemove = cartArray.indexOf(itemId);
    if (indexToRemove !== -1) {
      cartArray.splice(indexToRemove, 1);
      console.log("Item removed from cart");
      await updateDoc(userRef, { cart: cartArray });
      document.getElementById("number").innerHTML = cartArray.length;
    } else {
      console.log("Item not found in the cart");
    }
  } else {
    console.log("User not found");
  }
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
    const cartId = await getId(user); // Get the cartId

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
        trashIcon.addEventListener("click", async () => {
          deleteItemFromCart(itemId);
          itemDataDiv.remove();
          totalPrice -= itemPrice;
          orderTotal = totalPrice + shippingCharge;

          // Update the displayed totals
          displaySubtotal(totalPrice);
          displayTotalPrice(orderTotal);
        }); 
      }
    });

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
  const subTotalDiv = document.getElementById("amount");
  subTotalDiv.textContent = subtotall;
}

function displayTotalPrice(orderTotal) {
  const formatOrdertotal = orderTotal.toLocaleString("en-IN");
  const ordertotall = "Rs." + formatOrdertotal;
  const orderDiv = document.getElementById("total");
  orderDiv.textContent = ordertotall;
}

// Use async function to handle promises
(async () => {
  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      var newname = docSnapshot.data().name;
      newname = newname.charAt(0).toUpperCase() + newname.slice(1);
      console.log(newname);
      document.getElementById(
        "login"
      ).innerHTML = `<i class="fa fa-user"  aria-hidden="true"><span style="margin-left:9px" ">${newname}</span></i>`;
    }
  } catch (error) {
    console.error("Error fetching user document:", error);
  }
})();

localStorage.setItem("userName", user);

$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true, // Set to true for automatic slideshow
    autoplaySpeed: 1000, // Adjust the delay between slides in milliseconds
    dots: true, // Display dots for navigation
    infinite: true, // Enable infinite loop
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  });
});
async function deleteItemAllCart() {
  const userId = localStorage.getItem("user");
  const userRef = doc(collection(db, "User"), userId);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    await updateDoc(userRef, { cart: [] });
  } else {
    console.log("User not found");
  }
}

document.getElementById("btn").addEventListener("click",deleteItemAllCart());