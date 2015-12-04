/**
 * Created by Hakierka on 04.12.2015.
 */
$(document).ready(function() {

    var tabLinks = $(".tab li");
    console.log(tabLinks);
    var paragrafs = $(".tab p");
    var currentVisibleParagraph=0;
    paragrafs.eq(currentVisibleParagraph).show(0);

    tabLinks.on("click", function (event) {
        paragrafs.eq(currentVisibleParagraph).hide();
        currentVisibleParagraph = parseInt($(this).data("id"));
        paragrafs.eq(currentVisibleParagraph).show(0);
    })

});