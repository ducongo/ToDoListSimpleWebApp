
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");//single line of whats below
  /*
  if($(this).css("color") === "rgb(255, 0, 0)"){
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
    return;
  }
  $(this).css({
    color: "red",
    textDecoration: "line-through"
  });
  */
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
  //fade out animation
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  //stops it from bubbling up to parent elements
  event.stopPropagation(); //this prevents for parent listerners from activating
});


$("input[type='text']").keypress(function(){
  if(event.which === 13){
    var todoText = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+todoText+"</li>");
    $(this).val = "";
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
