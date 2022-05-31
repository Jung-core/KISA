
/*************************************************************************************************
 
 *  Common JS
 
 *************************************************************************************************/

$(function(){
	
	"use strict";


	
/*---------------------------------------------------------------------------------------------------------------------------
 * 	 PC Menu
 *--------------------------------------------------------------------------------------------------------------------------*/

	$('#gnb > ul > li > a').on("mouseenter focusin",function(e){
		$('#gnb > ul > li').removeClass('on');

		$(this).parent('li').addClass('on')
		$('#header').addClass('open');
		
		var hd = $(this).next('.depth02_menu_wrap').stop().innerHeight();
		var num = hd + 101;
		
		$('#header').stop().animate({height: num}, 350);
		e.preventDefault();
	})

	$('.gnb_depth2').find('a').on("focusin",function(e){
		$('#gnb > ul > li').removeClass('on');

		$(this).parents('#gnb > ul > li').addClass('on')
		$('#header').addClass('open');
		
		var hd = $(this).parents('.depth02_menu_wrap').stop().innerHeight();
		var num = hd + 101;
		
		$('#header').stop().animate({height: num}, 350);
	})

	// 모바일에서 작동 안하게
	if (matchMedia("screen and (min-width: 1000px)").matches) {
		$('#header, .all_search_pop').on("mouseleave",function(){
			gnb_close();
		})
	}
	
	$('#gnb').find("a").last().on("focusout",function(){
		gnb_close();
	});

	function gnb_close(){
		$('#header').stop().css({height: 100});		
		$('#gnb > ul > li').removeClass('on');
		$('#header').removeClass('open');
	}	


/*---------------------------------------------------------------------------------------------------------------------------
 * 	 Mobile Menu
 *--------------------------------------------------------------------------------------------------------------------------*/
	$('.mobile_menu').on('click', function(){
		$('.menuMo_bg').fadeIn();
		$('.menuMo').fadeIn();
	});
	
	$('.menuMo .close').on('click', function(){
		$('.menuMo_bg').fadeOut();
		$('.menuMo').fadeOut();
		if($('.mobie_allSearch').hasClass('on')){
			$('.mobie_allSearch').removeClass('on');
			$('.all_search_pop').fadeOut();
		}
	});

	$('#mo_gnb > ul > li.more > .aTag , #mo_gnb > ul > li.more > button').on('click',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next('.mo_gnb_depth2').stop().slideUp();
		} else {
			$(this).addClass('on');
			$(this).next('.mo_gnb_depth2').stop().slideDown();
		}
	})

	$('.mo_gnb_depth2 > li.more > .aTag , .mo_gnb_depth2 > li.more > button').on('click',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next('.mo_gnb_depth3').stop().slideUp();
		} else {
			$(this).addClass('on');
			$(this).next('.mo_gnb_depth3').stop().slideDown();
		}
	})

	
/*---------------------------------------------------------------------------------------------------------------------------
 * 	 Head Search Pop
 *--------------------------------------------------------------------------------------------------------------------------*/
	$('.all_search').on('click', function(){
		$('.all_search_pop').insertAfter('#header .rb');
		if($(this).hasClass('on')){
			$(this).text('전체검색 열기');
			$(this).removeClass('on');
			$('#header').removeClass('sc_b');
			$('.all_search_pop').hide();
		} else {
			$(this).text('전체검색 닫기');
			$(this).addClass('on');
			$('#header').addClass('sc_b');
			$('.all_search_pop').show();
		}
	})


	$('.mobie_allSearch').on('click', function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.all_search_pop').fadeOut();
		} else {
			$(this).addClass('on');
			$('.all_search_pop').fadeIn();
		}
	})



	
/*---------------------------------------------------------------------------------------------------------------------------
 * 	 PC SUB Menu
 *--------------------------------------------------------------------------------------------------------------------------*/
	$('.sub_menu > li').on('mouseenter', function(){
		$('.sub_menu > li').removeClass('on');
		$('.sub_menu > li').not('.active').children('.sub_menu_depth2').stop().slideUp(300);
		$(this).addClass('on');
		$(this).children('.sub_menu_depth2').stop().slideDown(300);
	})

	$('.sub_menu').on('mouseleave', function(){
		$('.sub_menu > li').removeClass('on');
		$('.sub_menu > li').not('.active').children('.sub_menu_depth2').stop().slideUp(300);
	})
	
	$('.sub_menu > li > a').on('focusin', function(){
		$('.sub_menu > li > a').parent().removeClass('on');
		$('.sub_menu > li').not('.active').find('a').next('.sub_menu_depth2').stop().slideUp(300);
		$(this).parent().addClass('on');
		$(this).next('.sub_menu_depth2').stop().slideDown(300);
	})




