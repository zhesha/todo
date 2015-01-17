var View = (function () {
    var model, listEl;

    function getParentByClass (el, className) {
        if (el.classList.contains(className)) {
            return el;
        } else {
            return el.classList.contains('el') ? null : getParentByClass(el.parentNode, className);
        }
    }

    return {
        init: function (bind) {
            var view = this;
            var main = this.append('Main', document.body);
            model = bind;
            main.querySelector('#todo-form').addEventListener('submit', function (e) {
                e.preventDefault();
                model.add(this.querySelector('#todo-input').value);
                this.querySelector('#todo-input').value = '';
            });
            listEl = main.querySelector('#todo-list');
            listEl.addEventListener('click', function (e) {
                var el = e.target;
                if (el.classList.contains('do-check')) {
                    model.toggleChecked(getParentByClass(el, 'todo-item').getAttribute('data-id'));
                }
            });

            model.on('add', function (newItem) {view.addItem(newItem);});
            model.on('checked', function (id, newValue) {view.setChecked(id, newValue);});
        },
        append: function (templateName, el, data) {
            var template = window[templateName+'Template'];
            return el.appendChild(template.get(data));
        },
        addItem: function (item) {
            this.append('Todo', listEl, item);
        },
        setChecked: function (id, value) {
            var el = listEl.querySelector('.todo-item[data-id="' + id + '"]');
            if (value) {
                el.classList.add('checked');
                el.querySelector('input[type="checkbox"]').checked = true;
            } else {
                el.classList.remove('checked');
                el.querySelector('input[type="checkbox"]').checked = false;
            }
        }
    }
})();