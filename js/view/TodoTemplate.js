var TodoTemplate = (function () {
    return {
        get: function (data) {
            var el = document.createElement('DIV');
            el.innerHTML =
                '<input type="checkbox" class="todo-checkbox do-check">' +
                '<div class="wrapper bg-primary do-check">' +
                    '<span class="todo-text do-check">' + data.getText() + '</span>' +
                    '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'    +
                '</div>';
            el.className = 'todo-item';
            el.setAttribute('data-id', data.getId());
            return el;
        }
    }
})();