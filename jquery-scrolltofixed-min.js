(function(a){a.ScrollToFixed=function(d,p){var c=this;c.$el=a(d);c.el=d;c.$el.data("ScrollToFixed",c);var k=false;var l=c.$el;var e=0;var g=0;var h=-1;var m=null;function b(){i();h=-1;e=l.offset().top;g=l.offset().left;k=true}function f(){return l.css("position")=="fixed"}function o(){if(!f()){m.css({display:l.css("display"),width:l.outerWidth(true),height:l.outerHeight(true),"float":l.css("float")});l.css({width:l.width(),position:"fixed",top:c.options.marginTop})}}function i(){if(f()){h=-1;m.css("display","none");l.css({width:"",position:"",left:"",top:""})}}function j(q){if(q!=h){l.css("left",g-q);h=q}}function n(){if(!k){b()}var q=a(window).scrollLeft();var r=a(window).scrollTop();if(c.options.limit>0&&r>=c.options.limit-c.options.marginTop){l.css("position","absolute");l.css("top",c.options.limit)}else{if(r>=e-c.options.marginTop){o();j(q)}else{i()}}}c.init=function(){c.options=a.extend({},a.ScrollToFixed.defaultOptions,p);if(navigator.platform=="iPad"||navigator.platform=="iPhone"||navigator.platform=="iPod"){return}c.$el.css("z-index",1000);m=a("<div/>");c.$el.after(m);a(window).bind("resize",function(q){b();n()});a(window).bind("scroll",function(q){n()})};c.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);