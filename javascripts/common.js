var pn = 0;
var d = 1;
var nv = 0;
window.touchEvent = false;
$('#page0').removeClass('status2');
$('#page0').addClass('status1');
$(".btnadditional").fadeOut(0);

function MotionEventRegister() {
	$(window).resize(function() {
		$('body').css('width',$(window).width()+'px').css('height',$(window).height()+'px');
	});
	$('#page0').removeClass('status2').addClass('status1');
	$(window).mousewheel(function(event, delta, deltaX, deltaY) {
		status = $('body').attr('class');
		if (status != 'playing') {
			if(deltaY<0){
				motion(1);
				$('#navigation li').removeClass('page_on');
				$('#navigation li:nth-of-type('+(pn+1)+')').addClass('page_on');
			}else{
				motion(-1);
				$('#navigation li').removeClass('page_on');
				$('#navigation li:nth-of-type('+(pn+1)+')').addClass('page_on');
			}
		$('body').addClass('playing');
		setTimeout(function() {$('body').removeClass('playing')}, 1300);
		}
	});
	$("#navTop li").on("click", function () {
		
	});
	document.onkeydown = function(event) {
		var c = window.event.keyCode;
		if (c==40||c==32||c==39) {
			motion(1);
			$('#navigation li').removeClass('page_on');
			$('#navigation li:nth-of-type('+(pn+1)+')').addClass('page_on');
		}else if (c==38||c==37) {
			motion(-1);
			$('#navigation li').removeClass('page_on');
			$('#navigation li:nth-of-type('+(pn+1)+')').addClass('page_on');
		}
	}
	$("#btn").mouseover(function(){
    	$(".btnadditional").fadeIn(300);
  	});
  	$("#btn").mouseout(function(){
    	$(".btnadditional").fadeOut(300);
  	});
  	$("#global_scroll").click(function () {
  		motion(1);
  		$('#navigation li').removeClass('page_on');
		$('#navigation li:nth-of-type('+(pn+1)+')').addClass('page_on');
  	});
  	$(".navTop_ul li").on("click", function () {
  		var this_num = $(this).index();
  		var change_num = this_num - nv;
  		if (change_num > 0 && this_num < 4) {
  			for(var i = 0; i < change_num; i ++) {
	  			motion(1);
	  		}
	  		nv = this_num;
  		}else if (change_num < 0 && this_num < 4) {
  			for(var i = 0; i > change_num; i --) {
	  			motion(-1);
	  		}
	  		nv = this_num;
  		}
  	});
}
function motion(d){
	pn = pn + d;

	$("#box_left").animate({opacity:0},600,function () {
		$(this).animate({opacity:0.9},600);
	});

	if (pn == 1) {
		$(".myaddtitle").animate({opacity: 1},800);
	}else {
		$(".myaddtitle").animate({opacity: 0},400);
	}

	if (pn == 2) {
		$("#pg2_skin").css('display','block');
	}else {
		$("#pg2_skin").css('display','none');
	}

	if (pn == 3) {
		$("#pg3_skin").css('display','block');
	}else {
		$("#pg3_skin").css('display','none');
	}

	if (pn == 0) {
		$('.global_logo').css('opacity','0');
		$('#global_scroll').css('opacity','1');
		$('.page0_round').css('display','block');
		// isnavTopFun(true);
	}else if (pn > 0) {
		$('.global_logo').css('opacity','1');
		$('#global_scroll').css('opacity','0');
		$('.page0_round').css('display','none');
		// isnavTopFun(false);
	};

	if (pn==-1) {
		pn = 0;
	}else if (pn==4) {
		$('#page3').removeClass('status1').addClass('status0');
		$('#page0').css({'display':'block','opacity':'0'});
		setTimeout(function(){$('#page0').css('opacity','1').removeClass('status0').addClass('status1');}, 100);
		pn = 0;
        motion(0);
		$('.global_logo').css('opacity','0');
		$('#global_scroll').css('opacity','1');
	}

	nv = pn;
	$("#navTop li").removeClass("on");
	$("#navTop li").eq(pn).addClass("on");

	if (d==1) {
		$('#bg'+(pn-1)).css('opacity','0');
		$('#bg'+(pn)).css('opacity','1');
	}else if (d==0) {
		$('#bg div').css('opacity','0');
		$('#bg'+(pn)).css('opacity','1');
	}else{
		$('#bg'+(pn+1)).css('opacity','0');
		$('#bg'+(pn)).css('opacity','1');
	};
	$('#track').removeClass('page0').removeClass('page1').removeClass('page2').removeClass('page3').removeClass('page4');
	$('#track').addClass('page'+pn);
	$('#pn').text(pn);
	$('#page'+pn).removeClass('status2').removeClass('status0');
	$('#page'+pn).addClass('status1');
	$('#page'+(pn-1)).removeClass('status1');
	$('#page'+(pn-1)).addClass('status0');
	$('#page'+(pn+1)).removeClass('status1');
	$('#page'+(pn+1)).addClass('status2');

}

function nodeself() {
	var num = 1;
	var tim = null;
	tim = setInterval(function() {
		num -= 0.1;
		document.getElementById('is3d').style.opacity = num;
		if (num <= 0) {
			clearInterval(tim);
			document.getElementById('is3d').style.display = "none";
			document.getElementById('is3d').remove();
		}
	}, 60);
}

function isnavTopFun(ispack) {
	if (ispack == false) {
		$(".navTop_ul").css('margin-right', -($(".navTop_ul").width()+50));
		$(".navTop_views span").eq(0).removeClass("navTop_views_one");
		$(".navTop_views span").eq(1).removeClass("navTop_views_two");
		$(".navTop_views span").eq(0).addClass("navTop_views_ones");
		$(".navTop_views span").eq(1).addClass("navTop_views_twos");
		$(".navTop_views span").eq(2).removeClass("navTop_views_three");
		ispack = true;
	}else {
		$(".navTop_ul").css('margin-right', 0);
		$(".navTop_views span").eq(0).addClass("navTop_views_one");
		$(".navTop_views span").eq(1).addClass("navTop_views_two");
		$(".navTop_views span").eq(0).removeClass("navTop_views_ones");
		$(".navTop_views span").eq(1).removeClass("navTop_views_twos");
		$(".navTop_views span").eq(2).addClass("navTop_views_three");
		ispack = false;
	}
	$(".navTop_views").data('navpack', ispack);
}

function navTopFun() {
	var navpack = $(".navTop_views").data('navpack');
	isnavTopFun(navpack);
}




