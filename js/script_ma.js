// load page
$('document').ready(function(){

	// hide the following containers by default:
	$('.titleDIV').hide();	
	$('.interpretationDIV').hide();
	$('.pickanothercardDIV').hide();
	$('#randomCardDIV').hide();

	// 1. set up event listener for card click; 
	// note: replace #backcoverDIV with img for continuous clicking
	$('#backcoverDIV').click(function(){							
		
		// test: console.log('click is working');
		
		// 2. chose a randomCard:
		var randomCard = deck [Math.floor(Math.random() * deck.length)];
		console.log(randomCard);
		
		// 3. display randomCard's title:
		document.getElementById("cardTitleDIV").innerHTML = randomCard; 
		$('.instructionsDIV').hide();    
		$('.titleDIV').show();			  

		// test: console.log(randomCard);

		// 4. display randomCard's image:
		var randomCardImage = "images/cards/"+randomCard+".jpg";
		$("#randomCardDIV").attr("src",randomCardImage);
		$('#backcoverDIV').hide();
		$('#randomCardDIV').show();
		
		// test: console.log(randomCard);

		// 5. display randomCard's interpretation:
		for (i = 0; i < deck.length; i++) { 
    		//console.log(deckInterpretation[i].cardName === randomCard); 
    		if(deckInterpretation[i].cardName === randomCard){
    			$("#randomCardInterpretationDIV").append()
    			.html(deckInterpretation[i].cardInterpretation);
    		}   		
		}	
		$('.interpretationDIV').show();  
		
		// test: console.log(randomCard);

		$('.pickanothercardDIV').show(); 
		$('#footer').hide();
	});

    $('#randomCardDIV').click(function(){
        var randomCard = deck [Math.floor(Math.random() * deck.length)];
        console.log(randomCard);
        document.getElementById("cardTitleDIV").innerHTML = randomCard; 
        var randomCardImage = "images/cards/"+randomCard+".jpg";
        $("#randomCardDIV").attr("src",randomCardImage);
        for (i = 0; i < deck.length; i++) { 
            if(deckInterpretation[i].cardName === randomCard){
                $("#randomCardInterpretationDIV").append()
                .html(deckInterpretation[i].cardInterpretation);
            }           
        }
    });

    $('#pickanothercardtext').click(function(){
        var randomCard = deck [Math.floor(Math.random() * deck.length)];
        console.log(randomCard);
        document.getElementById("cardTitleDIV").innerHTML = randomCard; 
        var randomCardImage = "images/cards/"+randomCard+".jpg";
        $("#randomCardDIV").attr("src",randomCardImage);
        for (i = 0; i < deck.length; i++) { 
            if(deckInterpretation[i].cardName === randomCard){
                $("#randomCardInterpretationDIV").append()
                .html(deckInterpretation[i].cardInterpretation);
            }           
        }
    });
});

var deck = ['The Fool', 'The Magician', 'The Priestess', 'The Empress', 
'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Adjustment',
'The Hermit', 'Fortune', 'Lust', 'Death', 'Art', 'The Higher Self',
'The Tower', 'The Star', 'The Moon', 'The Sun', 'The New Aeon',
'The Universe'];

var deckInterpretation = [
{"cardName":"The Fool", "cardInterpretation":"Keywords: Beginnings, optimism, trust in inner instincts, innocence, spontaneity, a free spirit"},
    {"cardName":"The Magician", "cardInterpretation":"Keywords: Law of Attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, solar impulse, energy"},
    {"cardName":"The Priestess","cardInterpretation": "Keywords: Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind"},
    {"cardName":"The Empress", "cardInterpretation":"Keywords: Creativity, maternity, love, trust, fulfilness, femininity, beauty, nature, abundance"},
    {"cardName":"The Emperor", "cardInterpretation":"Keywords: Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, authority, father-figure, solid foundation"},
    {"cardName":"The Hierophant", "cardInterpretation":"Keywords: Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs"},
    {"cardName":"The Lovers", "cardInterpretation":"Keywords: Love, union, relationships, trust, optimism, values alignment, choices"},
    {"cardName":"The Chariot", "cardInterpretation":"Keywords: Control, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life"},
    {"cardName":"Adjustment", "cardInterpretation":"Keywords: Justice, fairness, truth, will for knowlegde, harmony between reality and instinct, objectivity, law"},
    {"cardName":"The Hermit", "cardInterpretation":"Keywords: Wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, being alone, inner guidance"},
    {"cardName":"Fortune", "cardInterpretation":"Keywords: Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point"},
    {"cardName":"Lust", "cardInterpretation":"Keywords: Joy of Strength Exercised, power, vitality, unconditional devotion, energy, passion, charisma, joy of life, courage, patience, control, compassion"},
    /*{"cardName":"The Hanged Man", "cardInterpretation":"Keywords: Overcoming the ego, changing life, a new perspective, patience, letting go, sacrifice for the higher good, acceptace of fate"},*/
    {"cardName":"Death", "cardInterpretation":"Keywords: Endings, beginnings, change, transformation and metamorphosis, transition"},
    {"cardName":"Art", "cardInterpretation":"Keywords: Balance and harmony, combining opposities in moderation, magic, creation, alchemy, purpose, meaning, temperance"},
    /*{"cardName":"The Devil", "cardInterpretation":"Keywords: Personal Power, intellect, never accepting dogma, independence, bondage, addiction, wilfulness, sexuality, materialism"},*/
    {"cardName":"The Higher Self", "cardInterpretation":"Keywords: Channeling, Clairvoyance, Divine Communication, Prophetic, Telepathic, Psychic Discernment, Extrasensory <br> Zodiac Influence: Jupiter in Gemini"},
    {"cardName":"The Tower", "cardInterpretation":"Keywords: Revelation, sudden change, upheaval, disaster, sudden realization of the truth, the will to change old ways"},
    {"cardName":"The Star", "cardInterpretation":"Keywords: Hope, spirituality, optimism, trust, renewal, inspiration, serenity"},
    {"cardName":"The Moon", "cardInterpretation":"Keywords: Subconscious, intuitivity, wisdom, maturity, confrontation with the dark side, illusion, fear, anxiety, insecurity"},
    {"cardName":"The Sun", "cardInterpretation":"Keywords: Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life"},
    {"cardName":"The New Aeon", "cardInterpretation":"Keywords: Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities"},
    {"cardName":"The Universe", "cardInterpretation":"Keywords: Culmination, completion, integration, accomplishment, travel, harmony between spirit and body"}    
];    
   



