var View = (function () {
    return {
        append: function (templateName, el, data) {
            var template = window[templateName+'Template'];
            el.appendChild(template.get(data));
        }
    }
})();