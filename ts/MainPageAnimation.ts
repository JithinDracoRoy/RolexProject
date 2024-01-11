function logScrollPosition2() {
  var scrollPosition = parseInt(window.scrollY.toString());
  console.log("Scroll Position: " + scrollPosition);

  if (scrollPosition > 250 && scrollPosition < 800) {
    (document.getElementById("firsttext") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("datejust") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 800 && scrollPosition < 1300) {
    (document.getElementById("firsttext") as HTMLElement).style.opacity = "0";
    (document.getElementById("datejust") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("submariner") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 1300 && scrollPosition < 1800) {
    (document.getElementById("datejust") as HTMLElement).style.opacity = "0";
    (document.getElementById("submariner") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("gmtmaster") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 1800 && scrollPosition < 2400) {
    (document.getElementById("submariner") as HTMLElement).style.opacity = "0";
    (document.getElementById("gmtmaster") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("oyster") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 2400 && scrollPosition < 2900) {
    (document.getElementById("gmtmaster") as HTMLElement).style.opacity = "0";
    (document.getElementById("oyster") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("daydate") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 2900 && scrollPosition < 3400) {
    (document.getElementById("oyster") as HTMLElement).style.opacity = "0";
    (document.getElementById("daydate") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("seadweller") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 3400 && scrollPosition < 4000) {
    (document.getElementById("daydate") as HTMLElement).style.opacity = "0";
    (document.getElementById("seadweller") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("deepsea") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 4000 && scrollPosition < 4500) {
    (document.getElementById("seadweller") as HTMLElement).style.opacity = "0";
    (document.getElementById("deepsea") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("ladydatejust") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 4500 && scrollPosition < 5000) {
    (document.getElementById("deepsea") as HTMLElement).style.opacity = "0";
    (document.getElementById("ladydatejust") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("cosmograph") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 5000 && scrollPosition < 5500) {
    (document.getElementById("ladydatejust") as HTMLElement).style.opacity = "0";
    (document.getElementById("cosmograph") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("yatchmaster") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 5500 && scrollPosition < 6000) {
    (document.getElementById("cosmograph") as HTMLElement).style.opacity = "0";
    (document.getElementById("yatchmaster") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("airking") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 6000 && scrollPosition < 6500) {
    (document.getElementById("yatchmaster") as HTMLElement).style.opacity = "0";
    (document.getElementById("airking") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
    (document.getElementById("explorer") as HTMLElement).style.opacity = "0";
  }

  if (scrollPosition > 6600 && scrollPosition < 7000) {
    (document.getElementById("airking") as HTMLElement).style.opacity = "0";
    (document.getElementById("explorer") as HTMLElement).style.animation = "smooth-appear 1s ease forwards";
  }
}

window.addEventListener('scroll', logScrollPosition2);
