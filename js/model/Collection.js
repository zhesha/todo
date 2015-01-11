var Collection = (function () {
    var list = [];
    return {
        add: function (item) {
            if (item instanceof Item) {
                list.push(item);
                return item;
            } else {
                item = new Item(arguments[0], arguments[1]);
                list.push(item);
                return item;
            }
        }
    }
})();