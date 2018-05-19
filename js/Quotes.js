var quotes = 
['It is unwise to advise fool\,  to care for a woman of loose character, and to be in the company of an unenthusiastic person',
'A house having a venomous snake is not suitable for living. In the same manner\, a house having an ill-tempered wife with low morals\, deceitful friends\, or with an impolite talkative servant is also not suitable for living',
'A man must save money for the bad days and must protect his woman even at the cost of money that was saved',
'Wealth is one of the most significant factors in life. It brings you the honour\, supports you\, and makes you capable of dealing with calamities',
'There is no reason to live in a country/region where you cannot find an employment\, respect, well-wishers\, and education',
'A man shouldn’t reside at a place where people are not afraid of the law\, where people are shameless\, where exists no clever man\, people lack in the spirit of charity\, and where exists no art',
'Do not live even for a single day at places where you cannot find these five things. They are prosperous businessmen\, educated brahmins\, soldiers, a river\, and a doctor'
]


function QuoteFetcher(){
	var random = Math.floor(Math.random()*(quotes.length));
	//document.getElementById('ChanakyaFetch').innerHTML = quotes[random];
	var element = document.getElementById("QuoteFetch").innerHTML = quotes[random];
	
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('page-top').addEventListener('onload', clickHandler);
  QuoteFetcher();
});
