import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, setDoc, getDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig } from "../javascript/config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const user = localStorage.getItem("user");
const docRef = doc(db, 'User', user);
const docSnapshot = await getDoc(docRef);
if (docSnapshot.exists()) {
    let name = docSnapshot.data().name;
    console.log(name);
    document.getElementById("welcome").innerHTML=`<b>${name}</b>`;
}
function showAvatarOptions() {
    // Toggle the display of the avatar options
    var avatar = document.getElementById("avatar");
    
}

function changeAvatar() {
    // Get the selected avatar value
    var selectedAvatar = document.getElementById("avatarSelect").value;

    // Update the avatar image source based on the selected value
    var avatarImage = document.getElementById("avatarImage");
    avatarImage.src = "../assets/" + selectedAvatar + ".jpg";

    // Hide the avatar options after selecting a new avatar
    document.getElementById("avatarSelection").style.display = "none";
}