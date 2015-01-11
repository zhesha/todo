var Model = (function () {
    return {
        add: function (item) {
            var newItem = Collection.add(item);
            View.addItem(newItem);
        }
    }
})();