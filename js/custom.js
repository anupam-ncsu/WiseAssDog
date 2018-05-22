	 var nIntervId;
	 
	 function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var random = getRandomInt(1, 95);
	function dogFetcher() {
	var location = "img/dog/dog\ \(".concat(random,").gif");

		//document.getElementById("Img").src = unescape(location);
		getGiffy(location);
	}

	function getGiffy(location){
		document.getElementById("Img").src = unescape(location);
	}

	
	
$(document).ready(function()	{
	 dogFetcher();	
	window.setInterval(function(){
  dogFetcher();
}, 4000);
	
});