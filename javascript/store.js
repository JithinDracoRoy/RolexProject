import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, setDoc, getDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
const storeWatchesRef = collection(db, 'StoreWatches');

let cartId=[];

localStorage.setItem("store",1);

// Function to create and append a card element
function createCard(imageData, nameData, detailsData, priceData, docId) {
  var card = document.createElement('div');
  card.className = 'card col-4';
  card.style.textAlign = "center";
  card.style.fontFamily = "sans-serif";
  card.style.border = "none";

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
  buy.addEventListener("mouseover", function () {
    buy.style.color = "green";
    buy.style.backgroundColor = "white";
  })
  buy.addEventListener("mouseleave", function () {
    buy.style.color = "white";
    buy.style.backgroundColor = "darkgreen";
  })
  buy.addEventListener('click', async () => {
    // Retrieve data associated with the clicked card
    var selectedDocId = docId;
    const user = localStorage.getItem("user");
    console.log(user);
    updateCart(selectedDocId, user);
    const docRef = doc(db, 'User', user);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      cartId=docSnapshot.data().cart;
      document.getElementById("number").innerHTML=cartId.length;
    }
  });
  card.appendChild(buy);
  document.getElementById('main').appendChild(card);
}

let check = parseInt(localStorage.getItem("check"));
if (check === 1) {
  const user = localStorage.getItem("user");
  const docRef = doc(db, 'User', user);
  
  // Use async function to handle promises
  (async () => {
    try {
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        cartId=docSnapshot.data().cart;
        console.log(cartId.length);
        if(cartId.length==0){
          document.getElementById("opencart").style.display="";
          document.getElementById("closecart").style.display="none";
          document.getElementById("number").style.display="none";
        }
        else{
          document.getElementById("opencart").style.display="none";
          document.getElementById("closecart").style.display="";
          document.getElementById("number").style.display="";
          document.getElementById("number").style.marginLeft="10px";
          document.getElementById("number").innerHTML=cartId.length;
        }
        document.getElementById("login").innerHTML = `<b style="font-size : 20px">Checkout</b>`;
        document.getElementById("login").addEventListener("click", function () {
          window.location.href = "../html/cart.html";
        });
      } else {
        console.error("Document does not exist.");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  })();
}
else {
  document.getElementById("opencart").style.display="none";
  document.getElementById("closecart").style.display="none";
  document.getElementById("number").style.display="none";
  document.getElementById("login").addEventListener("click", function () {
    window.location.href = "../html/login.html";
  });
}
 
async function updateCart(selectedDocId, user) {
  try {
    const docRef = doc(db, 'User', user);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      let newcart = docSnapshot.data().cart;
      let newname = docSnapshot.data().name;
      let newsaveforlater = docSnapshot.data().saveforlater
      newcart.push(selectedDocId);

      await setDoc(doc(db, 'User', user), {
        cart: newcart,
        name: newname,
        saveforlater: newsaveforlater
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