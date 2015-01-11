var TodoTemplate = (function () {
    return {
        get: function (data) {
            var el = document.createElement('DIV');
            el.innerHTML =
                '<input type="checkbox" class="todo-checkbox">' +
                '<div class="bg-primary">' +
                    '<span class="todo-text">' + data.getText() + '</span>' +
                    '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'    +
                '</div>';
            el.className = 'todo-item';
            return el;
        }
    }
})();