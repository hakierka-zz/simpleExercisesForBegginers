/**
 * Created by Hakierka on 03.12.2015.
 */
document.addEventListener("DOMContentLoaded", function(){
    var tooltipList = document.getElementsByClassName("tooltip");
    var tooltipElement=null;


    for (var i=0; i<tooltipList.length;i++){
        tooltipList[i].addEventListener("mouseover", function(event){
        tooltipElement=document.createElement("div");
        var tooltipText=this.dataset.tooltip;
            console.log(tooltipText);
            tooltipElement.innerHTML=tooltipText;
            this.appendChild(tooltipElement);
            tooltipElement.classList.add("tooltipText");
        });
        tooltipList[i].addEventListener("mouseout", function(event){
            this.removeChild(tooltipElement);
            tooltipElement=null;
        });
    }














});