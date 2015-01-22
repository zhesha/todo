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
            var main = this.append('Main', document.body),
                checkAll;
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
                if (el.classList.contains('do-delete')) {
                    model.del(getParentByClass(el, 'todo-item').getAttribute('data-id'));
                }
                if (el.classList.contains('do-edit')) {
                    view.prepareForEdit(getParentByClass(el, 'todo-item').getAttribute('data-id'));
                }
            });
            checkAll = main.querySelector('.do-check-all');
            checkAll.addEventListener('change', function () {
                model.setAll('checked', this.checked);
            });

            model.on('add', function (newItem) {
                view.addItem(newItem);
                checkAll.checked = false;
            });
            model.on('checked', function (id, newValue) {
                view.setChecked(id, newValue);
                if (!newValue) {
                    checkAll.checked = false
                }
            });
            model.on('delete', function (id) {view.remove(id);});
        },
        append: function (templateName, el, data) {
            var template = window[templateName+'Template'];
            return el.appendChild(template.get(data));
        },
        addItem: function (item) {
            this.append('Todo', listEl, item);
        },
        remove: function (id) {
            var el = listEl.querySelector('.todo-item[data-id="' + id + '"]');
            el.remove();
        },
        setChecked: function (id, value) {
            var el = listEl.querySelector('.todo-item[data-id="' + id + '"]'),
                wrapper = el.querySelector('.wrapper');
            if (value) {
                wrapper.classList.remove('bg-primary');
                wrapper.classList.add('bg-success');
                el.querySelector('input[type="checkbox"]').checked = true;
            } else {
                wrapper.classList.remove('bg-success');
                wrapper.classList.add('bg-primary');
                el.querySelector('input[type="checkbox"]').checked = false;
            }
        },
        prepareForEdit: function (id) {
            var el = listEl.querySelector('.todo-item[data-id="' + id + '"]'),
                text = el.querySelector('.todo-text'),
                input = document.createElement('INPUT');
            input.className = 'edit';
            input.value = model.get(id, 'text');
            input.addEventListener('blur', function () {
                input.remove();
                text.innerText = model.get(id, 'text');
                text.style.display = 'inline';
            });
            input.addEventListener('keydown', function (e) {
                if (e.keyCode == 13) {
                    model.set(id, 'text', input.value);
                    input.blur();
                }
            });
            el.querySelector('.wrapper').appendChild(input);
            text.style.display = 'none';
            input.focus();
        }
    }
})();