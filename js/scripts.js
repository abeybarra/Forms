$(document).ready(function(){
  $(".btn").click(function(){
  var input = $("#text").val();
  $(".shout").append("<p>" + input.toUpperCase() + "</p>");
  
    event.preventDefault();
  });
});