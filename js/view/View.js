var View = (function () {
    var listEl;
    return {
        main: function () {
            var main = this.append('Main', document.body);
            main.querySelector('#todo-form').addEventListener('submit', function (e) {
                e.preventDefault();
                Controller.add(this.querySelector('#todo-input').value);
                this.querySelector('#todo-input').value = '';
            });
            listEl = main.querySelector('#todo-list');
        },
        append: function (templateName, el, data) {
            var template = window[templateName+'Template'];
            return el.appendChild(template.get(data));
        },
        addItem: function (item) {
            this.append('Todo', listEl, item);
        }
    }
})();