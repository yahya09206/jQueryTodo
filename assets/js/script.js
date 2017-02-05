//Check off specif todos by clicking
//changed code so existing and new li's will have code for deleting and striking off
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input box
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to li
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});