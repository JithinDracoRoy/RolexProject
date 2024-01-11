document.addEventListener("DOMContentLoaded", () => {
    const darkDiv = document.getElementById("dark-div");

    window.addEventListener('scroll', () => {
        const scrollPosition = parseInt(window.scrollY);
        if (scrollPosition > 50){
            darkDiv.style.opacity = 0;
            darkDiv.style.animation = 'dissapper in 2s ease forwards';

        } else {
            darkDiv.style.opacity = 0.9;   
            darkDiv.style.animation = 'smooth-appear';
            document.body.style.cursor = 'auto';
        }
    });
});

const closeDetails = () => {
    document.getElementById("box").style.display = 'none';
};
