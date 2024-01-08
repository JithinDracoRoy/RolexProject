let items = document.querySelectorAll('.slider .item') as NodeListOf<HTMLElement>;
let next = document.getElementById('next') as HTMLElement;
let prev = document.getElementById('prev') as HTMLElement;

let active = 4;

function loadShow() {
    let stt = 0;

    if (items[active]) {
        items[active].style.transform = `none`;
        items[active].style.zIndex = '1';
        items[active].style.filter = 'none';
        items[active].style.opacity = '1';
    }

    for (let i = active + 1; i < items.length; i++) {
        stt++;
        if (items[i]) {
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = `-${stt}`;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? '0' : '0.6';
        }
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        if (items[i]) {
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = `-${stt}`;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? '0' : '0.6';
        }
    }
}

loadShow();

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
};

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
};
