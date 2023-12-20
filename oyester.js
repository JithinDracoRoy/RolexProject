
function showImage(imageId) {
    var imageElement = document.getElementById('imageone');
   
    switch (imageId) {
      case 'imageone':
        imageElement.src = "./images/imgpos1-removebg-preview (1).png";
        subone.innerHTML = "Oyester Perptual,41";
        oyeone.innerHTML = "Oyster,41mm,Oystersteel";
        break;
      case 'imagetwo':
        imageElement.src = "./images/imgpos2-removebg-preview (1).png";
        subone.innerHTML = "Oyester Perptual,36";
        oyeone.innerHTML = "Oyster,36mm,Oystersteel";
        break;
      case 'imagethree':
        imageElement.src = "./images/imgpos3-removebg-preview (1).png";
        subone.innerHTML = "Oyester Perptual,34";
        oyeone.innerHTML = "Oyster,34mm,Oystersteel";
        break;
      case 'imagefour':
        imageElement.src = "./images/imgpos4-removebg-preview (1).png";
        subone.innerHTML = "Oyester Perptual,31";
        oyeone.innerHTML = "Oyster,31mm,Oystersteel";
        break;
        case 'imagefive':
        imageElement.src = "./images/imgpos5-removebg-preview.png";
        subone.innerHTML = "Oyester Perptual,28";
        oyeone.innerHTML = "Oyster,28mm,Oystersteel";
        break;
      default:
        imageElement.src = "./images/imgpos1-removebg-preview (1).png";
    }
  }