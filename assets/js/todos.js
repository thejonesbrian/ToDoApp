//Check off todo's 
$("li").click(function(){
    $(this).toggleClass("completed");
});

//delete a todo
$("span").click(function(event){
    $(this).parent().remove();
    event.stopPropogation();
});