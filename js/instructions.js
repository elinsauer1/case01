"use script";

function popUp() {

    //ska fixa class och id.n här, de lite kaos blandat.

    main.innerHTML += `
    <div id="popup-container" class="hidden">
        <div id="popup">
            <p id="step">STEP 1</p>
            <p id="step-text">Fill a saucepan with water and bring to a boil</p>
            <div id="popup-footer">
                <div>...</div>
                <div id="arrow">-></div>
            </div>
        </div>
    </div>
    `
    const instructionsButton = document.getElementById("instructions-button");
    const popupContainer = document.getElementById("popup-container");
    const closePopupButton = document.getElementById("close-popup");
    const arrowButton = document.getElementById("arrow");

    instructionsButton.addEventListener("click", () => {
        popupContainer.classList.remove("hidden");
    });

    popupContainer.addEventListener("click", (event) => {
        if (event.target === popupContainer) {
            popupContainer.classList.add("hidden");
        }
    });

    arrowButton.addEventListener("click", () => {
        document.getElementById("step").textContent = "STEP 2";
        document.getElementById("step-text").textContent = "Wait till the water starts boiling. Using a spoon, gently slide in the egg and press START ";

        arrowButton.addEventListener("click", () => {
            document.getElementById("step").textContent = "STEP 3";
            document.getElementById("step-text").textContent = "When the timer is out, put your egg in to an ice water bath for one minute to stop the cooking";

            arrowButton.addEventListener("click", () => {
                EggTimerView();
            })
        })

    })


}