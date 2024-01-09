const watchModels = [
    {
      button:"design-btn-one",
      name: "Oyster, 40 mm, Oystersteel",
      imageSrc: "../assests/WatchOne-removebg-preview.png",
    },
    {
      button:"design-btn-two",  
      name: "Oyster, 40 mm, white gold",
      imageSrc: "../assests/WatchTwo-removebg-preview.png",
    },
    {
      button:"design-btn-three",
      name: "Oyster, 40 mm, Oystersteel and Everose gold",
      imageSrc: "../assests/WatchThree-removebg-preview.png",
    },
    {
      button:"design-btn-four",
      name: "Oyster, 40 mm, Oystersteel and yellow gold",
      imageSrc: "../assests/WatchFour-removebg-preview.png",
    },
  ];

  const changeModel=(buttonId)=>{    
    // Making all button grey color
    for(let index=0 ; index < watchModels.length ; index++){
        document.getElementById(watchModels[index].button).style.backgroundColor="#b1bece";
    }     
  
    for(let index=0 ; index < watchModels.length ; index++){
      //new model label display
      if(buttonId =="design-btn-four" ){
        document.getElementById("new-model-label").style.display="block";
      }
      else{
        document.getElementById("new-model-label").style.display="none";
      } 
      //changing model name and image
      if(buttonId == watchModels[index].button){
        document.getElementById("design-model").src = watchModels[index].imageSrc;
        document.getElementById("design-name").innerText = watchModels[index].name;      
        document.getElementById(buttonId).style.backgroundColor="white";
        break; 
      }
    }
  }

