function menuBar(x) {
  x.classList.toggle("change");
}

function showImage(imageId) {
  var imageElement = document.getElementById('imageone');

  switch (imageId) {
    case 'imageone':
      imageElement.src = "../assets/imgpos1-removebg-preview (1).png";
      subone.innerHTML = "Oyester Perptual,41";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel";
      break;
    case 'imagetwo':
      imageElement.src = "../assets/imgpos2-removebg-preview (1).png";
      subone.innerHTML = "Oyester Perptual,36";
      oyeone.innerHTML = "Oyster,36mm,Oystersteel";
      break;
    case 'imagethree':
      imageElement.src = "../assets/imgpos3-removebg-preview (1).png";
      subone.innerHTML = "Oyester Perptual,34";
      oyeone.innerHTML = "Oyster,34mm,Oystersteel";
      break;
    case 'imagefour':
      imageElement.src = "../assets/imgpos4-removebg-preview (1).png";
      subone.innerHTML = "Oyester Perptual,31";
      oyeone.innerHTML = "Oyster,31mm,Oystersteel";
      break;
    case 'imagefive':
      imageElement.src = "../assets/imgpos5-removebg-preview.png";
      subone.innerHTML = "Oyester Perptual,28";
      oyeone.innerHTML = "Oyster,28mm,Oystersteel";
      break;
    default:
      imageElement.src = "../assets/imgpos1-removebg-preview (1).png";
  }
}
function logScrollPosition() {
  var scrollPosition = parseInt(window.scrollY);
  console.log("Scroll Position: " + scrollPosition);
  if (scrollPosition > 0 && scrollPosition < 200) {
    document.getElementById("firsttxt").style.opacity = "1"
    document.getElementById("secondtxt").style.opacity = "0";
    document.getElementById("thirdtxt").style.display = "0";
  }
  if (scrollPosition > 200 && scrollPosition < 400) {
    document.getElementById("firsttxt").style.opacity = "0";
    document.getElementById("secondtxt").style.opacity = "1";
    document.getElementById("thirdtxt").style.opacity = "0";
  }
  if (scrollPosition > 450 && scrollPosition < 800) {
    document.getElementById("firsttxt").style.opacity = "0";
    document.getElementById("secondtxt").style.opacity = "0";
    document.getElementById("thirdtxt").style.opacity = "1";
  }

}
window.addEventListener('scroll', logScrollPosition);
