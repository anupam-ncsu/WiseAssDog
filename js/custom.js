	 var nIntervId;
	 
	 function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var random = getRandomInt(1, 95);
	function dogFetcher() {
	var location = "img/dog/dog\ \(".concat(random,").gif");
		document.getElementById("Img").src = unescape(location);
	}
	 function reloadGif() {
      nIntervId = setInterval(dogFetcher, 6000);
    }
	
	function getName() {
    var input = document.getElementById("userInput").value;
    alert(input);
	}