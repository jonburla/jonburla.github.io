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

var deck = ['The Initiate', 'The Magician', 'The Shekhinah', 
'Imma', 'Avraham', 'Yitzchak', 'Yacov', 'Moshe', 'Aaron', 'Yosef',
'David','Nefesh', 'Bitachon', 'Shift', 'Ruach', 'Neshama',
'Chaya', 'Yechida', 'The Moon', 'The Sun', 'Geulah', 'Hashem',

'Ace of Atziluth','Dominion', 'Virtue', 'Completion', 'Victory',
'Swiftness', 'Emmunah', 'Princess of Atziluth',
'Prince of Atziluth','Queen of Atziluth', 'Knight of Atziluth',

'Ace of Briah','Love', 'Abundance', 'Luxury', 'Pleasure', 
'Transmutation','Happiness', 'Satiety', 'Princess of Briah',
'Prince of Briah','Queen of Briah', 'Knight of Briah',

'Ace of Yetzirah','Peace', 'Truce', 'Science', 
'Divine Providence','Analysis', 'Princess of Yetzirah',
 'Prince of Yetzirah','Queen of Yetzirah', 'Knight of Yetzirah',

'Ace of Assiah','Change', 'Deep Work', 'Power', 'Success',
'Prudence', 'Gain', 'Wealth', 'Princess of Assiah', 
'Prince of Assiah', 'Queen of Assiah', 'Knight of Assiah'];

