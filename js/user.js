$(function(){
    $(document).on('mousemove','.tab-item',function(e){
        //bar 特效
        $('#tab-bar').css({left:$(this).position().left,width:$(this).width()});
    });
    $(document).on('mouseout','.tab-item',function(e){
        //bar 特效
        $('#tab-bar').css({left:$('.tab-item.active').position().left,width:$('.tab-item.active').width()});
    });
    $('#tab-bar').css({left:$('.tab-item.active').position().left,width:$('.tab-item.active').width()});
    // $('.tab-item.active').css({color:'#22b9e7'});
})

