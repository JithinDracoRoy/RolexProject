

document.addEventListener("DOMContentLoaded", function () {
    var header1 = document.getElementById("header1");
    var header2 = document.getElementById("header2");
    var header3 = document.getElementById("row");
    
                                                      
// Add a scroll event listener to the window
    window.addEventListener("scroll", function () {
         // Get the current scroll position
        var scrollPosition = window.scrollY;

        // Show/hide the first heading based on scroll position
        if (scrollPosition > 0) {
            var video=document.getElementById("firstVideo").style.marginTop="0%";
            header1.classList.remove("hidden");
        } else {
            header1.classList.add("hidden");
        }
 
        // Show/hide the second heading based on scroll position
        if (scrollPosition > 150 && scrollPosition<400) {
            header2.style.display = "block";
        //    var video=document.getElementById("firstVideo").style.marginTop="20%";
        } else {
            header2.style.display = "none";
        }
        if (scrollPosition > 200 && scrollPosition<600) {
            header2.style.display="none";
            header3.style.display = "block";
        //    var video=document.getElementById("firstVideo").style.marginTop="20%";
        } else {
            header3.style.display = "none";
        }
    });
});
 window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
            var header1 = document.getElementById('header1');
            var header2 = document.getElementById('header2');
            var header3 = document.getElementById('row');
            
            if (scrollPosition > 100&& scrollPosition<150) {
                header1.style.display = 'block';
                header2.style.display = 'none';
                header3.style.display='none';
            } else if(scrollPosition>150 && scrollPosition<200) {
                header1.style.display = 'none';
                header2.style.display = 'block';
                header3.style.display='block';
            }
            else if(scrollPosition>200){
                header1.style.display = 'none';
                header2.style.display = 'none';
                header3.style.display ='block';
            }
        });

        

          function showImage(imageId) {
            var imageElement = document.getElementById('imageone');
           
            switch (imageId) {
              case 'imageone':
                imageElement.src = "./images/watchone.png";
                subone.innerHTML = "DateJust 36";
                oyeone.innerHTML = "Oyster,36mm,Oystersteel and yello gold";
                break;
              case 'imagetwo':
                imageElement.src = "./images/watchtwo.png";
                subone.innerHTML = "DateJust 36";
                oyeone.innerHTML = "Oyster,36mm,Oystersteel";
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
       
        function redirectToPage(page) {
          window.location.href = page;
      }