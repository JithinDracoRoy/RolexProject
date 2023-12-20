switch (imageId) {
    case 'imageone':
      imageElement.src = "./images/watchone.png";
    

      break;
    case 'imagetwo':
      imageElement.src = "./images/watchtwo.png";
     
      break;
    case 'imagethree':
      imageElement.src = "./images/watchthree.png";
      subone.innerHTML = "DateJust 31";
      oyeone.innerHTML = "Oyster,31mm,Everose gold and diamonds"
      break;
    case 'imagefour':
      imageElement.src = "./images/watchfour.png";
      subone.innerHTML = "DateJust 41";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel and white Gold";
      break;
    default:
      imageElement.src = "./images/watchone.png";
  }
}
