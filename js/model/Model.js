var Model = (function () {
    var store, events = {};
    return function (entity) {

        init();

        function init () {
            store = new Collection(entity);
        }

        this.add = function (item) {
            var newItem = store.add(item);
            events['add'] && events['add'](newItem);
        };

        this.toggleChecked = function (id) {
            var newValue = !store.get(id, 'checked');
            store.set(id, 'checked', newValue);
            events['checked'] && events['checked'](id, newValue);
        };

        this.on = function (event, callback) {
            events[event] = callback;
        }

    }
})();