function menuBar(x) {
    x.classList.toggle("change");
  }
  
  function logScrollPosition() {
    var scrollPosition = parseInt(window.scrollY);
    console.log("Scroll Position: " + scrollPosition);
    if (scrollPosition > 0 && scrollPosition < 200) {
      document.getElementById("firsttxt").style.opacity="1"
      document.getElementById("secondtxt").style.opacity = "0";
      document.getElementById("thirdtxt").style.display= "0";
    }
    if (scrollPosition > 200 && scrollPosition < 400) {
      document.getElementById("firsttxt").style.opacity = "0";
      document.getElementById("secondtxt").style.opacity="1";
      document.getElementById("thirdtxt").style.opacity = "0";
    }
    if (scrollPosition > 400 && scrollPosition < 800) {
      document.getElementById("firsttxt").style.opacity = "0";
      document.getElementById("secondtxt").style.opacity="0";
      document.getElementById("thirdtxt").style.opacity = "1";
    }
    
  }
  window.addEventListener('scroll', logScrollPosition);