/**
 * Created by Hakierka on 04.12.2015.
 */
$(document).ready(function(){

    var menu=$(".menu");
    var menuOffsetOfTop = menu.position().top;
    $(window).on("scroll", function(event){
        if ($(window).scrollTop()> menuOffsetOfTop) {
            menu.addClass("sticky");
        }
        else {
            menu.removeClass("sticky");
        }


    });



});