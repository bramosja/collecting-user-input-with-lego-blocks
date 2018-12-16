const eventListeners = {
    handleFormSubmission () {
    //    get input values from form
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const color = document.querySelector("#lego__color").value;
        const shape = document.querySelector("#lego__shape").value;

    // Create and object to represent a lego
        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoColor: color,
            legoShape: shape
        };

    // Post to API and pass legoToSave
        data.postLego(legoObject);
    }
};