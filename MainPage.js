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
  if(scrollPosition<350){
    document.getElementById("h").style.color='red';
  }
  if(scrollPosition>350&&scrollPosition<1200){
    change();
    document.getElementById("s").style.color='red';
  }
  if(scrollPosition>1200&&scrollPosition<3500){
    change();
    document.getElementById("p").style.color='red';
  }
  if(scrollPosition>3500&&scrollPosition<4200){
    change();
    document.getElementById("a").style.color='red';
  }
  if(scrollPosition>4200){
    change();
    document.getElementById("c").style.color='red';
  }
}
window.addEventListener('scroll', logScrollPosition);