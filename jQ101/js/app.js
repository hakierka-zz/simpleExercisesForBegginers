/**
 * Created by Hakierka on 03.12.2015.
 */

$(document).ready(function(){
    var list = $("ul");
    var listItems=$("ul li");

    list.on("click",function(event){
       var jQthis=$(this);
        console.log("Click list");
        console.log(jQthis);
    });

    listItems.on("click", function(event){
        var jQthis = $(this);
        console.log("click1 on list element:");
        console.log(jQthis);
        event.stopPropagation();

    });
    listItems.on("click", function(event){
        var jQthis = $(this);
        console.log("click2 on list element:");
        console.log(jQthis);
    });
    listItems.on("click", function(event){
        var jQthis = $(this);
        console.log("click3 on list element:");
        console.log(jQthis);

    });
    listItems.on("click", function(event){
        var jQthis = $(this);
        console.log("click4 on list element");
        console.log(jQthis);
        event.stopImmediatePropagation();
    });



});

