"use strict";
function includeHTML(url, targetElementId) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = data;
        }
    })
        .catch((error) => console.error("Error fetching HTML:", error));
}
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const getElement = (id) => document.getElementById(id);
        if (scrollPosition < 103) {
            const subheadElement = getElement('subhead');
            const videoOneBtnElement = getElement('video-one-btn');
            const mainheadElement = getElement('mainhead');
            const videoOneBlackfilmElement = getElement('video-one-blackfilm');
            if (subheadElement && videoOneBtnElement && mainheadElement && videoOneBlackfilmElement) {
                subheadElement.innerHTML = 'Oyster Perpetual';
                videoOneBtnElement.style.display = 'block';
                mainheadElement.innerHTML = 'Submariner';
                videoOneBlackfilmElement.style.opacity = '0';
            }
        }
        if (scrollPosition > 99) {
            const subheadElement = getElement('subhead');
            const videoOneBtnElement = getElement('video-one-btn');
            const mainheadElement = getElement('mainhead');
            const videoOneBlackfilmElement = getElement('video-one-blackfilm');
            if (subheadElement && videoOneBtnElement && mainheadElement && videoOneBlackfilmElement) {
                subheadElement.innerHTML = '';
                videoOneBtnElement.style.display = 'none';
                mainheadElement.innerHTML = 'Deep Confidence';
                videoOneBlackfilmElement.style.opacity = '0.7';
            }
        }
        else {
            const subheadElement = getElement('subhead');
            const videoOneBtnElement = getElement('video-one-btn');
            const mainheadElement = getElement('mainhead');
            if (subheadElement && videoOneBtnElement && mainheadElement) {
                subheadElement.innerHTML = 'Oyster Perpetual';
                videoOneBtnElement.style.display = 'block';
                mainheadElement.innerHTML = 'Submariner';
            }
        }
        if (scrollPosition < 852) {
            const videoTwoContentElement = getElement("video-two-content");
            if (videoTwoContentElement) {
                videoTwoContentElement.style.animation = "disappear 1s ease forwards";
            }
        }
        else if (scrollPosition > 1200) {
            const videoTwoContentElement = getElement("video-two-content");
            if (videoTwoContentElement) {
                videoTwoContentElement.style.animation = "smooth-appear 1s ease forwards";
            }
        }
        if (scrollPosition < 1727) {
            const featureDivHeadElement = getElement("feature-div-head");
            const featureDivContentElement = getElement("feature-div-content");
            if (featureDivHeadElement && featureDivContentElement) {
                featureDivHeadElement.style.animation = "disappear 1s ease forwards";
                featureDivContentElement.style.animation = "disappear 1s ease forwards";
            }
        }
        else if (scrollPosition > 1727) {
            const featureDivHeadElement = getElement("feature-div-head");
            const featureDivContentElement = getElement("feature-div-content");
            if (featureDivHeadElement && featureDivContentElement) {
                featureDivHeadElement.style.animation = "smooth-appear 1s ease forwards";
                featureDivContentElement.style.animation = "smooth-appear 1s ease forwards";
            }
        }
        if (scrollPosition < 2046) {
            ["feature-div-image-one-id", "feature-div-image-two-id", "feature-div-image-three-id", "feature-div-image-four-id"].forEach((elementId) => {
                const element = getElement(elementId);
                if (element) {
                    element.style.animation = "disappear 1s ease forwards";
                }
            });
        }
        if (scrollPosition > 2046) {
            ["feature-div-image-one-id", "feature-div-image-two-id", "feature-div-image-three-id", "feature-div-image-four-id"].forEach((elementId) => {
                const element = getElement(elementId);
                if (element) {
                    element.style.animation = "smooth-appear 1s ease forwards";
                }
            });
        }
        if (scrollPosition < 2700) {
            const element = getElement("feature-div-content-two-para");
            if (element) {
                element.style.animation = "disappear 1s ease forwards";
            }
        }
        else if (scrollPosition > 2700) {
            const element = getElement("feature-div-content-two-para");
            if (element) {
                element.style.animation = "smooth-appear 1s ease forwards";
            }
        }
        if (scrollPosition < 2855) {
            const element = getElement("feature-div-content-two-image-main");
            if (element) {
                element.style.animation = "disappear 1s ease forwards";
            }
        }
        else if (scrollPosition > 2855) {
            const element = getElement("feature-div-content-two-image-main");
            if (element) {
                element.style.animation = "smooth-appear 1s ease forwards";
            }
        }
        if (scrollPosition < 3657) {
            const element = getElement("feature-div-content-three");
            if (element) {
                element.style.animation = "disappear 1s ease forwards";
            }
        }
        else if (scrollPosition > 3657) {
            const element = getElement("feature-div-content-three");
            if (element) {
                element.style.animation = "smooth-appear 1s ease forwards";
            }
        }
        if (scrollPosition < 4148) {
            const element = getElement("video-three-content");
            if (element) {
                element.style.animation = "disappear 1s ease forwards";
            }
        }
        else if (scrollPosition > 4148) {
            const element = getElement("video-three-content");
            if (element) {
                element.style.animation = "smooth-appear 1s ease forwards";
            }
        }
        if (scrollPosition < 5031) {
            const element = getElement("james-cameron-quote");
            if (element) {
                element.style.animation = "disappear 1s ease forwards";
            }
        }
        else if (scrollPosition > 5031) {
            const element = getElement("james-cameron-quote");
            if (element) {
                element.style.animation = "smooth-appear 1s ease forwards";
            }
        }
    });
});
function windowLocation() {
    window.location.href = "../html/map.html";
}
