/**
 * Created by Hakierka on 03.12.2015.
 */
document.addEventListener("DOMContentLoaded",function(){

    var butonCelsToFar=document.getElementById("celsToFar");
    var buttonFarToCels=document.getElementById("farToCels");
    var resultElement=document.getElementById("resultText");
    var unitInput=document.getElementById('unitInput');

    butonCelsToFar.addEventListener('click', function(event){
        var userInput=unitInput.value;
        var unitsToConvert=parseFloat(userInput);
        var unitConverted=0;

        unitInput.value="";
        if (isNaN(unitsToConvert)){
            resultElement.innerHTML="Złe dane!";
        }
        else {
            console.log("proper input");
            unitConverted=unitsToConvert*1.8+32;
            resultElement.innerHTML=unitsToConvert + " jest równe "+unitConverted+" Fahr";
        }

    });

    buttonFarToCels.addEventListener('click', function(event){
        var userInput=unitInput.value;
        var unitsToConvert=parseFloat(userInput);
        var unitConverted=0;
        if (isNaN(unitsToConvert)){
            resultElement.innerHTML="Złe dane!";
        }
        else {
            unitConverted=(unitsToConvert-32)*1.8;
            resultElement.innerHTML=unitsToConvert + " jest równe "+unitConverted+" Cels";
        }

    });




});