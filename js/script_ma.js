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

var deck = ['0. The Initiate', 'I. The Prophet', 'II. The Shekhinah', 
'III. Sarah', 'IV. Avraham', 'V. Yitzchak', 'VI. Yacov', 'VII. Moshe',
'VIII. Aaron', 'IX. Yosef', 'X. David','XI. Persuasion', 'XII. Bitachon',
'XIII. Shift', 'XIV. Ruach', 'XV. Neshama','XVI. Chaya', 'XVII. Yechida',
'XVIII. The Moon', 'XIX. The Sun', 'XX. Geulah', 'XXI. Hashem'];

var deckInterpretation = [
    {"cardName":"0. The Initiate", "cardInterpretation":"Keywords: Beginnings, optimism, trust in inner instincts, innocence, spontaneity, a free spirit <br> Tree of Life Pathway: כתר - חכמה"},
    {"cardName":"I. The Prophet", "cardInterpretation":"Keywords: Law of Attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, solar impulse, energy <br> Tree of Life Pathway: כתר - בינה‬"},
    {"cardName":"II. The Shekhinah","cardInterpretation": "Keywords: Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind <br> Tree of Life Pathway: כתר - תפארת"},
    {"cardName":"III. Sarah", "cardInterpretation":"Keywords: Creativity, maternity, love, trust, fulfilness, femininity, beauty, nature, abundance, charm, attraction, grace <br> Tree of Life Pathway: חכמה - בינה"},
    {"cardName":"IV. Avraham", "cardInterpretation":"Keywords: Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, authority, father-figure, solid foundation <br> Tree of Life Pathway: נצח‎ - יסוד"},
    {"cardName":"V. Yitzchak", "cardInterpretation":"Keywords: Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs <br> Tree of Life Pathway: חכמה - חסד"},
    {"cardName":"VI. Yacov", "cardInterpretation":"Keywords: Love, union, relationships, trust, optimism, values alignment, choices <br> Tree of Life Pathway: בינה - תפארת‬"},
    {"cardName":"VII. Moshe", "cardInterpretation":"Keywords: Control, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life <br> Tree of Life Pathway: בינה - גבורה‬"},
    {"cardName":"VIII. Aaron", "cardInterpretation":"Keywords: Adjustment, search for justice and fairness, a will for knowledge, search for harmony between the material and the spirutual, objectivity, discernment, law <br> Tree of Life Pathway: גבורה - תפארת"},
    {"cardName":"IX. Yosef", "cardInterpretation":"Keywords: Foundation, wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, inner guidance <br> Tree of Life Pathway: חסד - תפארת"},
    {"cardName":"X. David", "cardInterpretation":"Keywords: Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point <br> Tree of Life Pathway: חסד - נצח‎"},
    {"cardName":"XI. Persuasion", "cardInterpretation":"Keywords: Joy of strength exercised, vitality, unconditional devotion and energy, passion, charisma, courage, patience, control, compassion, enthusiasm for life <br> Tree of Life Pathway: חסד - גבורה"},
    {"cardName":"XII. Bitachon", "cardInterpretation":"Keywords: Faith And TRUST In The Goodness Of God, the understanding that God loves me more than I love myself and that God knows what is best for me better than I do <br> Tree of Life Pathway: גבורה - הוד"},
    {"cardName":"XIII. Shift", "cardInterpretation":"Keywords: Shift in conciousness, Death and Rebirth, Change, inner wisdom, making place for something new, transformation and metamorphosis, transition <br> Tree of Life Pathway: תפארת - נצח‎"},
    {"cardName":"XIV. Ruach", "cardInterpretation":"Keywords: Balance and harmony, combining opposities in moderation, magic, creation, alchemy, purpose, meaning, temperance <br> Tree of Life Pathway: תפארת - יסוד"},
    {"cardName":"XV. Neshama", "cardInterpretation":"Keywords: Divine Communication, Embodying The Concept Of Continous Creation In Every Moment Of Life (i.e. One Who Understands The True Meaning Of The Phrase Abracadabra) <br> Tree of Life Pathway: תפארת - הוד"},
    {"cardName":"XVI. Chaya", "cardInterpretation":"Keywords: An Encounter With Revelation, sudden change, upheaval, sudden realization of the truth, the will to change old ways <br> Tree of Life Pathway: נצח‎ - הוד"},
    {"cardName":"XVII. Yechida", "cardInterpretation":"Keywords: Hope, spirituality, optimism, trust, renewal, inspiration, serenity, unity, gratitude <br> Tree of Life Pathway: חכמה - תפארת"},
    {"cardName":"XVIII. The Moon", "cardInterpretation":"Keywords: Talent, career, creativity, emotional satisfaction, intuition, celebrity, influence, honor, subconscious <br> Tree of Life Pathway: נצח‎ - מלכות"},
    {"cardName":"XIX. The Sun", "cardInterpretation":"Keywords: Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life <br> Tree of Life Pathway: הוד - יסוד"},
    {"cardName":"XX. Geulah", "cardInterpretation":"Keywords: Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities <br> Tree of Life Pathway: הוד - מלכות"},
    {"cardName":"XXI. Hashem", "cardInterpretation":"Keywords: The Universe, Infinity, Perfection, Culmination, completion, integration, accomplishment, travel, harmony between spirit and body <br> Tree of Life Pathway: יסוד - מלכות"}    
];    
   



