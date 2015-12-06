/**
 * Created by Hakierka on 04.12.2015.
 */
$(document).ready(function(){
    var name = $("#nameInput");
    var price = $("#priceInput");
    var amount = $("#amountInput");
    var addButton = $("#addButton");
    var total = $("#total");
    var itemsList = $("#itemsList");
    var totalPrice = 0;

    total.text(totalPrice);

    addButton.on("click", function() {
        var newItemName=name.prop("value");
        var newItemPrice=parseFloat(price.prop("value"));
        var newItemAmount=parseInt(amount.prop("value"));
        console.log(newItemName);
        console.log(newItemAmount);
        console.log(newItemPrice);

        if  (newItemName.length===0 ||
            isNaN(newItemAmount)===true ||
            isNaN(newItemPrice)===true ||
            newItemAmount<0 ||
            newItemPrice < 0) {
            console.log("złe dane");
            return;
        }
        var newElement= $("<li>");
        var sum = newItemAmount + newItemPrice;
        newElement.html("Name: " + newItemName+"<br>"+
            "Amount: " + newItemAmount+"<br>"+
            "Price: " + newItemPrice+"<br>"+
            "Sum: " + sum);

        itemsList.append(newElement);
        console.log(itemsList.length);

        var deleteButton = $("<button>Delete</button>");
        deleteButton.on("click",function(event){
           $(this).parent().remove();
            totalPrice-=sum;
            total.text(totalPrice);
        });
        deleteButton.appendTo(newElement);
        totalPrice+=sum;
        total.text(totalPrice);

    });


});