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

var deck = ['The Initiate', 'The Prophet', 'The Shekhinah', 
'Sarah', 'Avraham', 'Yitzchak', 'Yacov', 'Moshe', 'VIII. Aaron', 'Yosef',
'David','Persuasion', 'Bitachon', 'Shift', 'Ruach', 'Neshama',
'Chaya', 'Yechida', 'The Moon', 'The Sun', 'Geulah', 'Hashem'];

var deckInterpretation = [
    {"cardName":"The Initiate", "cardInterpretation":"Keywords: Beginnings, optimism, trust in inner instincts, innocence, spontaneity, a free spirit"},
    {"cardName":"The Prophet", "cardInterpretation":"Keywords: Law of Attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, solar impulse, energy"},
    {"cardName":"The Shekhinah","cardInterpretation": "Keywords: Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind"},
    {"cardName":"Sarah", "cardInterpretation":"Keywords: Creativity, maternity, love, trust, fulfilness, femininity, beauty, nature, abundance, charm, attraction, grace"},
    {"cardName":"Avraham", "cardInterpretation":"Keywords: Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, authority, father-figure, solid foundation"},
    {"cardName":"Yitzchak", "cardInterpretation":"Keywords: Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs"},
    {"cardName":"Yacov", "cardInterpretation":"Keywords: Love, union, relationships, trust, optimism, values alignment, choices"},
    {"cardName":"Moshe", "cardInterpretation":"Keywords: Control, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life"},
    {"cardName":"VIII. Aaron", "cardInterpretation":"Keywords: Adjustment, search for justice and fairness, a will for knowledge, search for harmony between the material and the spirutual, objectivity, discernment, law"},
    {"cardName":"Yosef", "cardInterpretation":"Keywords: Wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, being alone, inner guidance"},
    {"cardName":"David", "cardInterpretation":"Keywords: Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point"},
    {"cardName":"Persuasion", "cardInterpretation":"Keywords: Joy of strength exercised, vitality, unconditional devotion and energy, passion, charisma, courage, patience, control, compassion"},
    {"cardName":"Bitachon", "cardInterpretation":"Keywords: Faith And TRUST In The Goodness Of God, the understanding that God loves me more than I love myself and that God knows what is best for me better than I do"},
    {"cardName":"Shift", "cardInterpretation":"Keywords: Shift in conciousness, endings, beginnings, change, transformation and metamorphosis, transition"},
    {"cardName":"Ruach", "cardInterpretation":"Keywords: Balance and harmony, combining opposities in moderation, magic, creation, alchemy, purpose, meaning, temperance"},
    {"cardName":"Neshama", "cardInterpretation":"Keywords: Divine Communication, Embodying The Concept Of Continous Creation In Every Moment Of Life (i.e. One Who Understands The True Meaning Of The Phrase Abracadabra)"},
    {"cardName":"Chaya", "cardInterpretation":"Keywords: An Encounter With Revelation, sudden change, upheaval, sudden realization of the truth, the will to change old ways"},
    {"cardName":"Yechida", "cardInterpretation":"Keywords: Hope, spirituality, optimism, trust, renewal, inspiration, serenity, unity, gratitude"},
    {"cardName":"The Moon", "cardInterpretation":"Keywords: Talent, career, creativity, emotional satisfaction, intuition, celebrity, influence, honor, subconscious"},
    {"cardName":"The Sun", "cardInterpretation":"Keywords: Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life"},
    {"cardName":"Geulah", "cardInterpretation":"Keywords: Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities"},
    {"cardName":"Hashem", "cardInterpretation":"Keywords: The Universe, Infinity, Perfection, Culmination, completion, integration, accomplishment, travel, harmony between spirit and body"}    
];    
   



