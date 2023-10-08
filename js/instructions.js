"use script";

function popUp(min, sec) {

    //ska fixa class och id.n här, de lite kaos blandat.
    const popupContainer = document.createElement("div");
    popupContainer.setAttribute("id", "popup-container");
    popupContainer.classList.add("hidden");
    popupContainer.innerHTML = `
        <div id="popup">
            <div id="popup-header">
                <p id="step">STEP 1</p>
                <div id="close-popup">
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>
            <p id="step-text">Fill a saucepan with water and bring to a boil
            <br><span>filler</span>
            </p>
            <div id="popup-footer">
                <div id="dots">
                    <div id="dot1" class="dot"></div>
                    <div id="dot2" class="dot"></div>
                    <div id="dot3" class="dot"></div>
                </div>
                <div>
                    <ion-icon id="arrow" name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
        </div>
    `;


    main.append(popupContainer);

    const instructionsButton = document.getElementById("instructions-button");
    const arrowButton = document.getElementById("arrow");
    const closePopUp = document.getElementById("close-popup");

    instructionsButton.addEventListener("click", () => {
        popupContainer.classList.remove("hidden");
    });

    popupContainer.addEventListener("click", (event) => {
        if (event.target === popupContainer) {
            popupContainer.classList.add("hidden");
        }
    });

    closePopUp.addEventListener("click", () => {
        popupContainer.remove()
    });

    arrowButton.addEventListener("click", () => {
        document.getElementById("step").textContent = "STEP 2";
        document.getElementById("step-text").textContent = "Wait till the water starts boiling. Using a spoon, gently slide in the egg and press START ";

        document.getElementById("dot1").style.backgroundColor = "rgba(255, 244, 227, 1)";
        document.getElementById("dot2").style.backgroundColor = "rgba(255, 201, 120, 1)";
        document.getElementById("dot3").style.backgroundColor = "rgba(255, 244, 227, 1)";

        arrowButton.addEventListener("click", () => {
            document.getElementById("step").textContent = "STEP 3";
            document.getElementById("step-text").textContent = "When the timer is out, put your egg in to an ice water bath for one minute to stop the cooking";

            document.getElementById("dot1").style.backgroundColor = "rgba(255, 244, 227, 1)";
            document.getElementById("dot2").style.backgroundColor = "rgba(255, 244, 227, 1)";
            document.getElementById("dot3").style.backgroundColor = "rgba(255, 201, 120, 1)";

            arrowButton.style.opacity = 0;
        })

    })


}