$(function() {
 $("#grocerylist").submit(function(event) {
  //  debugger;
  var blanks = ["item1", "item2", "item3", "item4", "item5"];//sorted
  var groceries =[];
  blanks.map(function(blank) { //full o stuff
    var userInput = $("#" + blank).val();
    groceries.push(userInput);
  });

  groceries.sort();

  groceries.forEach(function(grocery) {
    $("#output").append("<li>" + grocery.toUpperCase() + "</li>");
  });
  //i am now sorted!
  //another loop through groceries here

   $(".showlist").show();
   $("#itemlist").hide();

   event.preventDefault();
 });
});
