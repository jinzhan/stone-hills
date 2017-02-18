var $ = require('y:widget/js/lib/jquery.js');

var timer = null;
var $dropDownList = $('#user-drop-down'),
    $dropDownMenu = $('#user-drop-down-btn');

$dropDownMenu.hover(
    function(){
        if(timer){
            clearTimeout(timer);
        }
        $dropDownList.show();
    },
    function(){
        timer = setTimeout(function(){
            $dropDownList.hide();
        },300)
    }
);
