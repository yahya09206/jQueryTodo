//Check off specif todos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//Click on x to delete todo
$("span").click(function(){
	alert("Clicked on a span");
})