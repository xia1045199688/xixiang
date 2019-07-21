$(function () {
    //关于我们页
    $(".content_3_right_top").hide();
    $(".content_3_right_top").bind("click",function(){     //单击时返回顶部
        $('html, body').animate({scrollTop: 0},300);
        return false;
    });
    $(window).bind('scroll resize',function(){
        if($(window).scrollTop()<=300){
            $(".content_3_right_top").hide();
        }else{
            $(".content_3_right_top").show();
        }
    });
    //公司简介页
    $(".content_culture_top").hide();
    $(".content_culture_top").bind("click",function(){     //单击时返回顶部
        $('html, body').animate({scrollTop: 0},300);
        return false;
    });
    $(window).bind('scroll resize',function(){
        if($(window).scrollTop()<=300){
            $(".content_culture_top").hide();
        }else{
            $(".content_culture_top").show();
        }
    });
    //合作商家页
    $(".content_label_top").hide();
    $(".content_label_top").bind("click",function(){     //单击时返回顶部
        $('html, body').animate({scrollTop: 0},300);
        return false;
    });
    $(window).bind('scroll resize',function(){
        if($(window).scrollTop()<=300){
            $(".content_label_top").hide();
        }else{
            $(".content_label_top").show();
        }
    });
})