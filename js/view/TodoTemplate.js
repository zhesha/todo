var TodoTemplate = (function () {
    return {
        get: function (data) {
            var el = document.createElement('DIV');
            el.innerHTML =
                '<div class="todo-item bg-primary">' + data.getText() + '</div>';
            el.className = 'el';
            return el;
        }
    }
})();