const domBuilder = {
    appendInputForm () {
        let inputForm = `<article>
        <fieldset>
        <label for="lego__creator">Creator:</label>
        <input id="lego__creator" name="lego__creator" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__name">Name:</label>
        <input id="lego__name" name="lego__name" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__shape">Shape:</label>
        <input id="lego__shape" name="lego__shape" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego__color">Color:</label>
        <select id="lego__color">
        </select>
        </fieldset>
        <button class="btn lego__save">Save Lego Creation</button>
        </article>`;
        let displayContainer = document.querySelector("#display-container");
        displayContainer.innerHTML = inputForm;
    },
    appendColorsInput () {
        data.getColor().then(arrayItems => {
            arrayItems.forEach(colorInfo =>{
                let colorName = colorInfo.color;
                let colorValue = colorInfo.value;
                console.log(dataConverter.colorReader(colorName, colorValue));
                let colorHTML = dataConverter.colorReader(colorName, colorValue);
                document.querySelector("#lego__color").innerHTML += colorHTML;
            });
        });
    }
};