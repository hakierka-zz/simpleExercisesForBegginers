/**
 * Created by Hakierka on 03.12.2015.
 */

//Galeria
document.addEventListener("DOMContentLoaded", function(){

   var listWithPictures = document.querySelectorAll('#gallery li');
   var nextButton=document.getElementById("nextPicture");
   var prevButton=document.getElementById("prevPicture");
   var visiblePicture=0;
   listWithPictures[visiblePicture].classList.remove('invisible');

   nextButton.addEventListener('click', function(event){
      listWithPictures[visiblePicture].classList.add("invisible");
      visiblePicture++;
      if (visiblePicture >= listWithPictures.length){
         visiblePicture=0;
      }
      listWithPictures[visiblePicture].classList.remove("invisible");

   });

   prevButton.addEventListener('click', function(event){
      listWithPictures[visiblePicture].classList.add("invisible");
      visiblePicture--;
      if (visiblePicture < 0){
         visiblePicture=listWithPictures.length-1;
      }
      listWithPictures[visiblePicture].classList.remove("invisible");

   });

});