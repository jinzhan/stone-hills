/**
 * @desc 知道通用dialog组件
 * @author Lone(chenguoliang@baidu.com)
 * @version 1.0
 * @date 2013/8/27
 * Depends:
 *   jquery.ui.dialog.js
 */

var $ = require('y:widget/js/lib/jquery.js'),
	ec = require('y:widget/js/ui/event/event.js'),
	uiBase = require('y:widget/js/ui/base/base.js');
var browser = require('y:widget/js/lib/browser.js');
require('y:widget/js/lib/jquery.ui.dialog.js');

var _instances = {};

var Dialog = uiBase().extend({
	init:  function(options){
		var me = this;
		options = $.extend({
			modal:true,
			closeText:'关闭',
			resizable: false,
			draggable: true,
			dialogClass: options.className,
			btnAlign: 'center'
		}, options||{});

		//ie6下阴影高度调整
		if (browser.ie && browser.ie<7)
		{
			options.open = function(){
				$('.ui-widget-overlay').height($(document).height());
			};
		}

		if (!options.target)
		{
			me.instance = $('<div>', {id: 'ik-dlg-'+me.guid}).html(options.content).dialog(options);
		}else{
			me.instance = $(options.target).dialog(options);
		}
		if ( $.isArray( options[ 'buttons' ] ) ) {
			me.customBttons(options[ 'buttons' ]);
		}
		me.instance.next().css('text-align', options[ 'btnAlign' ]);

		if (options.autoDispose)
		{
			me.instance.on('dialogclose', function(){
				$(this).dialog('destroy').remove();
				delete _instances[me.guid];
				me.isDestroy = true;
			});
		}

		_instances[me.guid] = me.instance;

		$(window).on('resize', function(){
			me && me.center();
		});


	},
	customBttons: function ( buttons ) {
		var me 	   = this,
			btnBox = this.instance.next().children('div'),
			btnArr = btnBox.find( 'button' );
		$(buttons).each(function( index ){
			var bThas = this;
			if ( !this[ 'className' ] && index < 2) {
				this[ 'className' ] = ['btn-32-green dialog-btn dialog-btn-1', 'btn-32-white dialog-btn dialog-btn-2'][ index ];
			}
			$('<a href="#" />').text( this.text || '' )
				.appendTo( btnBox ).addClass( this[ 'className' ] || '' )
				.click(function(e){
					e.preventDefault();
					bThas.click.apply(me.instance, arguments);
				});
		});
		btnArr.remove();
	},
	open: function(){
		!this.isDestroy && this.instance.dialog('open');
	},
	close: function(){
		!this.isDestroy && this.instance.dialog('close');
	},
	center: function(){
		!this.isDestroy && this.instance.dialog('option', 'position', {my: 'center', at: 'center', of: window});
	},
	getDialogContainer : function(){
		return this.isDestroy ? null : this.instance.dialog('widget');
	},
	/*
	 * @param {Object} size
	 * @config {Number} size.width
	 * @config {Number} size.height
	 */
	setSize: function( size ){
		!this.isDestroy && this.instance.dialog('option', size);
	},
	setTitle:function(title){
		!this.isDestroy && title && this.instance.dialog('option','title',title);
	}
});

ec.on('dialog.close', function(){
	Dialog.close();
});


module.exports = $.extend(Dialog, {
	'alert': function(content, options){
		options = $.extend({
			title: '派提示',
			content: content,
            dialogClass: 'pi-dialog-alert',
			buttons: [{
				'text': '确定',
				'click': function() {
					$.isFunction(options.onaccept) && options.onaccept.apply(this,arguments);
					$( this ).dialog( "close" );
				}
			}]
		}, options||{});
		return new Dialog(options);
	},
	'confirm': function(content, options){
        var options = $.extend({
            dialogClass: 'pi-dialog-confirm',
            rightIsRight: 1
        }, options || {});
		var buttons = [{
			'text': '确定',
			'click': function() {
				$.isFunction(options.onaccept) && options.onaccept.apply(this,arguments);
			}
		}, {
			'text': '取消',
			'click': function() {
				$.isFunction(options.oncancel) && options.oncancel.apply(this,arguments);
				$( this ).dialog( "close" );
			}
		}];
		if(options.rightIsRight) {
			buttons = buttons.reverse();
		}
		options.buttons = options.buttons || buttons;
		return Dialog.alert(content, options);
	},
	'iframe': function(options){
		var content = '<iframe frameborder="no" class="ui-dialog-content-iframe" src="' + options.content + '"></iframe>';
		options.content = content;
		if (!options.buttons)
		{
			options.buttons = [];
		}
		options.dialogClass = 'dialog-iframe';
		return Dialog.alert(content, options);
	},
	'close': function(){
		$.each(_instances, function(guid, _instance){
			try{
				_instance && _instance.dialog('close');
			}catch(e){}
		});
	}
});
