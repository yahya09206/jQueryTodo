//Check off specif todos by clicking
$("li").click(function(){
	//if li is grey
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black
		$(this).css("color", "black");
	}
	else {
		//turn it gray
		$(this).css({
			color: "gray",
			textDecoration: "line-through",
		});
	}

});