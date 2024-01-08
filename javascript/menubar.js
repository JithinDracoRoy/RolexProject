function menubar(x) {
  x.classList.toggle("change");
}

function displayMenu() {
  if (document.getElementById("hiddennav").style.height == "550px") {
    document.getElementById("hiddennav").style.height = "0px";
    document.getElementById("menuname").innerHTML = "Menu";
    setTimeout(delay, 1000);
    document.body.style.overflow = "";
  }
  else {
    document.getElementById("hiddennav").style.height = "550px";
    document.body.style.overflow = "hidden";
    document.getElementById("menuname").innerHTML = "Close";
    // document.getElementById("problem").style.display="none";
  }
}
function delay() {
  // document.getElementById("problem").style.zIndex = 0;
}
function logout() {
  localStorage.setItem("check",0);
  location.reload();
}
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading delay (you can replace this with your actual loading logic)
  setTimeout(function () {
      // Hide the loading screen
      document.getElementById("loadingScreen").style.display = "none";
      // Display the content
      document.getElementById("firstpart").style.visibility = "visible";
      document.getElementById("lastpart").style.display = "block";
  }, 2000); // Change 2000 to your desired loading time in milliseconds
});

