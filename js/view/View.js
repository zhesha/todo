var View = (function () {
    return {
        main: function () {
            var main = this.append('Main', document.body);
            main.querySelector('#todo-form').addEventListener('submit', function () {
                Controller.add();
            });
        },
        append: function (templateName, el, data) {
            var template = window[templateName+'Template'];
            return el.appendChild(template.get(data));
        }
    }
})();