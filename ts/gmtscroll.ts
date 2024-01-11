let logScrollPosition = (): void => {
    let scrollPosition: number = parseInt(window.scrollY.toString());
    console.log(scrollPosition);
  
    if (scrollPosition >= 0 && scrollPosition < 100) {
      appear("intro-title");
      appear("intro-series");
      dissappear("intro-sub-title");
      postionNormal("intro-vid");
    }
  
    if (scrollPosition > 100 && scrollPosition < 200) {
      dissappear("intro-title");
      dissappear("intro-series");
      appear("intro-sub-title");
      positionFixed("intro-vid");
      dissappear("intro-desc-title");
      dissappear("intro-desc-body");
    }
  
    if (scrollPosition > 200 && scrollPosition < 700) {
      postionNormal("intro-vid");
      dissappear("intro-sub-title");
      appear("intro-desc-title");
      appear("intro-desc-body");
      dissappear("model-page-title");
      dissappear("model-para-one");
      postionNormal("model-img");
    }
  
    if (scrollPosition > 700 && scrollPosition < 900) {
      dissappear("intro-desc-title");
      dissappear("intro-desc-body");
      appear("model-page-title");
      appear("model-para-one");
      dissappear("model-para-two");
    }
  
    if (scrollPosition > 900 && scrollPosition < 1350) {
      dissappear("model-page-title");
      dissappear("model-para-one");
      appear("model-para-two");
    }
  
    if (scrollPosition < 4200 || scrollPosition > 4700) {
      dissappear("about-desc-two-title");
      dissappear("about-desc-two-body");
    }
  
    if (scrollPosition > 4200 && scrollPosition < 4700) {
      appear("about-desc-two-title");
      appear("about-desc-two-body");
    }
  };
  
  window.addEventListener('scroll', logScrollPosition);
  
  const positionFixed = (id: string): void => {
    console.log(id);
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.style.position = "fixed";
      element.style.top = "12%";
    }
  };
  
  const postionNormal = (id: string): void => {
    console.log(id);
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.style.position = "";
    }
  };
  
  const appear = (id: string): void => {
    console.log(id);
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.style.animation = "appear 2.5s ease forwards";
    }
  };
  
  const dissappear = (id: string): void => {
    console.log(id);
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.style.animation = "dissappear 1s ease forwards";
    }
  };
  
  document.getElementById("goback")?.addEventListener("click", () => {
    window.location.href = "../html/MainPage.html";
  });