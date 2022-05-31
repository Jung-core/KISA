
/*************************************************************************************************
 
 *  Common JS
 
 *************************************************************************************************/

$(function(){	
	"use strict";
	
/*---------------------------------------------------------------------------------------------------------------------------
 * 	 PC Menu
 *--------------------------------------------------------------------------------------------------------------------------*/
	$('.gnbwrap>nav>ul>li>a').on('mouseenter focusin',function(){
		$('.gnbwrap>nav>ul>li').removeClass('on');
		$('#header').addClass('open');	
		var $target = $(this).parent();
		$target.addClass('on');	
		var th = $target.find('.inner').innerHeight() +0;
		// alert(th);
		// var num = th + 101;
	  $('.gnb-bg').stop().animate({height:th + 'px'}, 10);
		if($target.hasClass('nodepth') === true){
			$('.gnb-bg').stop().animate({height:'0px'}, 10);
		}
		
	})

	$('#header').on('mouseleave',function(){
		$('.gnbwrap>nav>ul>li').removeClass('on');
		$('#header').removeClass('open');	
		$('.gnb-bg').stop().animate({height:'0px'},10)
	})
	
	
	// $('.gnbwrap>nav>ul>li>a').on("mouseenter focusin",function(e){
	// 	$('.gnbwrap>nav>ul>li').removeClass('on');

	// 	$(this).parent('li').addClass('on')
	// 	$('#header').addClass('open');
		
	// 	var hd = $(this).next('.depth02_menu_wrap').stop().innerHeight();
	// 	var num = hd + 101;
		
	// 	$('#header').stop().animate({height: num}, 350);
	// 	e.preventDefault();
	// })

	// $('.gnb_depth2').find('a').on("focusin",function(e){
	// 	$('#gnb > ul > li').removeClass('on');

	// 	$(this).parents('#gnb > ul > li').addClass('on')
	// 	$('#header').addClass('open');
		
	// 	var hd = $(this).parents('.depth02_menu_wrap').stop().innerHeight();
	// 	var num = hd + 101;
		
	// 	$('#header').stop().animate({height: num}, 350);
	// })

	// // 모바일에서 작동 안하게
	// if (matchMedia("screen and (min-width: 1000px)").matches) {
	// 	$('#header, .all_search_pop').on("mouseleave",function(){
	// 		gnb_close();
	// 	})
	// }
	
	// $('.gnbwrap').find("a").last().on("focusout",function(){
	// 	gnb_close();
	// });

	// function gnb_close(){
	// 	$('#header').stop().css({height: 100});
		
	// 	$('.gnbwrap>nav>ul>li').removeClass('on');
	// 	$('#header').removeClass('open');
	// }	
	if($(window).width() < 1000){
		$('#fullpage').removeAttr('id');
		$.fn.fullpage.setAllowScrolling(false);	
		$.fn.fullpage.destroy('all');//fullpage 삭제	
	}
	// if (matchMedia("screen and (min-width: 1000px)").matches) {
	// 	$('#fullpage').removeAttr('id');
	// }

	/****mobile menu*****/
	$('.m-gnb-btn').on('click',function(){
		if($(this).hasClass('gnb-open')){
			$('body').removeClass('layer-open');
      // $('.dim').remove(); 
      $(this).removeClass('gnb-open');
      $('.gnbwrap nav').removeClass('gnb-open');
			$('.dim-bg').removeClass('on');
			$(".dim-bg").off('click');
		}
		else{
			$('body').addClass('layer-open');
      // $(this).before('<a class="dim"></a>');
      $(this).addClass('gnb-open');
      $('.gnbwrap nav').addClass('gnb-open');
			$('.dim-bg').addClass('on');
			$(".dim-bg").on('click', function(){
				$('.m-gnb-btn').trigger('click');
			});
		}
	})

	$('.gnbwrap nav>ul> li.more > .aTag , .gnbwrap nav>ul> li.more > a').on('click',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next('.depth02_menu_wrap').stop().slideUp();
			$('#header').removeClass('open')		
		} else {
			$(this).addClass('on');
			$(this).next('.depth02_menu_wrap').stop().slideDown();
			$('#header').removeClass('open')		
		}
	})

	$('.depth02_menu_wrap .inner .gnb_depth2 > li > .aTag , .depth02_menu_wrap .inner .gnb_depth2 > li > a').on('click',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next('.gnb_depth3').stop().slideUp();
			$('#header').removeClass('open')	
		} else {
			$(this).addClass('on');
			$(this).next('.gnb_depth3').stop().slideDown();
			$('#header').removeClass('open')		
		}
	})
	
});

