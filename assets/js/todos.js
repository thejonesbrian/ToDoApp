//Check off todo's 
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//delete a todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropogation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //saves value in input
        var todo = $(this).val();
        //clears text from input
        $(this).val("");
        //creates todo in list
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todo + "</li>")
    }
})
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})