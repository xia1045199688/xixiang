
$(function () {
    var i=0;
    var t;
    $(".content_picture_pic img").eq(0).show().siblings().hide();
    t = setInterval(play, 3000);
    function play() {
        i++;
        if(i>2){
            i=0;
        }
        $(".content_picture_point ul li").eq(i).css({
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
        $(".content_picture_pic img").eq(i).fadeIn(1000).siblings().fadeOut(1000);
    };
    $(".content_picture_point ul li").click(function () {
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
        $(".content_picture_pic img").eq(i).fadeIn(1000).siblings().fadeOut(1000);
    });
    $(".content_picture_point ul li").hover(
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