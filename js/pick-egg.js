"use strict";

//pickYourEgg()
function pickYourEgg() {
    main.innerHTML = `
        <h1>PICK YOUR EGG</h1>

        <h3>CONSISTENCY</h3>
        <section>
            <div class="radio-button-group">
                <div class="input-container">
                    <input id="liquid" type="radio" name="radio-consistency">
                    <div class="radio-button">
                        <div id="liquid-curve" class="curve-png"></div>
                    </div>
                    <label for="liquid">Liquid</label>
                </div>
                <div class="input-container">
                    <input id="soft" type="radio" name="radio-consistency">
                    <div class="radio-button">
                        <div id="soft-curve" class="curve-png"></div>
                    </div>
                    <label for="soft">Soft</label>
                </div>
                <div class="input-container">
                    <input id="hard" type="radio" name="radio-consistency">
                    <div class="radio-button">
                        <div id="hard-curve" class="curve-png"></div>
                    </div>
                    <label for="hard">Hard</label>
                </div>
            </div>
        </section>
        
        <h3>SIZE</h3>
        <section>
            <div class="radio-button-group">
                <div class="input-container">
                    <input id="small" type="radio" name="radio-size">
                    <div class="radio-button">
                        <div>S</div>
                    </div>
                    <label for="small">Small</label>
                </div>
                <div class="input-container">
                    <input id="medium" type="radio" name="radio-size">
                    <div class="radio-button">
                        <div>M</div>
                    </div>
                    <label for="medium">Medium</label>
                </div>
                <div class="input-container">
                    <input id="large" type="radio" name="radio-size">
                    <div class="radio-button">
                        <div>L</div>
                    </div>
                    <label for="large">Large</label>
                </div>
            </div>
        </section>

        <h3>TEMPERATURE</h3>
        <section>
            <div id="temperature-switcher">
                <input type="checkbox" name="switch">
                <label for="switch"></label>
            </div>
        </section>
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
                })

                const isChecked = document.querySelector(`.input-container input[name='${radioGroup}']:checked+.radio-button`);
                isChecked.style.backgroundColor = '#FFD699';
                isChecked.style.border = '1.5px solid black';
            })
        });
    }

    applySelector("radio-consistency")
    applySelector("radio-size")

} 