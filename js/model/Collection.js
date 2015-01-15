var Collection = (function () {
    var list = [];
    return function (entity) {
        this.add = function (item) {
            if (item instanceof entity) {
                list.push(item);
                return item;
            } else {
                item = new entity(arguments[0], arguments[1]);
                list.push(item);
                return item;
            }
        }
    }
})();