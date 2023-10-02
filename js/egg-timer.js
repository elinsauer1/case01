"use script";

EggTimerView();

function EggTimerView() {

    main.innerHTML = `
    <div class="start-button">START</div>
    <div class="color-container">
        <div class="color-cover"></div>
    </div>
    <div id="egg-container">
        <div class="egg">
            <div class="time-container">
                <p class="time">0:00</p>
            </div>
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

        document.querySelector(".start-button").textContent = "RESET";

        const minutes = 0;
        const seconds = 10;

        countdown(minutes, seconds);

        const total_time = (minutes * 60) + seconds + "s";
        console.log(total_time);

        const color_cover = document.querySelector(".color-cover");
        color_cover.style.transition = 'width ' + total_time + ' linear';;
        color_cover.style.width = '100%';
    });

}

var timeoutHandle;
function countdown(minutes, seconds) {
    function tick() {

        const counter = document.querySelector(".time");
        counter.textContent =
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);

        } else {
            if (minutes >= 1) {
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            } else {
                if (seconds === -1 && minutes === 0) {
                    console.log("hej");
                }
            }
        }
    }
    tick();
}


