var Collection = (function () {
    var list = [];
    return function (entity) {
        this.add = function (item) {
            if (item instanceof entity) {
                list.push(item.setId(list.length));
                return item;
            } else {
                item = new entity(arguments[0], arguments[1], list.length);
                list.push(item);
                return item;
            }
        };
        this.get = function (id, field) {
            return list[id].get(field);
        };
        this.set = function (id, field, value) {
            list[id].set(field, value);
        }
    }
})();