/**
 * @file 事件中心
 * @author Lone(chenguoliang@baidu.com)
 * @version 1.0
 */

var $ = require('y:widget/js/lib/jquery.js');

function _create( target ){
	var ec = $(target);
	$.extend(target, {
		on: function(name, fn){
			ec.on( _getEvtName(name), fn);
			return target;
		},
		once: function(name, fn){
			ec.one( _getEvtName(name), fn);
			return target;
		},
		fire: function(name, fn){
			var arr = Array.prototype.slice.call(arguments, 1);
			arr.unshift(_getEvtName(name));
			ec.trigger.apply(ec, arr);
			return target;
		},
		off: function(name, fn){
			ec.unbind( _getEvtName(name), fn);
			return target;
		}
	});

	target.un = target.off;
	target.trigger = target.fire;
	return target;
}

function _getEvtName( name ){
	return 'on' + name.replace(/^on/i,'').toLowerCase();
}


module.exports = _create({});
module.exports.create = _create;

if (window.F)
{
	window.F.ec = module.exports;
}
