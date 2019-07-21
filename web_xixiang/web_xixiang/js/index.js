
 $(function () {
     //顶部轮播图
     $(function () {
         var i=0;
         var t;
         $(".top_picture img").eq(0).show().siblings().hide();
         t = setInterval(play, 3000);
         function play() {
             i++;
             if(i>2){
                 i=0;
             }
             $(".top_point ul li").eq(i).css({
                 "background":"#0059D2",
                 "border": "none",
                 "width":"12px",
                 "height":"12px"
             }).siblings().css({
                 "width":"8px",
                 "height":"8px",
                 "border":"2px solid #cccccc",
                 "background":"none"
             })
             // $(".top_point ul li").eq(i).addClass("top_point ul li:hover").siblings().removeClass("top_point ul li:hover");
             $(".top_picture img").eq(i).fadeIn(1000).siblings().fadeOut(1000);
         };
         $(".top_point ul li").click(function () {
             $(this).css({
                 "background":"#0059D2",
                 "border": "none",
                 "width":"12px",
                 "height":"12px"
             }).siblings().css({
                 "width":"8px",
                 "height":"8px",
                 "border":"2px solid #cccccc",
                 "background":"none"
             })
             i=$(this).index();
             $(".top_picture img").eq(i).fadeIn(1000).siblings().fadeOut(1000);
         });
         $(".top_point ul li").hover(
             //移进
             function () {
                 clearInterval(t);
             },
             //鼠标移开
             function() {
                 t = setInterval(play, 3000);
             }
         );
     })
     //中间轮播图
     $(function () {
         $(".picture_scroll_pic img").eq(0).show().siblings().hide();
         var j=0;
         var k;
         k = setInterval(play2, 5000);
         function play2() {
             j++;
             if(j>2){
                 j=0;
             }
             $(".picture_scroll_point ul li").eq(j).css({
                 "background":"#0059D2",
                 "border": "none",
                 "width":"12px",
                 "height":"12px"
             }).siblings().css({
                 "width":"8px",
                 "height":"8px",
                 "border":"2px solid #cccccc",
                 "background":"none"
             })
             // $(".top_point ul li").eq(i).addClass("top_point ul li:hover").siblings().removeClass("top_point ul li:hover");
             $(".picture_scroll_pic img").eq(j).fadeIn(1000).siblings().fadeOut(1000);
         };
         $(".picture_scroll_point ul li").click(function () {
             $(this).css({
                 "background":"#0059D2",
                 "border": "none",
                 "width":"12px",
                 "height":"12px"
             }).siblings().css({
                 "width":"8px",
                 "height":"8px",
                 "border":"2px solid #cccccc",
                 "background":"none"
             })
             j=$(this).index();
             $(".picture_scroll_pic img").eq(j).fadeIn(1000).siblings().fadeOut(1000);
         });
         $(".picture_scroll_point ul li").hover(
             //移进
             function () {
                 clearInterval(k);
             },
             //鼠标移开
             function() {
                 k = setInterval(play2, 3000);
             }
         );
     })
     //更多
     $(function () {
         $("#more_btn").click(function () {
             $("#more").toggle();
         });
     })
     //返回顶部
     $(function () {
         $(".contactus_content_return_btn").hide();
         $(".contactus_content_return_top").bind("click",function(){
             $('html, body').animate({scrollTop: 0},300);
             return false;
         });
         $(window).bind('scroll resize',function(){
             if($(window).scrollTop()<=300){
                 $(".contactus_content_return_btn").hide();
             }else{
                 $(".contactus_content_return_btn").show();
             }
         });
     })
     //企业动态切换
     $(function () {
         $(".dynamics_content_title_left a").click(function () {
             $(".company").css({left:0});
             $(".dynamics_content_text").show();
             $(".dynamics_content_text_2").hide();
             $(".dynamics_content_title_left a").css({
                 "background":"#0059D2",
                 "border-radius": "20px"
             });
             $(".dynamics_content_title_right a").css({
                 "background":"none",
                 "border-radius": "none"
             });
         });
         $(".dynamics_content_title_right a").click(function () {
             $(".trade").css({left:0});
             $(".dynamics_content_text_2").show();
             $(".dynamics_content_text").hide();
             $(".dynamics_content_title_right a").css({
                 "background":"#0059D2",
                 "border-radius": "20px"
             });
             $(".dynamics_content_title_left a").css({
                 "background":"none",
                 "border-radius": "none"
             });
         });
         $(".dynamics_content_left_arrow a").click(function () {
             $(".company,.trade").animate({left:0},500);
         });
         $(".dynamics_content_right_arrow a").click(function () {
             $(".company,.trade").animate({left:'-980px'},500);
         });
     });
})

