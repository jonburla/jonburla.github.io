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

var deck = ['The Fool', 'The Magus', 'The Priestess', 'The Empress', 
'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Adjustment',
'The Hermit', 'Fortune', 'Lust', 'The Hanged Man', 'Death', 'Art',
'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'The Aeon',
'The Universe',

'Ace of Wands','Dominion', 'Virtue', 'Completion', 'Strife', 'Victory',
'Valor', 'Swiftness', 'Strength', 'Oppression', 'Princess of Wands',
'Prince of Wands','Queen of Wands', 'Knight of Wands',

'Ace of Cups','Love', 'Abundance', 'Luxury', 'Disappointment', 'Pleasure',
'Debauch', 'Indolence', 'Happiness', 'Satiety', 'Princess of Cups',
'Prince of Cups','Queen of Cups', 'Knight of Cups',

'Ace of Swords','Peace', 'Sorrow', 'Truce', 'Defeat', 'Science', 'Futility', 
'Interference', 'Cruelty', 'Ruin', 'Princess of Swords', 'Prince of Swords',
'Queen of Swords', 'Knight of Swords',

'Ace of Disks','Change', 'Works', 'Power', 'Worry', 'Success', 'Failure',
'Prudence', 'Gain', 'Wealth', 'Princess of Disks', 'Prince of Disks', 
'Queen of Disks', 'Knight of Disks'];

