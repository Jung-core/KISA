
/***fulllpage****/

$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionSelector: 'section',
		anchors: ['section1', 'section2', 'section3','footer'],
		menu: '#menu',
		responsiveWidth:1000,
		responsiveHeight:300,
		recordHistory: true,
		animateAnchor: false,
		afterLoad: function (anchorLink, index) {
			if (index) {
				$('#menu').show();
				$('#menu a').removeClass("color");
				$('#header').removeClass('white');
				$('.cont_box').removeClass('on');	
			}
			if(index==2){
				$('.cont_box').addClass('on');			
			}
			if(index==3){
				$('#header').addClass('white');
				$('#menu a').addClass("color");
			}
			if(index==4){
				$('#header').addClass('white');
				$('#menu').hide();
			}
		},
		// afterResponsive: function(isResponsive){
		// 	$('#header').css('position','absolute');
		// }
	});
	// //methods
	// $.fn.fullpage.setAllowScrolling(false);

	// 메인 - 타이핑
	var typingBool = false;
	var typingIdx=0;
	var typingTxt = $(".target").attr('data-text'); // 타이핑될 텍스트를 가져온다
	$(".typing").html(" "); // 내용 초기화

	typingTxt=typingTxt.split(""); // 한글자씩 자른다.
	if(typingBool==false){ // 타이핑이 진행되지 않았다면
		typingBool=true;
		var tyInt = setInterval(typing,200); // 반복동작
	}

	function typing(){
		if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
				$(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
				typingIdx++;
		} else{
				clearInterval(tyInt); //끝나면 반복종료
		}
	}

	//메인 슬라이드
	var mainSwiper = new Swiper(".main_swiper", {
		loop: false,
		speed: 1500,
		autoplay: {
				delay: 5000,
		},
		effect : 'fade',
		fadeEffect: {
				crossFade: true
		},
		navigation: {
				nextEl: '.main_swiper .next',
				prevEl: '.main_swiper .prev',
		},
		pagination: {
				el: '.main_swiper .dot',
				clickable: 'true',
				type: 'bullets',
		},
		on: {
				slideChange: function () {
						var dotN = $('.main_swiper .dot .swiper-pagination-bullet-active').index();
						var dotN2 = dotN + 1;
						var dotN3 = 0;

						(dotN2 < 10 ) ?  dotN3 = "0" + dotN2 : dotN3 = dotN2 ;

						$('.paging .cuN').html(dotN3);

				},
				slideChangeTransitionStart : function(){

				}
		},
	});

	// init
	var dotTotal = $('.main_swiper .dot .swiper-pagination-bullet').length;
	var num1 = 0;

	(dotTotal < 10) ? num1 = "0" + dotTotal : num1 = dotTotal ;

	$('.paging .toN').text(num1);
	$('.paging .cuN').text('01');


	$('.main_swiper .pause').on('click',function(){
		if($(this).hasClass('on')){
				var mainSwiperInnerHtml = '<span class="blind">슬라이드 멈춤</span>';
				$(this).removeClass('on');
				$(this).attr('title','슬라이드 멈춤');
				$(this).html(mainSwiperInnerHtml);
				mainSwiper.autoplay.start();
		} else {
				var mainSwiperInnerHtml = '<span class="blind">슬라이드 재생</span>';
				$(this).addClass('on');
				$(this).attr('title','슬라이드 재생');
				$(this).html(mainSwiperInnerHtml);
				mainSwiper.autoplay.stop();
		}
	})

	//business 슬라이드
	var businessSwiper = new Swiper(".sli_cyber", {
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.ach_btn.next',
			prevEl: '.ach_btn.prev',
		}
	});

	$('.ach_btn.play').on('click',function(){
		if($(this).hasClass('on')){
			var achBtnHtml = '<span class="blind">재생</span>';
			$(this).removeClass('on');
			$(this).attr('title','재생');
			$(this).html(achBtnHtml);
			businessSwiper.autoplay.stop();
		} else {
			var achBtnHtml = '<span class="blind">멈춤</span>';
			$(this).addClass('on');
			$(this).attr('title','멈춤');
			$(this).html(achBtnHtml);
			businessSwiper.autoplay.start();
		}
	})
	//service 슬라이드
	var serviceSwiper = new Swiper(".service", {
		slidesPerView: 6,
		spaceBetween: 20,
		loop: false,
		speed: 1500,
		slidesPerGroup: 6,
		loopFillGroupWithBlank : false,
		autoplay: {
				delay: 3000,
		},
		navigation: {
				nextEl: '.tsBed_btn.next',
				prevEl: '.tsBed_btn.prev',
		},
		breakpoints : {
				1000 : {
						slidesPerView: 6,
						slidesPerGroup: 6,
				},
				700 : {
						slidesPerView: 2,
						slidesPerGroup: 2,
				},
				220 : {
						slidesPerView: 2,
						slidesPerGroup: 2,
				}
		}
	});
	$('.service').on('focusin', function(){
		serviceSwiper.autoplay.stop();
	});
	$('.service').on('focusout', function(){
		serviceSwiper.autoplay.start();
	});
	$('.service .swiper-slide').each(function(i,v){
		var swiperSlideIndex = i;
		$(this).on('focusin', function(){
				var testSlideWidth = $('.main_business .service').width();
				if(testSlideWidth >= 700){
						var targetNum = parseInt((swiperSlideIndex + 3) / 6) + 1;
						testBedSwiper.slideTo(targetNum, 1500, false);
				}
		})
	});	

	//business image바꾸기
	$('.main_business article').on('mouseenter', function(){
		mainBusiness($(this));
	})

	$('.main_business article a:first-of-type').on('focusin', function(){
		mainBusinessFocus($(this));
	})

	function mainBusiness(id){
		$('.main_business article').removeClass('on')
		id.addClass('on');

		var number = id.attr('data-num');
		$('.main_business').attr('data-bg',number);
	}

	function mainBusinessFocus(id){
		$('.main_business article').removeClass('on')
		id.parents('article').addClass('on');

		var number = id.parents('article').attr('data-num');
		$('.main_business').attr('data-bg',number);
	}
	
	//알림마당
	 var num = $('.news_notice_tab > li').length;
	 var intervalTimer;
	 function focusOutFunc(e) {
			 //if (!intervalTimer) {
			 intervalTimer = setTimeout(startIntervalFunc, 1000);
			 //}
	 }
	 function focusInFunc(e) {
			 //if (timer) {
			 clearTimeout(intervalTimer);
			 intervalTimer = null;
			 clearInterval(intervalFunc);
			 //}
	 }
	 function intervalS(){
			 var num2 = $('.news_notice_tab > li > a.active').parent().index();
			 num3 = num2 + 1;
			 if(num3 === num) {num3 = 0};
			 $('.news_notice_tab > li').eq(num3).find('a.sbj').trigger('click');
	 }
	 var intervalFunc = setInterval(function(){intervalS()},5000);
	 var startIntervalFunc = function() {
			 intervalFunc = setInterval(function(){intervalS()},5000);
			 intervalTimer = null;
	 };
	 $('.news_notice_tab').on('focusout',function(){focusOutFunc()});
	 $('.news_notice_tab').on('focusin',function(){focusInFunc()});
	 $('.news_notice_tab > li > a.sbj').on('click focusin',function(){
			 timer = null;
			 $('.news_notice_tab > li > a').removeClass('active');
			 $(this).addClass('active');
	 });

	//photo_news 슬라이드
	var photoSwiper = new Swiper(".photo_news", {
		slidesPerView: 2,
		loop: false,
		loopFillGroupWithBlank: true,
		speed: 1000,
		autoplay: {
				delay: 6000,
		},
		navigation: {
				nextEl: '.phoNe_btn.next',
				prevEl: '.phoNe_btn.prev',
		}
	});
	$('.phoNe_btn.pause').on('click',function(){
		if($(this).hasClass('on')){
				var phoNeBtnHtml = '<span class="blind">멈춤</span>';
				$(this).removeClass('on');
				$(this).attr('title','멈춤');
				$(this).html(phoNeBtnHtml);
				photoSwiper.autoplay.start();
		} else {
				var phoNeBtnHtml = '<span class="blind">재생</span>';
				$(this).addClass('on');
				$(this).attr('title','재생');
				$(this).html(phoNeBtnHtml);
				photoSwiper.autoplay.stop();
		}
	})
	$('.swiperPhotoNews').on('focusin', function(){
		photoSwiper.autoplay.stop();
	});
	$('.swiperPhotoNews').on('focusout', function(){
		photoSwiper.autoplay.start();
	});
	var targetPhoto = '.swiperPhotoNews';
	function focusPhotoSlideTo(){
		var targetEl = $(targetPhoto);
		targetEl.find('.swiper-slide').each(function(i,v){
				if( i != 0){
						var eqIndex = i - 1;
						$(this).on('focusin',function(){
								var targetNum = parseInt(eqIndex / 2) + 1;
								photoSwiper.slideTo(targetNum, 1000, false);
						});
				}
		});
	}
	focusPhotoSlideTo();

	//alim 슬라이드
	if(true){
		// 알림판 슬라이드
		var bannerSwiper = new Swiper(".alimslide", {
				loop: true,
				speed: 1000,
				autoplay: {
						delay: 6000,
				},
				pagination: {
						el: '.alimslide .dots',
						clickable: 'true',
						type: 'bullets',
				},
				navigation: {
						nextEl: '.maBa_btn.next',
						prevEl: '.maBa_btn.prev',
				}
		});
		$('.maBa_btn.pause').on('click',function(){
				if($(this).hasClass('on')){
						var maBaBtnHtml = '<span class="blind">멈춤</span>';
						$(this).removeClass('on');
						$(this).attr('title','멈춤');
						$(this).html(maBaBtnHtml);
						bannerSwiper.autoplay.start();
				} else {
						var maBaBtnHtml = '<span class="blind">재생</span>';
						$(this).addClass('on');
						$(this).attr('title','재생');
						$(this).html(maBaBtnHtml);
						bannerSwiper.autoplay.stop();
				}
		});
		$('.alimslide').on('focusin', function(){
				bannerSwiper.autoplay.stop();
		});
		$('.alimslide').on('focusout', function(){
				bannerSwiper.autoplay.start();
		});
		
	}
	
	//모바일 배너 아코디언
	$('.sec01_mobile_menu .sbj').on('click',function(){
		if($(this).hasClass('on')){
				initBanner();
				$(this).removeClass('on');
				$(this).parent().next('.bott').slideUp();
		} else{
				initBanner();
				$(this).addClass('on');
				$(this).parent().next('.bott').slideDown();
		}
	})

	function initBanner(){
			$('.sec01_mobile_menu .sbj').removeClass('on')
			$('.sec01_mobile_menu .bott').stop().slideUp();
	}

	// 모바일에서 작동 안하게
	if (matchMedia("screen and (min-width: 1024px)").matches) {
		$('.gnbwrap nav>ul>li').removeClass('more')
		// $('.gnb-bg').hide();
	}
	
});


//adding the action to the button
$(document).on('click', '.top', function (e) {
	e.preventDefault();
	$.fn.fullpage.moveTo('section1', 0);
});



