import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, setDoc, getDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig } from "../javascript/config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storeWatchesRef = collection(db, 'StoreWatches');
localStorage.setItem("store",1);
let cartId=[];

// Function to create and append a card element
function createCard(imageData, nameData, detailsData, priceData, docId) {
  var card = document.createElement('div');
  card.className = 'card col-4';
  card.style.textAlign = "center";
  card.style.fontFamily = "sans-serif";
  card.style.border="none";

  var image = document.createElement('img');
  image.src = imageData;
  image.style.width = "80%";
  image.style.marginLeft = "-50px"
  card.appendChild(image);

  var name = document.createElement('div');
  name.style.fontSize = "20px";
  name.style.color = "#197149";
  name.style.marginTop = "-210px";
  name.style.marginLeft = "150px"
  name.style.fontWeight = "bold";
  name.textContent = nameData;
  card.appendChild(name);

  var details = document.createElement('div');
  details.textContent = detailsData;
  details.style.marginLeft = "150px"
  card.appendChild(details);

  var price = document.createElement('div');
  const formattedNumber = priceData.toLocaleString("en-IN");
  price.innerHTML = "&#8377; " + formattedNumber;
  price.style.marginLeft = "150px"
  card.appendChild(price);

  var buy = document.createElement('button');
  buy.textContent = "Add to cart";
  buy.style.width = "40%";
  buy.className = "btn btn-success";
  buy.style.backgroundColor = "darkgreen";
  buy.style.marginTop = "20px";
  buy.style.borderRadius = "20px";
  buy.style.marginLeft = "180px"
  buy.style.marginBottom = "100px";
  buy.addEventListener("mouseover",function(){
    buy.style.color="green";
    buy.style.backgroundColor="white";
  })
  buy.addEventListener("mouseleave",function(){
    buy.style.color="white";
    buy.style.backgroundColor="darkgreen";
  })
  buy.addEventListener('click', async ()=>{
    // Retrieve data associated with the clicked card
    var selectedDocId = docId;
    document.getElementById("number").innerHTML = cartId.length+1;
    let user = localStorage.getItem("user");
    updateCart(selectedDocId, user);
    const docRef = doc(db, 'User', user);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      cartId = docSnapshot.data().cart;
    }
  });
  card.appendChild(buy);
  document.getElementById('main').appendChild(card);
}

async function updateCart(selectedDocId, user) {
  try {
    const docRef = doc(db, 'User', user);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      let newcart = docSnapshot.data().cart;
      let newname = docSnapshot.data().name;
      newcart.push(selectedDocId);

      await setDoc(doc(db, 'User', user), {
        cart: newcart,
        name: newname,
      });
    } else {
      console.error("Document does not exist");
    }
  } catch (error) {
    console.error("Error updating cart:", error);
  }
}
// Function to fetch data and create card elements
getDocs(storeWatchesRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var namedata = doc.data().name;
      var imageData = doc.data().image;
      var detailsData = doc.data().details;
      var priceData = doc.data().price;
      var docId = doc.id;
      createCard(imageData, namedata, detailsData, priceData, docId);
    });
  })
  .catch((error) => {
    console.error("Error getting data: ", error);
  });