//Check off specif todos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//Click on x to delete todo
$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})