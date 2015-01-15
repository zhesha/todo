var Model = (function () {
    var store;
    return function (entity) {

        init();

        function init () {
            store = new Collection(entity);
        }

        this.add = function (item) {
            var newItem = store.add(item);
            View.addItem(newItem);
        }
    }
})();