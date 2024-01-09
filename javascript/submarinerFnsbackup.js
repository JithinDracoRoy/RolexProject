
function includeHTML(url, targetElementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
  
      document.getElementById(targetElementId).innerHTML = data;
    })
    .catch((error) => console.error("Error fetching HTML:", error));
}
includeHTML("../html/navbar.html", "imported");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    var scrollPosition = window.scrollY;
      if (scrollPosition < 103 ) {
        document.getElementById('subhead').innerHTML='Oyster Perpetual';
        document.getElementById('video-one-btn').style.display='block';
        document.getElementById('mainhead').innerHTML = 'Submariner';
        document.getElementById('video-one-blackfilm').style.opacity = 0;

      }
      if (scrollPosition > 99) {

        document.getElementById('subhead').innerHTML='';
        document.getElementById('video-one-btn').style.display='none';
        document.getElementById('mainhead').innerHTML = 'Deep Confidence';
        document.getElementById('video-one-blackfilm').style.opacity = 0.7;
      }
      else{
        document.getElementById('subhead').innerHTML='Oyster Perpetual';
        document.getElementById('video-one-btn').style.display='block';
        document.getElementById('mainhead').innerHTML = 'Submariner';
      }

    if (scrollPosition < 852) {
      document.getElementById("video-two-content").style.animation = "disappear 1s ease forwards";
    }
    else if (scrollPosition > 1200) {
      document.getElementById("video-two-content").style.animation = "smooth-appear 1s ease forwards";

    }
    if (scrollPosition < 1727) {
      document.getElementById("feature-div-head").style.animation = "disappear 1s ease forwards";
      document.getElementById("feature-div-content").style.animation = "disappear 1s ease forwards";
    }
    else if (scrollPosition > 1727) {
      document.getElementById("feature-div-head").style.animation = "smooth-appear 1s ease forwards";
      document.getElementById("feature-div-content").style.animation = "smooth-appear 1s ease forwards";
    }
    if (scrollPosition < 2046) {
      document.getElementById("feature-div-image-one-id").style.animation = "disappear 1s ease forwards";
      document.getElementById("feature-div-image-two-id").style.animation = "disappear 1s ease forwards";
      document.getElementById("feature-div-image-three-id").style.animation = "disappear 1s ease forwards";
      document.getElementById("feature-div-image-four-id").style.animation = "disappear 1s ease forwards";
    }
    if (scrollPosition > 2046) {
      document.getElementById("feature-div-image-one-id").style.animation = "smooth-appear 1s ease forwards";
      document.getElementById("feature-div-image-two-id").style.animation = "smooth-appear 1s ease forwards";
      document.getElementById("feature-div-image-three-id").style.animation = "smooth-appear 1s ease forwards";
      document.getElementById("feature-div-image-four-id").style.animation = "smooth-appear 1s ease forwards";

    }
    if(scrollPosition < 2700){
      document.getElementById("feature-div-content-two-para").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  2700) {
      document.getElementById("feature-div-content-two-para").style.animation = "smooth-appear 1s ease forwards";

    }
    if(scrollPosition < 2855){
      document.getElementById("feature-div-content-two-image-main").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  2855) {
      document.getElementById("feature-div-content-two-image-main").style.animation = "smooth-appear 1s ease forwards";

    }
    if(scrollPosition < 3657){
      document.getElementById("feature-div-content-three").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  3657) {
      document.getElementById("feature-div-content-three").style.animation = "smooth-appear 1s ease forwards";

    }
    if (scrollPosition < 4148) {
      document.getElementById("video-three-content").style.animation = "disappear 1s ease forwards";
    }
    else if (scrollPosition > 4148) {
      document.getElementById("video-three-content").style.animation = "smooth-appear 1s ease forwards";

    }
    if (scrollPosition < 5031) {
      document.getElementById("james-cameron-quote").style.animation = "disappear 1s ease forwards";
    }
    else if (scrollPosition > 5031) {
      document.getElementById("james-cameron-quote").style.animation = "smooth-appear 1s ease forwards";

    }
  
  });
 
  });
  function windowlocation(){
    window.location.href ="../html/map.html";
  }

 