var deckInterpretation = [
    {"cardName":"The Initiate", "cardInterpretation":"Keywords: Beginnings, optimism, trust in inner instincts, innocence, spontaneity, a free spirit"},
    {"cardName":"The Magician", "cardInterpretation":"Keywords: Law of Attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, solar impulse, energy"},
    {"cardName":"The Shekhinah","cardInterpretation": "Keywords: Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind"},
    {"cardName":"Imma", "cardInterpretation":"Keywords: Creativity, maternity, love, trust, fulfilness, femininity, beauty, nature, abundance"},
    {"cardName":"Avraham", "cardInterpretation":"Keywords: Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, authority, father-figure, solid foundation"},
    {"cardName":"Yitzchak", "cardInterpretation":"Keywords: Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs"},
    {"cardName":"Yacov", "cardInterpretation":"Keywords: Love, union, relationships, trust, optimism, values alignment, choices"},
    {"cardName":"Moshe", "cardInterpretation":"Keywords: Control, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life"},
    {"cardName":"Aaron", "cardInterpretation":"Keywords: Justice, fairness, truth, will for knowlegde, harmony between reality and instinct, objectivity, law"},
    {"cardName":"Yosef", "cardInterpretation":"Keywords: Wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, being alone, inner guidance"},
    {"cardName":"David", "cardInterpretation":"Keywords: Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point"},
    {"cardName":"Nefesh", "cardInterpretation":"Keywords: Joy of Strength Exercised, power, vitality, unconditional devotion, energy, passion, charisma, joy of life, courage, patience, control, compassion"},
    {"cardName":"Bitachon", "cardInterpretation":"Keywords: Faith And TRUST In The Goodness Of God, the understanding that God loves me more than I love myself and that God knows what is best for me better than I do"},
    {"cardName":"Shift", "cardInterpretation":"Keywords: Shift in conciousness, endings, beginnings, change, transformation and metamorphosis, transition"},
    {"cardName":"Ruach", "cardInterpretation":"Keywords: Balance and harmony, combining opposities in moderation, magic, creation, alchemy, purpose, meaning, temperance"},
    {"cardName":"Neshama", "cardInterpretation":"Keywords: Divine Communication, Embodying The Concept Of Continous Creation In Every Moment Of Life (i.e. One Who Understands The True Meaning Of The Phrase Abracadabra) [Hashem]"},
    {"cardName":"Chaya", "cardInterpretation":"Keywords: An Encounter With Revelation, sudden change, upheaval, sudden realization of the truth, the will to change old ways"},
    {"cardName":"Yechida", "cardInterpretation":"Keywords: Hope, spirituality, optimism, trust, renewal, inspiration, serenity"},
    {"cardName":"The Moon", "cardInterpretation":"Keywords: Subconscious, intuitivity, wisdom, maturity, confrontation with the shadow"},
    {"cardName":"The Sun", "cardInterpretation":"Keywords: Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life"},
    {"cardName":"Geulah", "cardInterpretation":"Keywords: Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities"},
    {"cardName":"Hashem", "cardInterpretation":"Keywords: Culmination, completion, integration, accomplishment, travel, harmony between spirit and body"},    
    
    {"cardName":"Ace of Atziluth", "cardInterpretation":"Keywords: Inspiration, power, creation, beginnings, potential <br> Zodiac Influences: Aries, Leo, Sagittarius"},
    {"cardName":"Dominion", "cardInterpretation":"Keywords: Future planning, progress, decisions, discovery <br> Zodiac Influence: Mars in Aries"},
    {"cardName":"Virtue", "cardInterpretation":"Keywords: Preparation, foresight, enterprise, expansion <br> Zodiac Influence: Sun in Aries"},
    {"cardName":"Completion", "cardInterpretation":"Keywords: Celebration, harmony, marriage, home, community <br> Zodiac Influence: Venus in Aries"},
    {"cardName":"Victory", "cardInterpretation":"Keywords: Public recognition, progress, self-confidence <br> Zodiac Influence: Jupiter in Leo"},
    {"cardName":"Swiftness", "cardInterpretation":"Keywords: Speed, action, air travel, movement, swift change <br> Zodiac Influence: Mercury in Sagittarius"},
    {"cardName":"Emmunah", "cardInterpretation":"Keywords: Faith, courage, persistence, test of faith, resilience <br> Zodiac Influence: Moon in Sagittarius"},
    {"cardName":"Princess of Atziluth", "cardInterpretation":"Personality: Enthusiasm, exploration, discovery, free spirit <br> Elemental Influences: Earth / Fire"},
    {"cardName":"Prince of Atziluth", "cardInterpretation":"Personality: Energy, passion, lust, action, adventure, impulsiveness, restless <br> Elemental Influences: Air / Fire"},
    {"cardName":"Queen of Atziluth", "cardInterpretation":"Personality: Exuberance, warmth, vibrancy, determination <br> Elemental Influences: Water / Fire"},
    {"cardName":"Knight of Atziluth", "cardInterpretation":"Personality: Natural-born leader, vision, entrepreneur, honour <br> Elemental Influences: Fire / Fire"},
    
    {"cardName":"Ace of Briah", "cardInterpretation":"Keywords: Love, compassion, creativity, overwhelming emotion <br> Zodiac Influences: Cancer, Scorpio, Pisces"},
    {"cardName":"Love", "cardInterpretation":"Keywords: Unified love, partnership, attraction, relationships <br> Zodiac Influence: Venus in Cancer"},
    {"cardName":"Abundance", "cardInterpretation":"Keywords: Celebration, friendship, creativity, community <br> Zodiac Influence: Mercury in Cancer"},
    {"cardName":"Luxury", "cardInterpretation":"Keywords: Meditation, contemplation, apathy, re-evaluation <br> Zodiac Influence: Moon in Cancer"},
    {"cardName":"Pleasure", "cardInterpretation":"Keywords: Reunion, nostalgia, childhood memories, innocence <br> Zodiac Influence: Sun in Scorpio"},
    {"cardName":"Transmutation", "cardInterpretation":"Keywords: Revolution, resolution, moving forward, letting the past go <br> Zodiac Influence: Saturn in Pisces"},
    {"cardName":"Happiness", "cardInterpretation":"Keywords: Wishes fulfilled, comfort, happiness, satisfaction <br> Zodiac Influence: Jupiter in Pisces"},
    {"cardName":"Satiety", "cardInterpretation":"Keywords: Harmony, alignment of one's ideas reality and emotions, happiness, marriage <br> Zodiac Influence: Mars in Pisces"},
    {"cardName":"Princess of Briah", "cardInterpretation":"Personality: A messenger, creative beginnings, synchronicity <br> Elemental Influences: Earth / Water"},
    {"cardName":"Prince of Briah", "cardInterpretation":"Personality: Romance, charm, ‘Knight in shining armour’, imagination <br> Elemental Influences: Air / Water"},
    {"cardName":"Queen of Briah", "cardInterpretation":"Personality: Emotional security, calm, intuitive, compassionate<br>Elemental Influences: Water / Water"},
    {"cardName":"Knight of Briah", "cardInterpretation":"Personality: Emotional balance and control, generosity <br> Elemental Influences: Fire / Water"},
    
    {"cardName":"Ace of Yetzirah", "cardInterpretation":"Keywords: Raw power, victory, break-throughs, mental clarity <br> Zodiac Influences: Libra, Aquarius, Gemini"},
    {"cardName":"Peace", "cardInterpretation":"Keywords: Peace, tranquility, follow-through, calm, internal debate, choices, truce, stalemate, blocked emotions <br> Zodiac Influence: Moon in Libra"},
    {"cardName":"Truce", "cardInterpretation":"Keywords: Passive power, stability in an idea, contemplation, recuperation, passivity, relaxation, rest <br> Zodiac Influence: Jupiter in Libra"},
    {"cardName":"Science", "cardInterpretation":"Keywords: Success after anxiety and trouble, search for truth, regretful but necessary transition, rite of passage <br> Zodiac Influence: Mercury in Aquarius"},
    {"cardName":"Divine Providence", "cardInterpretation":"Keywords: Channeling, Clairvoyance, Divine Communication, Prophetic, Telepathic, Psychic Discernment, Extrasensory <br> Zodiac Influence: Jupiter in Gemini"},
    {"cardName":"Analysis", "cardInterpretation":"Keywords: Investiation, dissection, scrutiny, analysis paralysis, depression, nightmares, cruelty, intense anxiety, despair <br> Zodiac Influence: Mars in Gemini"},
    {"cardName":"Princess of Yetzirah", "cardInterpretation":"Personality: Talkative, curious, mentally restless, energetic <br> Elemental Influences: Earth / Air"},
    {"cardName":"Prince of Yetzirah", "cardInterpretation":"Personality: Idealism, intellectuall agility, creativity, richdom of ideas, intelligence, mastery of words <br> Elemental Influences: Air / Air "},
    {"cardName":"Queen of Yetzirah", "cardInterpretation":"Personality: Quick thinker, organised, perceptive, independent <br> Elemental Influences: Water / Air"},
    {"cardName":"Knight of Yetzirah", "cardInterpretation":"Personality: Investigator, clear thinker, master planner, intellectual power, authority figure <br> Elemental Influences: Fire / Air"},

    {"cardName":"Ace of Assiah", "cardInterpretation":"Keywords: Manifestation, new financial opportunity, prosperity <br> Zodiac Influences: Capricorn, Taurus, Virgo"},
    {"cardName":"Change", "cardInterpretation":"Keywords: Balance, adaptability, time management, prioritisation <br> Zodiac Influence: Jupiter in Capricorn"},
    {"cardName":"Deep Work", "cardInterpretation":"Keywords: Teamwork, initial fulfilment, collaboration, learning <br> Zodiac Influence: Mars in Capricorn"},
    {"cardName":"Power", "cardInterpretation":"Keywords: Control, stability, security, possession <br> Zodiac Influence: Sun in Capricorn"},
    {"cardName":"Success", "cardInterpretation":"Keywords: Generosity, charity, giving, prosperity, sharing wealth <br> Zodiac Influence: Moon in Taurus"},
    {"cardName":"Prudence", "cardInterpretation":"Keywords: Prudence, education, quality, engagement <br> Zodiac Influence: Sun in Virgo"},
    {"cardName":"Gain", "cardInterpretation":"Keywords: Gratitude, luxury, self-sufficiency, culmination <br> Zodiac Influence: Venus in Virgo"},
    {"cardName":"Wealth", "cardInterpretation":"Keywords: Wealth, inheritance, family, establishment, retirement <br> Zodiac Influence: Mercury in Virgo"},
    {"cardName":"Princess of Assiah", "cardInterpretation":"Personality: Manifestation, financial opportunity, new job <br> Elemental Influences: Earth / Earth"},
    {"cardName":"Prince of Assiah", "cardInterpretation":"Personality: Efficiency, routine, conservatism, methodical <br> Elemental Influences: Air / Earth"},
    {"cardName":"Queen of Assiah", "cardInterpretation":"Personality: Kind, charming, great-hearted, truthful, stable, sensual <br> Elemental Influences: Water / Earth"},
    {"cardName":"Knight of Assiah", "cardInterpretation":"Personality: Security, control, power, discipline, abundance <br> Elemental Influences: Fire / Earth"} 
];



