"use script";

EggTimerView();

function EggTimerView() {

    main.innerHTML = `
    <div class="start-button">START</div>
    <div class="color-container">
        <div class="color-cover"></div>
    </div>
    <div id="egg">
        <div class="time-container">
            <p class="time">0:00</p>
        </div>
    </div>
    <div id="footer-container">
        <div class="element" class="instructions-button">INSTRUCTIONS</div>
        <div class="element" class="new-egg-button">NEW EGG</div>
    </div>
    `

    const start_button = document.querySelector(".start-button");

    //Skapar transition
    start_button.addEventListener("click", () => {

        const color_cover = document.querySelector(".color-cover");
        color_cover.style.transition = 'width 4s linear';
        color_cover.style.width = '100%';
    });



}