var deckInterpretation = [
    {"cardName":"The Fool", "cardInterpretation":"Beginnings, optimism, trust to instincts, innocence, spontaneity, a free spirit"},
    {"cardName":"The Magus", "cardInterpretation":"Law of attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, impulse, energy"},
    {"cardName":"The Priestess","cardInterpretation": "Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind"},
    {"cardName":"The Empress", "cardInterpretation":"Creativity, maternity, love, trust, fulfilness, femininity, beauty, nature, abundance"},
    {"cardName":"The Emperor", "cardInterpretation":"Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, authority, father-figure, structure, solid foundation"},
    {"cardName":"The Hierophant", "cardInterpretation":"Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs"},
    {"cardName":"The Lovers", "cardInterpretation":"Love, union, relationships, trust, optimism, values alignment, choices"},
    {"cardName":"The Chariot", "cardInterpretation":"Control, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life"},
    {"cardName":"Adjustment", "cardInterpretation":"Justice, fairness, truth, will for knowlegde, harmony between reality and instinct, objectivity, law"},
    {"cardName":"The Hermit", "cardInterpretation":"Wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, being alone, inner guidance"},
    {"cardName":"Fortune", "cardInterpretation":"Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point"},
    {"cardName":"Lust", "cardInterpretation":"Power, vitality, unconditional devotion, energy, passion, charisma, joy of life, courage, patience, control, compassion"},
    {"cardName":"The Hanged Man", "cardInterpretation":"Overcoming the ego, changing life, a new perspective, patience, letting go, sacrifice for the higher good, acceptace of fate"},
    {"cardName":"Death", "cardInterpretation":"Endings, beginnings, change, transformation and metamorphosis, transition"},
    {"cardName":"Art", "cardInterpretation":"Balance and harmony, combining opposities in moderation, creation, alchemy, peace, purpose, meaning"},
    {"cardName":"The Devil", "cardInterpretation":"Bondage, addiction, independence, wilfulness, never accepting dogma, sexuality, materialism"},
    {"cardName":"The Tower", "cardInterpretation":"Disaster, upheaval, sudden change, revelation, sudden realization of the truth, the will to change old ways"},
    {"cardName":"The Star", "cardInterpretation":"Hope, spirituality, optimism, trust, renewal, inspiration, serenity"},
    {"cardName":"The Moon", "cardInterpretation":"Illusion, fear, anxiety, insecurity, subconscious, intuitivity, wisdom, maturity, confrontation with the dark side"},
    {"cardName":"The Sun", "cardInterpretation":"Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life"},
    {"cardName":"The Aeon", "cardInterpretation":"Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities"},
    {"cardName":"The Universe", "cardInterpretation":"Completion, integration, accomplishment, travel, harmony between spirit and body"},
    
    {"cardName":"Ace of Wands", "cardInterpretation":"Inspiration, power, creation, beginnings, potential"},
    {"cardName":"Dominion", "cardInterpretation":"Future planning, progress, decisions, discovery"},
    {"cardName":"Virtue", "cardInterpretation":"Preparation, foresight, enterprise, expansion"},
    {"cardName":"Completion", "cardInterpretation":"Celebration, harmony, marriage, home, community"},
    {"cardName":"Strife", "cardInterpretation":"Disagreement, competition, tension, conflict"},
    {"cardName":"Victory", "cardInterpretation":"Public recognition, progress, self-confidence"},
    {"cardName":"Valor", "cardInterpretation":"Challenge, competition, perseverance"},
    {"cardName":"Swiftness", "cardInterpretation":"Speed, action, air travel, movement, swift change"},
    {"cardName":"Strength", "cardInterpretation":"Courage, persistence, test of faith, resilience"},
    {"cardName":"Oppression", "cardInterpretation":"Burden, responsibility, hard work, stress"},
    {"cardName":"Princess of Wands", "cardInterpretation":"Enthusiasm, exploration, discovery, free spirit <br> Elemental Influences: Earth / Fire"},
    {"cardName":"Prince of Wands", "cardInterpretation":"Energy, passion, lust, action, adventure, impulsiveness <br> Elemental Influences: Air / Fire"},
    {"cardName":"Queen of Wands", "cardInterpretation":"Exuberance, warmth, vibrancy, determination <br> Elemental Influences: Water / Fire"},
    {"cardName":"Knight of Wands", "cardInterpretation":"Natural-born leader, vision, entrepreneur, honour <br> Elemental Influences: Fire / Fire"},
    
    {"cardName":"Ace of Cups", "cardInterpretation":"Love, compassion, creativity, overwhelming emotion"},
    {"cardName":"Love", "cardInterpretation":"Unified love, partnership, attraction, relationships"},
    {"cardName":"Abundance", "cardInterpretation":"Celebration, friendship, creativity, community"},
    {"cardName":"Luxury", "cardInterpretation":"Meditation, contemplation, apathy, re-evaluation"},
    {"cardName":"Disappointment", "cardInterpretation":"Loss, regret, despair, bereavement"},
    {"cardName":"Pleasure", "cardInterpretation":"Reunion, nostalgia, childhood memories, innocence"},
    {"cardName":"Debauch", "cardInterpretation":"Fantasy, illusion, wishful thinking, choices, imagination"},
    {"cardName":"Indolence", "cardInterpretation":"Escapism, disappointment, abandonment, withdrawal"},
    {"cardName":"Happiness", "cardInterpretation":"Wishes fulfilled, comfort, happiness, satisfaction"},
    {"cardName":"Satiety", "cardInterpretation":"Harmony, marriage, happiness, alignment"},
    {"cardName":"Princess of Cups", "cardInterpretation":"A messenger, creative beginnings, synchronicity <br> Elemental Influences: Earth / Water"},
    {"cardName":"Prince of Cups", "cardInterpretation":"Romance, charm, ‘Knight in shining armour’, imagination <br> Elemental Influences: Air / Water"},
    {"cardName":"Queen of Cups", "cardInterpretation":"Emotional security, calm, intuitive, compassionate<br>Elemental Influences: Water / Water"},
    {"cardName":"Knight of Cups", "cardInterpretation":"Emotional balance and control, generosity <br> Elemental Influences: Fire / Water"},
    
    {"cardName":"Ace of Swords", "cardInterpretation":"Raw power, victory, break-throughs, mental clarity"},
    {"cardName":"Peace", "cardInterpretation":"Indecision, choices, truce, stalemate, blocked emotions"},
    {"cardName":"Sorrow", "cardInterpretation":"Painful separation, sorrow heartbreak, grief, rejection"},
    {"cardName":"Truce", "cardInterpretation":"Contemplation, recuperation, passivity, relaxation, rest"},
    {"cardName":"Defeat", "cardInterpretation":"Intellectual crisis, struggling against fate, realisation of limitations and restrictions, conflict, tension, loss, win at all costs, betrayal"},
    {"cardName":"Science", "cardInterpretation":"Success after anxiety and trouble, search for truth, regretful but necessary transition, rite of passage"},
    {"cardName":"Futility", "cardInterpretation":"Betrayal, deception, getting away with something, stealth"},
    {"cardName":"Interference", "cardInterpretation":"Isolation, self-imposed restriction, imprisonment"},
    {"cardName":"Cruelty", "cardInterpretation":"Depression, nightmares, intense anxiety, despair"},
    {"cardName":"Ruin", "cardInterpretation":"Back-stabbed, defeat, crisis, betrayal, endings, loss"},
    {"cardName":"Princess of Swords", "cardInterpretation":"Talkative, curious, mentally restless, energetic <br> Elemental Influences: Earth / Air"},
    {"cardName":"Prince of Swords", "cardInterpretation":"Idealism, intellectuall agility, creativity, richdom of ideas, intelligence, mastery of words <br> Elemental Influences: Air / Air "},
    {"cardName":"Queen of Swords", "cardInterpretation":"Quick thinker, organised, perceptive, independent <br> Elemental Influences: Water / Air"},
    {"cardName":"Knight of Swords", "cardInterpretation":"Clear thinking, intellectual power, authority, truth <br> Elemental Influences: Fire / Air"},

    {"cardName":"Ace of Disks", "cardInterpretation":"Manifestation, new financial opportunity, prosperity"},
    {"cardName":"Change", "cardInterpretation":"Balance, adaptability, time management, prioritisation"},
    {"cardName":"Works", "cardInterpretation":"Teamwork, initial fulfilment, collaboration, learning"},
    {"cardName":"Power", "cardInterpretation":"Control, stability, security, possession"},
    {"cardName":"Worry", "cardInterpretation":"Isolation, insecurity, worry, financial loss, poverty"},
    {"cardName":"Success", "cardInterpretation":"Generosity, charity, giving, prosperity, sharing wealth"},
    {"cardName":"Failure", "cardInterpretation":"delays, undexpected setbacks, limited success or reward, perseverance, harvest to be reaped, profit, reward, investment"},
    {"cardName":"Prudence", "cardInterpretation":"Apprenticeship, education, quality, engagement"},
    {"cardName":"Gain", "cardInterpretation":"Gratitude, luxury, self-sufficiency, culmination"},
    {"cardName":"Wealth", "cardInterpretation":"Wealth, inheritance, family, establishment, retirement"},
    {"cardName":"Princess of Disks", "cardInterpretation":"Manifestation, financial opportunity, new job <br> Elemental Influences: Earth / Earth"},
    {"cardName":"Prince of Disks", "cardInterpretation":"Efficiency, routine, conservatism, methodical <br> Elemental Influences: Air / Earth"},
    {"cardName":"Queen of Disks", "cardInterpretation":"Kind, charming, great-hearted, truthful, stable, sensual <br> Elemental Influences: Water / Earth"},
    {"cardName":"Knight of Disks", "cardInterpretation":"Security, control, power, discipline, abundance <br> Elemental Influences: Fire / Earth"}
];




