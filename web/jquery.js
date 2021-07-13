$(document).ready(function(){
	$('.num').counterUp({delay:10,time:1000});
	console.log($('.num').eq(1).html());
	$('.content').isotope({
      itemSelector: '.all'
   });
   $('.menu1').children().click(function(event) {
   	if($(this).css('backgroundColor')=='rgba(0, 0, 0, 0)'){
   	  $('.menu1').children().css('backgroundColor','rgba(0, 0, 0, 0)');
   	  $('.menu1').children().css('color','gray');
   	  $(this).css('backgroundColor','#007bff');
   	  $(this).css('color','white');
      var type = $(this).data('type');
      console.log($('.menu1').children().css('backgroundColor'));
      console.log(type);
      type = '.'+type;
      $('.content').isotope({
         filter:type
      });
  	}else {
  	  $('.menu1').children().css('backgroundColor','rgba(0, 0, 0, 0)');
  	  $('.menu1').children().css('color','gray');
  	  var type = $(this).data('type');
      console.log(type);
      type = '.'+type;
      $('.content').isotope({
         filter:type
      });
  	}
   });
   $('.icon').on("mouseenter",function(){
   		$(this).css('color','#007bff');
   });
   $('.icon').on("mouseleave",function(){
   		$(this).css('color','#212529');
   });
   $('.main5111').on("mouseenter",function(){
   		$(this).css('color','#007bff');
   		$(this).css('backgroundColor','white');
   });
   $('.main5111').on("mouseleave",function(){
   		$(this).css('color','white');
   		$(this).css('backgroundColor','#007bff');
   });
   $('.rightmain5').on("mouseenter",function(){
   		$(this).css('color','white');
   		$(this).css('backgroundColor','black');
   });
   $('.rightmain5').on("mouseleave",function(){
   		$(this).css('color','black');
   		$(this).css('backgroundColor','white');
   });
   console.log($('.thechon').css('backgroundColor'))
   $('.thechon').click(function(){
   	if($(this).css('backgroundColor')=='rgb(255, 255, 255)'){
   		$('.thechon').css('backgroundColor','white');
   		$('.thechon').children().children().children().css('color','black');
   		$(this).css('backgroundColor','#007bff');
   		console.log($(this).children().children().children());
   		$(this).children().children().children().css('color','white');
   	}else {
   		$(this).css('backgroundColor','white');
   		$(this).children().children().children().css('color','black');
   	}
   });
   $('.icontop').on("click",function(){
   	if($('.icontop').css('left')=='0px'){
   		$('.khung').css('display','block');
   		$('.icontop').css('left','80px');
   		$('.top').css('width','100px');
   	}else {
   		$('.khung').css('display','none');
   		$('.icontop').css('left','0px');
   		$('.top').css('width','0px');
   	}
   });
   $('.rool1').click(function(){
   	   $('.main1').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.rool2').click(function(){
   	   $('.main2').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.rool3').click(function(){
   	   $('.main3').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.rool4').click(function(){
   	   $('.main4').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.rool5').click(function(){
   	   $('.main5').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.rool6').click(function(){
   	   $('.main6').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.rool7').click(function(){
   	   $('.main7').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.rool8').click(function(){
   	   $('.main8').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.rool9').click(function(){
   	   $('.main10').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
   });
   $('.inputbut').click(function(){
   		var name = $('.name').val();
   		var errow1 = '';
   		console.log($('.name').val());
   		if(name == ''){
   			errow1='Nhập tên'
   		}else {
   			errow1 = '';
   		}
   		$('.thongbao1').html(errow1);
   		var email = $('.email').val();
   		var errow2 = '';
   		var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   		console.log($('.email').val());
   		console.log (filter.test(String(email).toLowerCase()));
   		if(email == ''){
   			errow2='Nhập email'
   		}
   		if (filter.test(String(email).toLowerCase())){
        	errow2 = '' ;
    	}
   		else {
   			errow2 = 'Nhập email';
   		}
   		$('.thongbao2').html(errow2);
   		var subject = $('.subject').val();
   		var errow3 = '';
   		console.log($('.subject').val());
   		if(subject == ''){
   			errow3='Nhập subject'
   		}else {
   			errow3 = '';
   		}
   		$('.thongbao3').html(errow3);
   		var mess = $('.mess').val();
   		var errow4 = '';
   		if(mess == ''){
   			errow4 = 'Nhập message';
   		} else {
   			errow4 = '';
   		}
   		$('.thongbaotext').html(errow4);
   })
   var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]



// Tao moi doi tuong Date()

var newDate = new Date();

// Lay gia tri thoi gian hien tai

newDate.setDate(newDate.getDate());

// Xuat ngay thang, nam

$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());



setInterval( function() {

    // lay gia tri giay trong doi tuong Date()

    var seconds = new Date().getSeconds();

    // Chen so 0 vao dang truoc gia tri giay

    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);

    },1000);



setInterval( function() {

    // Tuong tu lay gia tri phut

    var minutes = new Date().getMinutes();

    // Chen so 0 vao dang truoc gia tri phut neu gia tri hien tai nho hon 10

    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);

    },1000);



setInterval( function() {

    // Lay gia tri gio hien tai

    var hours = new Date().getHours();

    // Chen so 0 vao truoc gia tri gio neu gia tri nho hon 10

    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);

    }, 1000);
	$('.icondongho').on("click",function(){
   	if($('.clock').css('display')=='none'){
   		$('.clock').css('display','block');
   	}else {
   		$('.clock').css('display','none')
   	}
   });
	$('.top1').on("mouseenter",function(){
   		$(this).css('backgroundColor','#007bff');
   	});
   	$('.top1').on("mouseleave",function(){
   		$(this).css('backgroundColor','black');
   	});
});