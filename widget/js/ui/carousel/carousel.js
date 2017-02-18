/**
 * @fileOverview 轮播组件
 * 
 * 注意：使用的容器需要自定宽高
 */

var $ = require('y:widget/js/lib/jquery.js'),
    uiBase = require('y:widget/js/ui/base/base.js');


/**
 * @author guoqing
 * @time 20131219
 * @example
        var carousel = new Carousel({
            items: [{
                content: ''
            }],
            direction: 'horizontal',
            controls: boolean,
            activeIndex: 0,
            viewSize: 7,
            duration: 300,
            interval: 0
        });
        carousel.render( target );
 */
var Carousel = uiBase().extend({
    init: function(options){
        this.options = $.extend({
            interval: 3000,
            duration: 1000,
            items: [],
            viewSize: 1,
            direction: 'horizontal',
            serviceItem:''
        }, options);

        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.activeIndex = 0;
        this.lastActiveIndex = options.items.length;
    }

    // 渲染模式，由组件生成所需内容
    ,render: function(target){
        var me = this;

        // 生成 Carousel 元素
        me.$inner = $('<div/>').addClass('carousel-inner');
        $(me.options.items).each(function(index){
            $('<div/>').addClass('item').html( this ).appendTo(me.$inner).attr('index', index);
        });
        me.$items = me.$inner.children();
        me.$active = me.$items.slice(0, me.options.viewSize).addClass('active');
        me.$misc = $('<div/>').addClass('carousel-misc');

        // 引导点击的点点
        if (me.options.indicators) {
            var ol = $('<ol/>').addClass('carousel-indicators').appendTo(me.$misc);
            for (var i = 0; i < me.$items.size(); i++) {
                $('<li/>').attr('data-slide-to', i).appendTo(ol);
            }
            ol.children().slice(0, me.options.viewSize).addClass('active')
            .first().addClass('first');
        }
        me.$indicators = me.$misc.find('.carousel-indicators li');

        // 向前向后
        if (me.options.controls) {
            $('<a/>').addClass('carousel-control carousel-control-left').prependTo(me.$misc);
            $('<a/>').addClass('carousel-control carousel-control-right').appendTo(me.$misc);
        }

        me.target = $(target)
        .append(me.$inner).append(me.$misc).addClass('carousel');

        me.initStyle();
        me.bindEvents();
        me.cycle();
    }

    // 设置模式，HTML 可以手工生成
    ,setup: function(target){
        this.target = $(target);
        if (!this.target.size()) {
            this.target = $('#' + target);
        }

        this.target.addClass('carousel');
        this.$inner = this.target.find('.carousel-inner');
        this.$items = this.$inner.children();
        this.$active = this.target.find('.item.active');
        if (!this.$active.size()) {
            this.$active = this.$items.slice(0, this.options.viewSize).addClass('active');
        }
        this.$misc = this.target.find('.carousel-misc');
        this.$indicators = this.target.find('.carousel-indicators li');
        this.initStyle();
        this.bindEvents();
        this.cycle();
    }

    // 初始化样式
    ,initStyle: function(){
        var me = this,
            lenAttr = me.options.direction == 'horizontal' ? 'width' : 'height',
            distAttr = me.options.direction == 'horizontal' ? 'left' : 'top',
            resetAttr = me.options.direction == 'horizontal' ? 'top' : 'left';

        me.$items
        .css(lenAttr, 100 / me.options.viewSize + '%')
        .css(resetAttr, '0')
        .slice(0, me.options.viewSize).each(function(index, item){
            $(item).css(distAttr, index * 100 / me.options.viewSize + '%');
        });
    }

    ,bindEvents: function(target){
        var me = this;
        me.target.on('mouseenter', $.proxy(me.pause, me))
        .on('mouseleave', $.proxy(me.cycle, me))
        .on('click', '.carousel-control-left', function(e){
            e.preventDefault();
            me.prev();
        })
        .on('click', '.carousel-control-right', function(e){
            e.preventDefault();
            me.next();
        })
        .on('click', '.carousel-indicators li', function(e){
            e.preventDefault();
            me.to($(e.currentTarget).data('slide-to'));
        });
    }

    ,cycle: function(e){
        e && (this.paused = false);

        this.interval && clearInterval(this.interval);

        if (this.options.interval && !this.paused) {
            this.interval = setInterval($.proxy(this.next, this), this.options.interval);
        }
        return this;
    }

    ,pause: function(e){
        e && (this.paused = true);
        this.interval = clearInterval(this.interval);
        return this;
    }

    ,setActiveItems: function(){
        var activeIndex = this.activeIndex;
        this.$items.removeClass('active');
        this.$active = [];

        this.$indicators.removeClass('active');
        for (var i = 0; i < this.options.viewSize; i++) {
            var index = (activeIndex + i) % this.$items.size();
            this.$active.push(this.$items.get(index));
            this.$indicators.eq(index).addClass('active');
        }
        $(this.$active).addClass('active');

        return this.$active;
    }

    ,to: function(pos){
        var me = this;
        var index = me.activeIndex;

        if (pos > (me.$items.length - 1) || pos < 0) return;

        if (me.sliding) return me.once('slid', function(){ me.to(pos) });
        if (index == pos) return me.pause().cycle();
        
        return me.slide(pos > index ? 'next' : 'prev', pos);
    }

    ,prev: function(){
        if (this.sliding) return;
        return this.slide('prev'); 
    }

    ,next: function(){
        if (this.sliding) return;
        return this.slide('next');
    }
    ,getActiveIndex:function(){
        return this.activeIndex;
    }
    ,isSliding:function(){
        return this.sliding;
    }
    ,getLastActiveIndex:function(){
        return this.lastActiveIndex;
    }
    ,slide: function(type, next){
        var me = this;
        var $active = me.setActiveItems();
        var resetPos = type == 'next' ? 'appendTo' : 'prependTo';
        var distAttr = me.options.direction == 'horizontal' ? 'left' : 'top';
        var nextIndex = me.activeIndex + (type == 'next' ? me.options.viewSize : -1);
        nextIndex = (me.$items.size() + nextIndex) % me.$items.size();

        // 将要离开的元素
        var $prev = $($active[type == 'next' ? 0 : me.options.viewSize - 1]);

        // 到来的元素
        var $next = me.$items.eq(nextIndex);
        if(me.options.serviceItem=='experts'){
            var nextIndex = $next.attr('index');
            var itemSize = me.$items.size();
            if((type=='next')&&(nextIndex==0)){
                return false;
            }else if((type=='prev')&&(nextIndex == itemSize-1)){
                return false;
            }
        }
        me.sliding = true;
        me.interval && me.pause();

        if ($next.hasClass('active')) return;
        me.fire('slide', { relatedTarget: $next[0], direction: type, index: nextIndex });
        $next.css(distAttr, type == 'next' ? '100%' : -100/me.options.viewSize + '%').addClass('active');
        me.lastActiveIndex = me.activeIndex;
        // 当前的元素离开
        var animates = [];
        $.each($active, function( i ){
            var step = type == 'next' ? -1 : 1, obj = {};
            obj[distAttr] = (i + step) * 100 / me.options.viewSize + '%';

            animates.push($( this ).animate(obj, me.duration));
        });
        
        var nextObj = {};
        nextObj[distAttr] = type == 'prev' ? 0 : (100 - 100 / me.options.viewSize) + '%';

        animates.push($next.animate(nextObj, me.duration));

        $.when.apply($, animates).done(function(){
            $prev.removeClass('active');
            me.activeIndex = (me.$items.size() + me.activeIndex + (type == 'next' ? 1 : -1)) % me.$items.size();
            
            me.setActiveItems();
            me.sliding = false;

            if (typeof next !== 'undefined' && next != me.activeIndex) {
                me.slide(type, next);
            } else {
                setTimeout(function(){ me.fire('slid') }, 0);
            }
        });

        !me.paused && me.cycle();
        return me;
    }
});

module.exports = Carousel;
