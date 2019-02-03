
$(document).ready(function(){
//check of specific by clicking 
$("ul").on("click", "li", function () { 
   $(this).toggleClass("don");
});
});

$(document).ready(function(){
 //click on the X span will delet the todo 
 $("ul").on("click", "span", function (e) { 
     e.stopPropagation();
     $(this).parent().fadeOut(500,function () {
         $(this).remove();
     });
 });
});

$(document).ready(function(){
$("#addToDo").keypress(function(e){
    if(e.which === 13){
        let todotxt = $(this).val();
        //add li and hook the .text();
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todotxt + "</li>");
        $(this).val("");
    }
});
});

