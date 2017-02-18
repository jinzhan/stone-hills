var $ = require('y:widget/js/lib/jquery.js');

var app = {
    init: function() {
        this.renderPaginator();
    },
    renderPaginator: function() {
        $('.pagelist li').not('.left, .right').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        })
    }
}

module.exports = app;