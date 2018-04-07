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

var deck = ['0. The Initiate', 'I. The Navi', 'II. The Shekhinah', 
'III. Sarah', 'IV. Avraham', 'V. Yitzchak', 'VI. Yacov', 'VII. Moshe',
'VIII. Aaron', 'IX. Yosef', 'X. David','XI. Persuasion', 'XII. Bitachon',
'XIII. Shift', 'XIV. Ruach', 'XV. Neshama','XVI. Chaya', 'XVII. The Star',
'XVIII. The Moon', 'XIX. The Sun', 'XX. Geulah', 'XXI. Yechida'];

var deckInterpretation = [
    {"cardName":"0. The Initiate", "cardInterpretation":"Keywords: Beginnings, optimism, trust in inner instincts, innocence, spontaneity, a free spirit <br> א: Tree of Life Pathway: כתר - חכמה"},
    {"cardName":"I. The Navi", "cardInterpretation":"Keywords: Law of Attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, solar impulse, energy <br> ב: Tree of Life Pathway: כתר - בינה‬"},
    {"cardName":"II. The Shekhinah","cardInterpretation": "Keywords: Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind <br> ג: Tree of Life Pathway: כתר - תפארת"},
    {"cardName":"III. Sarah", "cardInterpretation":"Keywords: Creativity, maternity, love, trust, fulfilness, femininity, beauty, nature, charm, attraction, grace, the joy of great abundance, Mother Nature <br> ד: Tree of Life Pathway: חכמה - בינה"},
    {"cardName":"IV. Avraham", "cardInterpretation":"Keywords: Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, authority, father-figure, solid foundation <br> צ: Tree of Life Pathway: נצח‎ - יסוד"},
    {"cardName":"V. Yitzchak", "cardInterpretation":"Keywords: Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs <br> ו: Tree of Life Pathway: חכמה - חסד"},
    {"cardName":"VI. Yacov", "cardInterpretation":"Keywords: Love, union, relationships, trust, optimism, values alignment, choices <br> ז: Tree of Life Pathway: בינה - תפארת‬"},
    {"cardName":"VII. Moshe", "cardInterpretation":"Keywords: Control, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life <br> ח: Tree of Life Pathway: בינה - גבורה‬"},
    {"cardName":"VIII. Aaron", "cardInterpretation":"Keywords: Adjustment, search for justice and fairness, a will for knowledge, search for harmony between the material and the spirutual, objectivity, discernment, law <br> ט: Tree of Life Pathway: גבורה - תפארת"},
    {"cardName":"IX. Yosef", "cardInterpretation":"Keywords: Foundation, wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, inner guidance <br> י: Tree of Life Pathway: חסד - תפארת"},
    {"cardName":"X. David", "cardInterpretation":"Keywords: Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point <br> כ: Tree of Life Pathway: חסד - נצח‎"},
    {"cardName":"XI. Persuasion", "cardInterpretation":"Keywords: Joy of strength exercised, vitality, unconditional devotion and energy, passion, charisma, courage, patience, control, compassion, enthusiasm for life <br> ל: Tree of Life Pathway: חסד - גבורה"},
    {"cardName":"XII. Bitachon", "cardInterpretation":"Keywords: Faith And TRUST In The Goodness Of God, the understanding that God loves me more than I love myself and that God knows what is best for me better than I do <br> מ: Tree of Life Pathway: גבורה - הוד"},
    {"cardName":"XIII. Shift", "cardInterpretation":"Keywords: Shift in conciousness, Death and Rebirth, Change, inner wisdom, making place for something new, transformation and metamorphosis, transition <br> נ: Tree of Life Pathway: תפארת - נצח‎"},
    {"cardName":"XIV. Ruach", "cardInterpretation":"Keywords: Balance and harmony, combining opposities in moderation, magic, creation, alchemy, purpose, meaning, temperance <br> ס: Tree of Life Pathway: תפארת - יסוד"},
    {"cardName":"XV. Neshama", "cardInterpretation":"Keywords: Channeling, clairvoyance, divine communication, prophetic, telepathic, psychic discernment, embodying the concept of continous creation in every moment <br> ע: Tree of Life Pathway: תפארת - הוד"},
    {"cardName":"XVI. Chaya", "cardInterpretation":"Keywords: An Encounter With Revelation, sudden change, upheaval, sudden realization of the truth, the will to change old ways <br> פ: Tree of Life Pathway: נצח‎ - הוד"},
    {"cardName":"XVII. The Star", "cardInterpretation":"Keywords: Hope, spirituality, optimism, trust, renewal, inspiration, serenity, unity, gratitude <br> ה: Tree of Life Pathway: חכמה - תפארת"},
    {"cardName":"XVIII. The Moon", "cardInterpretation":"Keywords: Talent, career, creativity, emotional satisfaction, intuition, celebrity, influence, honor, subconscious <br> ק: Tree of Life Pathway: נצח‎ - מלכות"},
    {"cardName":"XIX. The Sun", "cardInterpretation":"Keywords: Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life <br> ר: Tree of Life Pathway: הוד - יסוד"},
    {"cardName":"XX. Geulah", "cardInterpretation":"Keywords: Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities <br> ש: Tree of Life Pathway: הוד - מלכות"},
    {"cardName":"XXI. Yechida", "cardInterpretation":"Keywords: The Universe, enterity and completition, perfection, being home in one's self, inner independence, the 'mental paradise', accomplishment, travel, harmony between spirit and body <br> ת: Tree of Life Pathway: יסוד - מלכות"}    
];    
   



