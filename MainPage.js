function menuBar(x) {
    x.classList.toggle("change");
  }
function displayMenu(){ 
  if(document.getElementById("hiddennav").style.height=="500px"){
    document.getElementById("hiddennav").style.height="0px";
    document.getElementById("menuname").innerHTML="Menu";
    document.getElementById("problem").style.zIndex=0;
    document.body.style.overflow="";
  }
  else{
    document.getElementById("hiddennav").style.height="500px";
    document.body.style.overflow="hidden";
    document.getElementById("menuname").innerHTML="Close";
    document.getElementById("problem").style.zIndex=-20;
  } 
}
function logScrollPosition() {
  var scrollPosition = parseInt( window.scrollY);
  console.log("Scroll Position: " + scrollPosition);
  if(scrollPosition<800){
    document.getElementById("datejust").style.opacity="0";
  }
  if(scrollPosition>800&&scrollPosition<1300){
    document.getElementById("datejust").style.animation="smooth-appear 1s ease forwards";
    document.getElementById("submariner").style.opacity="0";
  }
  if(scrollPosition>1300&&scrollPosition<1800){
    document.getElementById("datejust").style.opacity="0";
    document.getElementById("submariner").style.animation="smooth-appear 1s ease forwards";
    document.getElementById("gmtmaster").style.opacity="0";
  }
  if(scrollPosition>1800&&scrollPosition<2300){
    document.getElementById("submariner").style.opacity="0";
    document.getElementById("gmtmaster").style.animation="smooth-appear 1s ease forwards";
    document.getElementById("oyster").style.opacity="0";
  }
  if(scrollPosition>2400){
    document.getElementById("gmtmaster").style.opacity="0";
    document.getElementById("oyster").style.animation="smooth-appear 1s ease forwards";
  }
}
window.addEventListener('scroll', logScrollPosition);