/*---------------------------------------------------------------------------------------------------------------------------
 *  File Field
 *--------------------------------------------------------------------------------------------------------------------------*/
 
	var fileTarget = $('.file_upload');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload_name').val(filename);
    });
		

/*---------------------------------------------------------------------------------------------------------------------------
* 	 SUB Sns Pop
*--------------------------------------------------------------------------------------------------------------------------*/
	$('.btn_tops.snsShare').on('click',function(){
		$(this).toggleClass('on')
	})

	$('.sns_share_pop .btn_close').on('click',function(){
		$('.btn_tops.snsShare').removeClass('on');
		$('.sns_share_pop').hide('on');
	})



	// 개인정보 아코디언

	$('.accordion_private_list .top').on('click',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next('.cont').stop().slideUp();
		}else{
			$(this).addClass('on');
			$(this).next('.cont').stop().slideDown();
		}
	})

	
});

/*---------------------------------------------------------------------------------------------------------------------------
 * 	 Top Zoom Control Function
 *--------------------------------------------------------------------------------------------------------------------------*/

var nowZoom = 100;

function zoomOut() {   // 화면크기축소
   nowZoom = nowZoom - 10;
   if(nowZoom <= 70) nowZoom = 70;   // 화면크기 최대 축소율 70%
   zooms();
}

function zoomIn() {   // 화면크기확대
   nowZoom = nowZoom + 20;
   if(nowZoom >= 200) nowZoom = 200;   // 화면크기 최대 확대율 200%
   zooms();
}

function zoomReset() {
   nowZoom = 100;   // 원래 화면크기로 되돌아가기
   zooms();
}

function zooms() {
   document.body.style.zoom = nowZoom + "%";
   if(nowZoom == 70) {
      alert("더 이상 축소할 수 없습니다.");   // 화면 축소율이 70% 이하일 경우 경고창
   }
   if(nowZoom == 200) {
      alert("더 이상 확대할 수 없습니다.");   // 화면 확대율이 200% 이상일 경우 경고창
   }
}



/*---------------------------------------------------------------------------------------------------------------------------
 *  Print
 *--------------------------------------------------------------------------------------------------------------------------*/
function printPc() {
	window.print();
}


/*---------------------------------------------------------------------------------------------------------------------------
 * 	 Tab Function
 *--------------------------------------------------------------------------------------------------------------------------*/
function tab(e, num) {
	var num = num || 0;
	var menu = $(e).children();
	var con = $(e + '_con').children();
	var select = $(menu).eq(num);
	var i = num;
  
	select.addClass('active');
	con.hide();
	con.eq(num).show();
  
	menu.click(function () {
	  if (select !== null) {
		select.removeClass("active");
		con.eq(i).hide();
	  }
  
	  select = $(this);
	  i = $(this).index();
  
	  select.addClass('active');
	  con.eq(i).show();
	});
  
}

/**
 * 첨부파일 다운로드
 * */     
function fnPostAttachDownload(menu_seq, post_seq, attach_seq, lang_type) {
	
	$('<form></form>').attr("id","attachForm").attr("method","get").attr("action","/post/fileDownload")
		.append($('<input/>', {type: 'hidden', name: 'menuSeq', value:menu_seq}))
		.append($('<input/>', {type: 'hidden', name: 'postSeq', value:post_seq}))
		.append($('<input/>', {type: 'hidden', name: 'attachSeq', value:attach_seq}))
		.append($('<input/>', {type: 'hidden', name: 'lang_type', value:lang_type}))
		.appendTo('body').submit();
	if ($('#attachForm').length > 0) {
		$('#attachForm').remove();
	}
}

/**
 * 노이미지
 * */     
function noImage(val){
	let _this = val;
	let _target = $(_this).next('.no-image');
	$(_this).hide();
	$(_target).show();
}

