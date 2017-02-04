//Check off specif todos by clicking
$("li").click(function(){
	//if li is grey
	if($(this).css("color") === "grey")
		//turn it black
	//else
		//turn it gray
	$(this).css({
		color: "gray",
		textDecoration: "line-through",
	});
});