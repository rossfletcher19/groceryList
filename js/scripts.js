$(function() {
 $("#grocerylist").submit(function(event) {
var blanks = ["item1", "item2", "item3", "item4", "item5"];

blanks.forEach(function(blank) {
  var userInput = $("input#" + blank).val();
  $("." + blank).text(userInput);
});

   $(".showlist").show();
   $("#itemlist").hide();

   event.preventDefault();
 });
});
