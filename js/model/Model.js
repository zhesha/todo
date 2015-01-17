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
            var newValue = !this.get(id, 'checked');
            this.set(id, 'checked', newValue);
        };

        this.get = function (id, field) {
            return store.get(id, field);
        };

        this.set = function (id, field, value) {
            store.set(id, field, value);
            return events[field] && events[field](id, value);
        };

        this.on = function (event, callback) {
            events[event] = callback;
        };

        this.setAll = function (field, value) {
            var model = this;
            store.eachById(function (id) {
                model.set(id, field, value);
            });
        };

        this.del = function (id) {
            store.del(id);
            events['delete'] && events['delete'](id);
        }
    }
})();