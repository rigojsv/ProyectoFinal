document.addEventListener("DOMContentLoaded", () => {
    caruselInit();
});

function caruselInit() {
    const caruselContainer = document.querySelector(".carusel");
    const caruselTrack = document.querySelector(".caruseltrack");
    const caruselItems = document.querySelectorAll(".caruselItem");
    const tickThreshold = 3000;
    let direction = 1;
    let currentItem = 0;
    let iterationId;

    // Crear los puntos de navegación
    createIndexNavigator();
    // Iniciar el temporizador para el carrusel
    timer();

    function createIndexNavigator() {
        const navigatorContainer = document.createElement("section");
        navigatorContainer.classList.add('navigator');
        caruselItems.forEach((_, i) => {
            const navigatorDot = document.createElement("div");
            navigatorDot.classList.add('dot');
            navigatorDot.setAttribute('data-navindex', i);
            if (i === 0) navigatorDot.classList.add('active');
            navigatorDot.addEventListener("click", onDotNavigateClick);
            navigatorContainer.appendChild(navigatorDot);
        });
        caruselContainer.appendChild(navigatorContainer);
    }

    function onDotNavigateClick(e) {
        const currentDotIndex = Number(e.target.dataset.navindex);
        clearTimeout(iterationId);
        moveToItem(currentDotIndex);
        timer();
    }

    function timer() {
        iterationId = setTimeout(() => {
            let nextItem = currentItem + direction;
            if (nextItem < 0) {
                nextItem = 1;
                direction = 1;
            }
            if (nextItem >= caruselItems.length) {
                nextItem = caruselItems.length - 2;
                direction = -1;
            }
            moveToItem(nextItem);
            timer();
        }, tickThreshold);
    }

    function moveToItem(itemIndex) {
        caruselTrack.style.transform = `translateX(-${100 * itemIndex}vw)`;
        updateNavigator(itemIndex);
        currentItem = itemIndex;
    }

    function updateNavigator(itemIndex) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[itemIndex].classList.add('active');
    }
}
