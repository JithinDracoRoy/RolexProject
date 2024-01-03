function menubar(x) {
    x.classList.toggle("change");
  }
  
  function displayMenu() {
    if (document.getElementById("hiddennav").style.height == "500px") {
      document.getElementById("hiddennav").style.height = "0px";
      document.getElementById("menuname").innerHTML = "Menu";
      const myTimeout = setTimeout(delay, 1000);
      document.body.style.overflow = "";
    }
    else {
      document.getElementById("hiddennav").style.height = "500px";
      document.body.style.overflow = "hidden";
      document.getElementById("menuname").innerHTML = "Close";
      document.getElementById("problem").style.zIndex = -20;
    }
  }
  function delay() {
    document.getElementById("problem").style.zIndex = 0;
  }