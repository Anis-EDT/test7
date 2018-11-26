
$("body").keypress(function(event){
	//$("#sam").slideToggle()
	console.log(event.key)
	if(event.key =="q")
		$("#sam").slideUp()
	if(event.key =="d")
		$("#sam").slideDown()

})
$("#sam").dblclick(function(){
	var x = 1 ; 
	

setInterval(function(){
     x++ ;
	$("#sam").rotate(x);
 						 }, 5);


})

