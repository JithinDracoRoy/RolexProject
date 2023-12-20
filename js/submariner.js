function menuBar(x) {
  x.classList.toggle("change");
}
function menuBar(x) {
  x.classList.toggle("change");
}


document.addEventListener("DOMContentLoaded", function() {
  var changingHeading = document.getElementById('mainhead');
  var changingVideo = document.getElementById('scrollcontent');
  var fixedVideo = document.getElementById('videoContent');
  var nextVideoChanging = document.getElementById('scrollingtwo');

  window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;

      // You can customize this threshold based on when you want the heading to change
      if (scrollPosition > 100 && scrollPosition<200) {
          document.getElementById('subhead').innerHTML='';
          document.getElementById('videobtn').style.display='none';
          document.getElementById('mainhead').innerHTML = 'Deep Confidence';
          document.getElementById('twocontent').innerHTML.style.display='none';
          // fixedVideo.style.position='fixed';
      }
      else if (scrollPosition > 200 && scrollPosition<700) {
        // fixedVideo.style.position='fixed';
        document.getElementById('subhead').innerHTML='';
        document.getElementById('videobtn').style.display='none';
        document.getElementById('mainhead').innerHTML = 'Deep Confidence';
        var opacityValue = Math.min(scrollPosition / 100, 0.8); // Adjust the division factor for a smoother effect
        changingVideo.style.opacity = opacityValue;
        document.getElementById('twocontent').innerHTML.style.display='none';
      }
      else if(scrollPosition>700){
        document.getElementById('mainhead').innerHTML.style.display='none';
      }
      else{
        changingVideo.style.opacity = 0;
        document.getElementById('subhead').innerHTML='Oyster Perpetual';
        document.getElementById('videobtn').style.display='block';
        document.getElementById('mainhead').innerHTML = 'Submariner';
      }
  });
});
  
function showImage(imageId) {
  var imageElement = document.getElementById('imageone');

  switch (imageId) {
    case 'imageone':
      imageElement.src = "./assets/vector1.png";
      subone.innerHTML ="Submariner";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel";
      break;
    case 'imagetwo':
      imageElement.src = "./assets/vector2.png";
      subone.innerHTML = "Submariner Date";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel and Yellow gold";
      break;
    case 'imagethree':
      imageElement.src = "./assets/vector3.png";
      subone.innerHTML = "Submariner Date";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel"
      break;
    case 'imagefour':
      imageElement.src = "./assets/vector4.png";
      subone.innerHTML = "Submariner Date";
      oyeone.innerHTML = "Oyster,41mm,Yellow Gold";
      break;
    default:
      imageElement.src = "./assets/default.png";
  }
}