// turn the information pulled from the database json file into elements that are easily read by html
let dataConverter = {
    colorReader(colorNameData, colorValueData) {
        return `<option value="${colorValueData}">${colorNameData}</option>`;
    }
};