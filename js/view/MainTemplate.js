var MainTemplate = (function () {
    return {
        get: function () {
            var el = document.createElement('DIV');
            el.innerHTML =
                '<div class="header">'+
                    '<h1>ToDo List</h1>'+
                '</div>'+
                '<div class="container">'+
                    '<div class="jumbotron">'+
                        '<form id="todo-form" class="form-inline">'+
                            '<input type="checkbox" class="do-check-all">' +
                            '<input id="todo-input" type="text" class="form-control" placeholder="What to do?"/>'+
                            '<input type="submit" value="+" class="form-control"/>'+
                        '</form>'+
                        '<div id="todo-list">'+
                            //'<div class="todo-item bg-warning">ToDo list is empty</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
            el.className = 'el';
            return el;
        }
    }
})();