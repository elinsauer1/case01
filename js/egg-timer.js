"use script";

function EggTimerView(minutes, seconds) {

    main.innerHTML = `
        <div class="start-button">START</div>
        <div class="color-container">
            <div class="color-cover"></div>
        </div>
        <div id="egg-container">
            <div class="egg">
                <div class="time-container">
                    <p class="time">${minutes}:${seconds}</p>
                </div>
            </div>
            <div id="egg-shadow"></div>
        </div>
        <div id="footer-container">
        <div class="element" id="new-egg-button">
            <ion-icon name="return-up-back-outline"></ion-icon>
        </div>
            <div class="element" id="instructions-button">
                <ion-icon name="information-circle-outline"></ion-icon></ion-icon>
            </div>
        </div>
    `;

    let min = minutes || 0;
    let sec = seconds || 0;


    document.querySelector("#new-egg-button").addEventListener("click", () => {
        pickYourEgg();
    });

    document.querySelector("#instructions-button").addEventListener("click", () => {
        popUp(min, sec);
    });

    const start_button = document.querySelector(".start-button");

    start_button.addEventListener("click", () => {

        if (start_button.textContent === "START") {
            start_button.textContent = "RESET";

            //Skapar transition
            const total_time = (min * 60) + sec + "s";

            const color_cover = document.querySelector(".color-cover");
            color_cover.style.transition = 'width ' + total_time + ' linear';;
            color_cover.style.width = '100%';

            let timeoutHandle;

            timeoutHandle = countdown(min, sec);

        } else {
            console.log("reset");
            EggTimerView(min, sec);
            clearTimeout(timeoutHandle);
        }
    });
}

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
                    document.querySelector(".time").textContent = "DONE";
                    alarm.play();

                    setTimeout(() => {
                        alarm.pause();
                    }, 2500)
                }
            }
        }
    }
    tick();
    return timeoutHandle;
}


