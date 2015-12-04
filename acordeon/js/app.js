/**
 * Created by Hakierka on 04.12.2015.
 */
$(document).ready(function(){

    var akordeonH1 = $(".akordeon h1");
    var currentVisible = null;




    akordeonH1.on("click", function(event){
        if (currentVisible!=null && currentVisible.get(0) != $(this).next().get(0)){
            currentVisible.hide(1000);
        }

       currentVisible = $(this).next();
        currentVisible.show(1000);
    });
});