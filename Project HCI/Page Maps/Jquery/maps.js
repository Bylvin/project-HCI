$(document).ready(function(){
    $('.next').on('click', function(){
        var currimage = $('.active');
        var nextimage = currimage.next();

        if (nextimage.length)
        {
            currimage.removeClass('active').css('z-index', -10);
            nextimage.addClass('active').css('z-index', 10);    
        }
    });

    $('.prev').on('click', function(){
        var currimage = $('.active');
        var previmage = currimage.prev();

        if (previmage.length)
        {
            currimage.removeClass('active').css('z-index', -10);
            previmage.addClass('active').css('z-index', 10);    
        }
    });
});