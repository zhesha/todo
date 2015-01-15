var Controller = (function () {
    var model;
    return {
        init: function () {
            model = new Model(Item);
            View.init(model);
        }
    }
})();