var quotes =
[
"I\'m jealous of people that don\'t know you.",
"You\'re the human equivalent of a participation award.",
"You\'re like a pile of trash: a waste of space and nobody wants you.",
"Your family tree is a cactus, because everybody on it is a prick.",
"I can just imagine your parents faces when they forgot the receipt after getting you.",
"You are proof enough that guns do not kill people.",
"You look like a Cat\'s ass glitch.",
"You are proof that abortions dont work.",
"Your ass must be jealous of all the shit that comes out of your mouth.",
"ive seen harmless bunnies having better life goals then you.",
"Sorry i thought i heard a whiny bitch complain about not being a tank.",
"I know why you\'re so dumb. Your brain is the same size as your weiner.",
"You have worse map awareness than Christopher fucking Columbus.",
"If I wanted to listen to an asshole, I\'d fart.",
"I was anti-abortion before I started this match but now I\'m reconsidering.",
"Good job keeping your learning curve perfectly horizontal.",
"I\'d tell you to kill yourself but you probably couldn\'t even manage that.",
"I\'m sorry, not even the ISIS can translate your stupidity.",
"I don\'t have the time or the crayons to explain this to you.",
"Why don\'t you slip into something more comfortable...like a coma.",
"I\'d tell you where the uninstall button is but you\'d miss that one too.",
"There\'s fuckups in this world and then there is you.",
"The only aid you provide is the disease.",
"Look in the mirror, your already an insult to yourself.",
"I\'m not trash talking, I\'m talking to trash.",
"You are proof enough that guns do not kill people.",
"I\'d insult you, but my mother told me not to insult the handicapped.",
"If I gave you a penny for your thoughts how much change would I get back?.",
"I\'ve avoided smoking my entire life to prevent cancer, but with a play like that it seems I\'ve missed out on cigars for nothing.",
"You\'re drunk right?.",
"I\'ve seen more support for North Korea than I\'ve seen all game from you.",
"I noticed your sister got all the good genes from the family.",
"I\'ve avoided smoking my entire life to prevent cancer, but with a play like that it seems I\'ve missed out on cigars for nothing.",
"At least your immune system tries to stop you from dying.",
"You\'re so dumb you could drown in the Dead Sea.",
"Oh look, Hitler missed one",
"You\'d have made an excellent Stormtrooper.",
"My pawless cat can aim better than you",
"If you were any more inbred you\'d be a sandwich.",
"I think you\'d have more fun playing something you were good at.",
"Hitler knew when to kill-himself. Why can\'t you do the same?.",
"You must have been born on a highway, because that\'s where most accidents happen.",
"Do Irish guys pick you up and get really excited that they found a Potato?",
"I\'d tell you to shoot yourself, but I bet you\'d miss",
"I\'d tell you to go outside, but you\'d just ruin that for everyone else too",
"If I had a cent for everytime you hit a shot I would somehow be homeless and in debt.",
"I don\'t have the time or the crayons to explain this to you.",
"Some babies were dropped on their heads but you were clearly thrown at a wall.",
"I\'d love to see things from your perspective, but I don\'t think I could shove my head that far up my ass.",
"Legend has it that the number zero was first invented after scientists calculated your chance of doing something useful.",
"There are about 37 trillion cells working together in your body right now, and you are disappointing every single one of them.",
"You should let your chair play, at least it knows how to support.",
"I\'d call you a tool, but that would imply you were useful in at least one way.",
"Stephen Hawking has better hand eye coordination than you.",
"You\'re so ugly Hello Kitty said goodbye to you.",
"When your mother took you to school for the first time she was fined for littering.",
"Do you ever wonder what life would be like if you\'d had enough oxygen at birth?.",
"If it wasn\'t for gravity you couldn\'t even hit the fucking ground",
"Your personal biography is a porno",
"I would say you\'re the spawn of Satan, but that would imply that Satan cared.",
"How many days did it take for your mother to regret not aborting you?",
"Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it",
]


function QuoteFetcher(){
	var random = Math.floor(Math.random()*(quotes.length));
	var element = document.getElementById("QuoteFetch").innerHTML = quotes[random];

}

$(document).ready(function()	{

	QuoteFetcher();
});



