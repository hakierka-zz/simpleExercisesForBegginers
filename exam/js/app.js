/**
 * Created by Hakierka on 06.12.2015.
 */
$(document).ready(function() {

    var number1 = $("#number1");
    var number2 = $("#number2");
    var addButton = $("#addButton")
    var subtrackButton = $("#subtrackButton");
    var multiplyButton = $("#multiplyButton");
    var shareButton = $("#shareButton");
    var list= $("#list");
    var score=$(".score");
    var check=$(".check");
    var input1 =

    addButton.on("click",function(){
        var number1Value = parseFloat(number1.prop("value"));
        var number2Value = parseFloat(number2.prop("value"));
        console.log(number1Value);
        console.log(number2Value);

        var newElement= $("<li>");
        var sum = number1Value + number2Value;
        newElement.html(number1Value + " + "+ number2Value+" = "+sum+ "<br>");
        list.append(newElement);

        var newButton=$("<button>Zaznacz</button>");
        newButton.on("click",function(event){
            $(this).parent().css("color","red");

        });
        newButton.appendTo(newElement);

    });
    subtrackButton.on("click",function(){
        var number1Value = parseFloat(number1.prop("value"));
        var number2Value = parseFloat(number2.prop("value"));
        console.log(number1Value);
        console.log(number2Value);

        var newElement= $("<li>");
        var difference = number1Value - number2Value;
        newElement.html(number1Value + " - "+ number2Value+" = "+difference+ "<br>");
        list.append(newElement);

        var newButton=$("<button>Zaznacz</button>");
        newButton.on("click",function(event){
            $(this).parent().css("color","red");

        });
        newButton.appendTo(newElement);

    });
    multiplyButton.on("click",function(){
        var number1Value = parseFloat(number1.prop("value"));
        var number2Value = parseFloat(number2.prop("value"));
        console.log(number1Value);
        console.log(number2Value);

        var newElement= $("<li>");
        var product = number1Value * number2Value;
        newElement.html(number1Value + " * "+ number2Value+" = "+product+ "<br>");
        list.append(newElement);

        var newButton=$("<button>Zaznacz</button>");
        newButton.on("click",function(event){
            $(this).parent().css("color","red");

        });
        newButton.appendTo(newElement);

    });

    shareButton.on("click",function(){
        var number1Value = parseFloat(number1.prop("value"));
        var number2Value = parseFloat(number2.prop("value"));
        console.log(number1Value);
        console.log(number2Value);

        var newElement= $("<li>");
        var quotient = number1Value / number2Value;
        newElement.html(number1Value + " / "+ number2Value+" = "+quotient+ "<br>");
        list.append(newElement);

        var newButton=$("<button>Zaznacz</button>");
        newButton.on("click",function(event){
            $(this).parent().css("color","red");

        });
        newButton.appendTo(newElement);

    });

});


