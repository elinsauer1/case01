"use strict";
pickYourEgg()

function pickYourEgg() {
    main.innerHTML = `
        <h1>PICK YOUR EGG</h1>

        <section>
            <h3>CONSISTENCY</h3>
            <div class="radio-button-group">
                <div class="input-container">
                    <input id="liquid" type="radio" name="radio-consistency">
                    <div class="radio-button" data-consistency="liquid">
                        <div id="liquid-curve" class="curve-png"></div>
                    </div>
                    <label for="liquid">Liquid</label>
                </div>
                <div class="input-container">
                    <input id="soft" type="radio" name="radio-consistency" checked="checked">
                    <div class="radio-button" data-consistency="soft">
                        <div id="soft-curve" class="curve-png"></div>
                    </div>
                    <label for="soft">Soft</label>
                </div>
                <div class="input-container">
                    <input id="hard" type="radio" name="radio-consistency">
                    <div class="radio-button" data-consistency="hard">
                        <div id="hard-curve" class="curve-png"></div>
                    </div>
                    <label for="hard">Hard</label>
                </div>
            </div>
        </section>
        
        <section>
            <h3>SIZE</h3>
            <div class="radio-button-group">
                <div class="input-container">
                    <input id="small" type="radio" name="radio-size">
                    <div class="radio-button" data-size="small">
                        <div>S</div>
                    </div>
                    <label for="small">Small</label>
                </div>
                <div class="input-container">
                    <input id="medium" type="radio" name="radio-size" checked="checked">
                    <div class="radio-button" data-size="medium">
                        <div>M</div>
                    </div>
                    <label for="medium">Medium</label>
                </div>
                <div class="input-container">
                    <input id="large" type="radio" name="radio-size">
                    <div class="radio-button" data-size="large">
                        <div>L</div>
                    </div>
                    <label for="large">Large</label>
                </div>
            </div>
        </section>

        <section>
            <h3>TEMPERATURE</h3>
            <div id="temperature-switcher">
                <input type="checkbox" name="switch">
                <label for="switch"></label>
            </div>
        </section>
        <footer>
            <div id="continue" class="element">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </footer>
        
    `;

    function applySelector(radioGroup) {
        // Selects all the radio inputs for either consistency or size
        const radioButtons = document.querySelectorAll(`input[name='${radioGroup}']`);

        radioButtons.forEach(conButton => {
            // When a radio button is checked, all not checked will have a different background color to know which has been selected
            conButton.addEventListener("click", (e) => {
                const notChecked = document.querySelectorAll(`.input-container input[name='${radioGroup}']:not(:checked)+.radio-button`);
                notChecked.forEach(button => {
                    button.style.backgroundColor = '#FFF4E3';
                    button.style.border = '1.5px solid rgb(155, 155, 155)';
                    button.querySelector("div").style.opacity = "60%";
                })

                const isChecked = document.querySelector(`.input-container input[name='${radioGroup}']:checked+.radio-button`);

                isChecked.style.backgroundColor = '#FFD699';
                isChecked.style.border = '1.5px solid black';
                isChecked.querySelector("div").style.opacity = "100%";
            })
        });
    }

    applySelector("radio-consistency")
    applySelector("radio-size")

    const continueButton = document.getElementById("continue");
    const temperatureSwitcher = document.querySelector("#temperature-switcher input[name='switch']");
    const consistencyRadios = document.querySelectorAll("input[name='radio-consistency']");
    const sizeRadios = document.querySelectorAll("input[name='radio-size']");

    // Initialize selected values
    let selectedConsistency = "soft";
    let selectedSize = "medium";
    let isTemperatureChecked = false;

    // Add event listeners to consistency and size radios
    consistencyRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            selectedConsistency = radio.getAttribute("id");
        });
    });

    sizeRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            selectedSize = radio.getAttribute("id");
        });
    });

    // Add event listener to temperature checkbox
    temperatureSwitcher.addEventListener("change", () => {
        isTemperatureChecked = temperatureSwitcher.checked;
    });

    continueButton.addEventListener("click", () => {
        if (selectedConsistency && selectedSize) {
            // Find the matching egg time in the array
            const matchingEggTime = eggTimes.find(eggTime => {
                return (
                    eggTime.consistency === selectedConsistency &&
                    eggTime.size === selectedSize &&
                    (isTemperatureChecked ? eggTime.temp === "fridge" : true)
                );
            });

            if (matchingEggTime) {
                const { minutes, seconds } = matchingEggTime;
                // countdown(minutes, seconds);
                console.log(minutes + " " + seconds);
                EggTimerView(minutes, seconds)
            } else {
                console.log("No matching egg time found.");
            }
        } else {
            console.log("Please select consistency and size.");
        }
    })
}