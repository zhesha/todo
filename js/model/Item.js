var Item = (function () {
    return function (text, checked, id) {
        text = text || '';
        checked = checked || false;
        this.get = function (field) {
            return this['get' + field[0].toUpperCase() + field.slice(1)]();
        };
        this.set = function (field, value) {
            return this['set' + field[0].toUpperCase() + field.slice(1)](value);
        };
        this.getChecked = function () {
            return checked;
        };
        this.setChecked = function (value) {
            checked = value;
        };
        this.getText = function () {
            return text;
        };
        this.setText = function (value) {
            text = value;
        };
        this.getId = function () {
            return id;
        };
        this.setId = function (newId) {
            id = newId;
        }
    }
})();