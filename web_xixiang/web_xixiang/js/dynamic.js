$(function () {
    //返回顶部
    $(function () {
        $(".content_main_top").hide();
        $(".content_main_top").bind("click",function(){
            $('html, body').animate({scrollTop: 0},300);
            return false;
        });
        $(window).bind('scroll resize',function(){
            if($(window).scrollTop()<=300){
                $(".content_main_top").hide();
            }else{
                $(".content_main_top").show();
            }
        });
    })
    //导航栏切换
    $(function () {
        $("#content_nav_1").click(function () {
            $(".content_main").show();
            $(".content_main_2").hide();
            $("#content_nav_1").css("background", "#0059d2");
            $("#content_nav_1 a").css("color", "#ffffff");
            $("#content_nav_2").css("background", "#eaeaec");
            $("#content_nav_2 a").css("color", "#4c4c4c");
        });
        $("#content_nav_2").click(function () {
            $(".content_main").hide();
            $(".content_main_2").show();
            $("#content_nav_2").css("background", "#0059d2");
            $("#content_nav_2 a").css("color", "#ffffff");
            $("#content_nav_1").css("background","#eaeaec");
            $("#content_nav_1 a").css("color", "#4c4c4c");
        });
    })
})