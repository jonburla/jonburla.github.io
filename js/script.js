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

'The Fool Reversed', 'The Magus Reversed', 'The Priestess Reversed', 'The Empress Reversed', 
'The Emperor Reversed', 'The Hierophant Reversed', 'The Lovers Reversed', 'The Chariot Reversed', 'Adjustment Reversed',
'The Hermit Reversed', 'Fortune Reversed', 'Lust Reversed', 'The Hanged Man Reversed', 'Death Reversed', 'Art Reversed',
'The Devil Reversed', 'The Tower Reversed', 'The Star Reversed', 'The Moon Reversed', 'The Sun Reversed', 'The Aeon Reversed',
'The Universe Reversed',

'Ace of Wands','Dominion', 'Virtue', 'Completion', 'Strife', 'Victory',
'Valor', 'Swiftness', 'Faith', 'Responsibility', 'Princess of Wands',
'Prince of Wands','Queen of Wands', 'Knight of Wands',

'Ace of Wands Reversed','Dominion Reversed', 'Virtue Reversed', 'Completion Reversed', 'Strife Reversed', 'Victory Reversed',
'Valor Reversed', 'Swiftness Reversed', 'Faith Reversed', 'Responsibility Reversed', 'Princess of Wands Reversed',
'Prince of Wands Reversed','Queen of Wands Reversed', 'Knight of Wands Reversed',

'Ace of Cups','Love', 'Abundance', 'Meditation', 'Disillusionment', 'Pleasure',
'Creation', 'Transmutation', 'Happiness', 'Satiety', 'Princess of Cups',
'Prince of Cups','Queen of Cups', 'Knight of Cups',

'Ace of Cups Reversed','Love Reversed', 'Abundance Reversed', 'Meditation Reversed', 'Disillusionment Reversed', 'Pleasure Reversed',
'Creation Reversed', 'Transmutation Reversed', 'Happiness Reversed', 'Satiety Reversed', 'Princess of Cups Reversed',
'Prince of Cups Reversed','Queen of Cups Reversed', 'Knight of Cups Reversed',

'Ace of Swords','Peace', 'Sorrow', 'Truce', 'Paradox', 'Science', 'Dexterity',
'Analysis', 'Ruin', 'Princess of Swords', 'Prince of Swords',
'Queen of Swords', 'Knight of Swords',

'Ace of Swords Reversed','Peace Reversed', 'Sorrow Reversed', 'Truce Reversed', 'Paradox Reversed', 'Science Reversed', 'Deception',
'Analysis Reversed', 'Ruin Reversed', 'Princess of Swords Reversed', 'Prince of Swords Reversed',
'Queen of Swords Reversed', 'Knight of Swords Reversed',

'Ace of Disks','Change', 'Works', 'Power', 'Anxiety', 'Success', 'Perseverance',
'Prudence', 'Gain', 'Wealth', 'Princess of Disks', 'Prince of Disks', 
'Queen of Disks', 'Knight of Disks',

'Ace of Disks Reversed','Change Reversed', 'Works Reversed', 'Power Reversed', 'Anxiety Reversed', 'Success Reversed', 'Perseverance Reversed',
'Prudence Reversed', 'Gain Reversed', 'Wealth Reversed', 'Princess of Disks Reversed', 'Prince of Disks Reversed', 
'Queen of Disks Reversed', 'Knight of Disks Reversed'];

var deckInterpretation = [
    {"cardName":"The Fool", "cardInterpretation":"Beginnings, optimism, trust to instincts, innocence, spontaneity, a free spirit"},
    {"cardName":"The Magus", "cardInterpretation":"the magician, law of attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, impulse, energy"},
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
    
    {"cardName":"The Fool Reversed", "cardInterpretation":"Beginnings, optimism, trust to instincts, innocence, spontaneity, a free spirit"},
    {"cardName":"The Magus Reversed", "cardInterpretation":"the magician, law of attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, impulse, energy"},
    {"cardName":"The Priestess Reversed","cardInterpretation": "Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind"},
    {"cardName":"The Empress Reversed", "cardInterpretation":"Creativity, maternity, love, trust, fulfilness, femininity, beauty, nature, abundance"},
    {"cardName":"The Emperor Reversed", "cardInterpretation":"Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, authority, father-figure, structure, solid foundation"},
    {"cardName":"The Hierophant Reversed", "cardInterpretation":"Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs"},
    {"cardName":"The Lovers Reversed", "cardInterpretation":"Love, union, relationships, trust, optimism, values alignment, choices"},
    {"cardName":"The Chariot Reversed", "cardInterpretation":"Control, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life"},
    {"cardName":"Adjustment Reversed", "cardInterpretation":"Justice, fairness, truth, will for knowlegde, harmony between reality and instinct, objectivity, law"},
    {"cardName":"The Hermit Reversed", "cardInterpretation":"Wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, being alone, inner guidance"},
    {"cardName":"Fortune Reversed", "cardInterpretation":"Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point"},
    {"cardName":"Lust Reversed", "cardInterpretation":"Power, vitality, unconditional devotion, energy, passion, charisma, joy of life, courage, patience, control, compassion"},
    {"cardName":"The Hanged Man Reversed", "cardInterpretation":"Overcoming the ego, changing life, a new perspective, patience, letting go, sacrifice for the higher good, acceptace of fate"},
    {"cardName":"Death Reversed", "cardInterpretation":"Endings, beginnings, change, transformation and metamorphosis, transition"},
    {"cardName":"Art Reversed", "cardInterpretation":"Balance and harmony, combining opposities in moderation, creation, alchemy, peace, purpose, meaning"},
    {"cardName":"The Devil Reversed", "cardInterpretation":"Bondage, addiction, independence, wilfulness, never accepting dogma, sexuality, materialism"},
    {"cardName":"The Tower Reversed", "cardInterpretation":"Disaster, upheaval, sudden change, revelation, sudden realization of the truth, the will to change old ways"},
    {"cardName":"The Star Reversed", "cardInterpretation":"Hope, spirituality, optimism, trust, renewal, inspiration, serenity"},
    {"cardName":"The Moon Reversed", "cardInterpretation":"Illusion, fear, anxiety, insecurity, subconscious, intuitivity, wisdom, maturity, confrontation with the dark side"},
    {"cardName":"The Sun Reversed", "cardInterpretation":"Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life"},
    {"cardName":"The Aeon Reversed", "cardInterpretation":"Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities"},
    {"cardName":"The Universe Reversed", "cardInterpretation":"Completion, integration, accomplishment, travel, harmony between spirit and body"},

    {"cardName":"Ace of Wands", "cardInterpretation":"Inspiration, power, creation, beginnings, potential <br> Zodiac Influences: Aries, Leo, Sagittarius"},
    {"cardName":"Dominion", "cardInterpretation":"Future planning, progress, decisions, discovery <br> Zodiac Influence: Mars in Aries"},
    {"cardName":"Virtue", "cardInterpretation":"Preparation, foresight, enterprise, expansion <br> Zodiac Influence: Sun in Aries"},
    {"cardName":"Completion", "cardInterpretation":"Celebration, harmony, marriage, home, community <br> Zodiac Influence: Venus in Aries"},
    {"cardName":"Strife", "cardInterpretation":"Disagreement, competition, tension, conflict <br> Zodiac Influence: Saturn in Leo"},
    {"cardName":"Victory", "cardInterpretation":"Public recognition, progress, self-confidence <br> Zodiac Influence: Jupiter in Leo"},
    /*updated 08/03/16*/{"cardName":"Valor", "cardInterpretation":"Challenge, competition, perseverance, initiation, rebirth <br> Zodiac Influence: Mars in Leo"},
    {"cardName":"Swiftness", "cardInterpretation":"Speed, action, air travel, movement, swift change <br> Zodiac Influence: Mercury in Sagittarius"},
    {"cardName":"Faith", "cardInterpretation":"Courage, persistence, test of faith, resilience <br> Zodiac Influence: Moon in Sagittarius"},
    {"cardName":"Responsibility", "cardInterpretation":"Burden, responsibility, hard work, stress <br> Zodiac Influence: Saturn in Sagittarius"},
    {"cardName":"Princess of Wands", "cardInterpretation":"Enthusiasm, exploration, discovery, free spirit <br> Elemental Influences: Earth / Fire"},
    {"cardName":"Prince of Wands", "cardInterpretation":"Energy, passion, lust, action, adventure, impulsiveness <br> Elemental Influences: Air / Fire"},
    {"cardName":"Queen of Wands", "cardInterpretation":"Exuberance, warmth, vibrancy, determination <br> Elemental Influences: Water / Fire"},
    {"cardName":"Knight of Wands", "cardInterpretation":"Natural-born leader, vision, entrepreneur, honour <br> Elemental Influences: Fire / Fire"},

    {"cardName":"Ace of Wands Reversed", "cardInterpretation":"Inspiration, power, creation, beginnings, potential <br> Zodiac Influences: Aries, Leo, Sagittarius"},
    {"cardName":"Dominion Reversed", "cardInterpretation":"Future planning, progress, decisions, discovery <br> Zodiac Influence: Mars in Aries"},
    {"cardName":"Virtue Reversed", "cardInterpretation":"Preparation, foresight, enterprise, expansion <br> Zodiac Influence: Sun in Aries"},
    {"cardName":"Completion Reversed", "cardInterpretation":"Celebration, harmony, marriage, home, community <br> Zodiac Influence: Venus in Aries"},
    {"cardName":"Strife Reversed", "cardInterpretation":"Disagreement, competition, tension, conflict <br> Zodiac Influence: Saturn in Leo"},
    {"cardName":"Victory Reversed", "cardInterpretation":"Public recognition, progress, self-confidence <br> Zodiac Influence: Jupiter in Leo"},
    /*updated 08/03/16*/{"cardName":"Valor Reversed", "cardInterpretation":"Giving up, feeling overwhemled, overly protective, embarassment, ignorance <br> Zodiac Influence: Mars in Leo"},
    {"cardName":"Swiftness Reversed", "cardInterpretation":"Speed, action, air travel, movement, swift change <br> Zodiac Influence: Mercury in Sagittarius"},
    {"cardName":"Faith Reversed", "cardInterpretation":"Courage, persistence, test of faith, resilience <br> Zodiac Influence: Moon in Sagittarius"},
    {"cardName":"Responsibility Reversed", "cardInterpretation":"Burden, responsibility, hard work, stress <br> Zodiac Influence: Saturn in Sagittarius"},
    {"cardName":"Princess of Wands Reversed", "cardInterpretation":"Enthusiasm, exploration, discovery, free spirit <br> Elemental Influences: Earth / Fire"},
    {"cardName":"Prince of Wands Reversed", "cardInterpretation":"Energy, passion, lust, action, adventure, impulsiveness <br> Elemental Influences: Air / Fire"},
    {"cardName":"Queen of Wands Reversed", "cardInterpretation":"Exuberance, warmth, vibrancy, determination <br> Elemental Influences: Water / Fire"},
    {"cardName":"Knight of Wands Reversed", "cardInterpretation":"Natural-born leader, vision, entrepreneur, honour <br> Elemental Influences: Fire / Fire"},
    
    {"cardName":"Ace of Cups", "cardInterpretation":"Love, compassion, creativity, overwhelming emotion <br> Zodiac Influences: Cancer, Scorpio, Pisces"},
    {"cardName":"Love", "cardInterpretation":"Unified love, partnership, attraction, relationships <br> Zodiac Influence: Venus in Cancer"},
    {"cardName":"Abundance", "cardInterpretation":"Celebration, friendship, creativity, community <br> Zodiac Influence: Mercury in Cancer"},
    {"cardName":"Meditation", "cardInterpretation":"Meditation, contemplation, apathy, re-evaluation <br> Zodiac Influence: Moon in Cancer"},
    {"cardName":"Disillusionment", "cardInterpretation":"Loss, regret, despair, bereavement <br> Zodiac Influence: Mars in Scorpio"},
    {"cardName":"Pleasure", "cardInterpretation":"Reunion, nostalgia, childhood memories, innocence <br> Zodiac Influence: Sun in Scorpio"},
    {"cardName":"Creation", "cardInterpretation":"Imagination, creativity, dreaming, fantasy, illusion <br> Zodiac Influence: Venus in Scorpio"},
    {"cardName":"Transmutation", "cardInterpretation":"Light: Revolution, resolution, moving forward, letting the past go <br> Darkness: Escapism, withdrawal, disappointment, abandonment <br> Zodiac Influence: Saturn in Pisces"},
    {"cardName":"Happiness", "cardInterpretation":"Wishes fulfilled, comfort, happiness, satisfaction <br> Zodiac Influence: Jupiter in Pisces"},
    {"cardName":"Satiety", "cardInterpretation":"Harmony, marriage, happiness, alignment <br> Zodiac Influence: Mars in Pisces"},
    {"cardName":"Princess of Cups", "cardInterpretation":"A messenger, creative beginnings, synchronicity <br> Elemental Influences: Earth / Water"},
    {"cardName":"Prince of Cups", "cardInterpretation":"Romance, charm, ‘Knight in shining armour’, imagination <br> Elemental Influences: Air / Water"},
    {"cardName":"Queen of Cups", "cardInterpretation":"Emotional security, calm, intuitive, compassionate<br>Elemental Influences: Water / Water"},
    {"cardName":"Knight of Cups", "cardInterpretation":"Emotional balance and control, generosity <br> Elemental Influences: Fire / Water"},

    {"cardName":"Ace of Cups Reversed", "cardInterpretation":"Love, compassion, creativity, overwhelming emotion <br> Zodiac Influences: Cancer, Scorpio, Pisces"},
    {"cardName":"Love Reversed", "cardInterpretation":"Unified love, partnership, attraction, relationships <br> Zodiac Influence: Venus in Cancer"},
    {"cardName":"Abundance Reversed", "cardInterpretation":"Celebration, friendship, creativity, community <br> Zodiac Influence: Mercury in Cancer"},
    {"cardName":"Meditation Reversed", "cardInterpretation":"Meditation, contemplation, apathy, re-evaluation <br> Zodiac Influence: Moon in Cancer"},
    {"cardName":"Disillusionment Reversed", "cardInterpretation":"Loss, regret, despair, bereavement <br> Zodiac Influence: Mars in Scorpio"},
    {"cardName":"Pleasure Reversed", "cardInterpretation":"Reunion, nostalgia, childhood memories, innocence <br> Zodiac Influence: Sun in Scorpio"},
    {"cardName":"Creation Reversed", "cardInterpretation":"Imagination, creativity, dreaming, fantasy, illusion <br> Zodiac Influence: Venus in Scorpio"},
    {"cardName":"Transmutation Reversed", "cardInterpretation":"Light: Revolution, resolution, moving forward, letting the past go <br> Darkness: Escapism, withdrawal, disappointment, abandonment <br> Zodiac Influence: Saturn in Pisces"},
    {"cardName":"Happiness Reversed", "cardInterpretation":"Wishes fulfilled, comfort, happiness, satisfaction <br> Zodiac Influence: Jupiter in Pisces"},
    {"cardName":"Satiety Reversed", "cardInterpretation":"Harmony, marriage, happiness, alignment <br> Zodiac Influence: Mars in Pisces"},
    {"cardName":"Princess of Cups Reversed", "cardInterpretation":"A messenger, creative beginnings, synchronicity <br> Elemental Influences: Earth / Water"},
    {"cardName":"Prince of Cups Reversed", "cardInterpretation":"Romance, charm, ‘Knight in shining armour’, imagination <br> Elemental Influences: Air / Water"},
    {"cardName":"Queen of Cups Reversed", "cardInterpretation":"Emotional security, calm, intuitive, compassionate<br>Elemental Influences: Water / Water"},
    {"cardName":"Knight of Cups Reversed", "cardInterpretation":"Emotional balance and control, generosity <br> Elemental Influences: Fire / Water"},
    
    {"cardName":"Ace of Swords", "cardInterpretation":"Raw power, victory, break-throughs, mental clarity <br> Zodiac Influences: Libra, Aquarius, Gemini"},
    {"cardName":"Peace", "cardInterpretation":"Indecision, choices, truce, stalemate, blocked emotions <br> Zodiac Influence: Moon in Libra"},
    {"cardName":"Sorrow", "cardInterpretation":"Painful separation, sorrow heartbreak, grief, rejection <br> Zodiac Influence: Saturn in Libra"},
    {"cardName":"Truce", "cardInterpretation":"Contemplation, recuperation, passivity, relaxation, rest <br> Zodiac Influence: Jupiter in Libra"},
    {"cardName":"Paradox", "cardInterpretation":"Equivocation, inconsistency, invalidity, fallacy, illogicality, delusion, intellectual crisis, struggling against fate, tension, loss<br> Zodiac Influence: Venus in Aquarius"},
    {"cardName":"Science", "cardInterpretation":"Success after anxiety and trouble, search for truth, regretful but necessary transition, rite of passage <br> Zodiac Influence: Mercury in Aquarius"},
    {"cardName":"Dexterity", "cardInterpretation":"Betrayal, deception, getting away with something, stealth, futility <br> Zodiac Influence: Moon in Aquarius"},
    /*{"cardName":"Indecision", "cardInterpretation":"Interference, isolation, self-imposed restriction, imprisonment <br> Zodiac Influence: Jupiter in Gemini"},*/
    {"cardName":"Analysis", "cardInterpretation":"Light: Investiation, dissection, scrutiny <br> Darkness: Depression, nightmares, intense anxiety, despair <br> Zodiac Influence: Mars in Gemini"},
    {"cardName":"Ruin", "cardInterpretation":"Back-stabbed, defeat, crisis, betrayal, endings, loss <br> Zodiac Influence: Sun in Gemini"},
    {"cardName":"Princess of Swords", "cardInterpretation":"Talkative, curious, mentally restless, energetic <br> Elemental Influences: Earth / Air"},
    {"cardName":"Prince of Swords", "cardInterpretation":"Idealism, intellectuall agility, creativity, richdom of ideas, intelligence, mastery of words <br> Elemental Influences: Air / Air "},
    {"cardName":"Queen of Swords", "cardInterpretation":"Quick thinker, organised, perceptive, independent <br> Elemental Influences: Water / Air"},
    {"cardName":"Knight of Swords", "cardInterpretation":"Clear thinking, intellectual power, authority, truth <br> Elemental Influences: Fire / Air"},

    {"cardName":"Ace of Swords Reversed", "cardInterpretation":"Raw power, victory, break-throughs, mental clarity <br> Zodiac Influences: Libra, Aquarius, Gemini"},
    {"cardName":"Peace Reversed", "cardInterpretation":"Indecision, choices, truce, stalemate, blocked emotions <br> Zodiac Influence: Moon in Libra"},
    {"cardName":"Sorrow Reversed", "cardInterpretation":"Painful separation, sorrow heartbreak, grief, rejection <br> Zodiac Influence: Saturn in Libra"},
    {"cardName":"Truce Reversed", "cardInterpretation":"Contemplation, recuperation, passivity, relaxation, rest <br> Zodiac Influence: Jupiter in Libra"},
    {"cardName":"Paradox Reversed", "cardInterpretation":"Equivocation, inconsistency, invalidity, fallacy, illogicality, delusion, intellectual crisis, struggling against fate, tension, loss<br> Zodiac Influence: Venus in Aquarius"},
    {"cardName":"Science Reversed", "cardInterpretation":"Success after anxiety and trouble, search for truth, regretful but necessary transition, rite of passage <br> Zodiac Influence: Mercury in Aquarius"},
    {"cardName":"Deception", "cardInterpretation":"Betrayal, deception, getting away with something, stealth, futility <br> Zodiacal Influence: Moon in Aquarius"},
    /*{"cardName":"Indecision Reversed", "cardInterpretation":"Interference, isolation, self-imposed restriction, imprisonment <br> Zodiac Influence: Jupiter in Gemini"},*/
    {"cardName":"Analysis Reversed", "cardInterpretation":"Light: Investiation, dissection, scrutiny <br> Darkness: Depression, nightmares, intense anxiety, despair <br> Zodiac Influence: Mars in Gemini"},
    {"cardName":"Ruin Reversed", "cardInterpretation":"Back-stabbed, defeat, crisis, betrayal, endings, loss <br> Zodiac Influence: Sun in Gemini"},
    {"cardName":"Princess of Swords Reversed", "cardInterpretation":"Talkative, curious, mentally restless, energetic <br> Elemental Influences: Earth / Air"},
    {"cardName":"Prince of Swords Reversed", "cardInterpretation":"Idealism, intellectuall agility, creativity, richdom of ideas, intelligence, mastery of words <br> Elemental Influences: Air / Air "},
    {"cardName":"Queen of Swords Reversed", "cardInterpretation":"Quick thinker, organised, perceptive, independent <br> Elemental Influences: Water / Air"},
    {"cardName":"Knight of Swords Reversed", "cardInterpretation":"Clear thinking, intellectual power, authority, truth <br> Elemental Influences: Fire / Air"},

    {"cardName":"Ace of Disks", "cardInterpretation":"Manifestation, new financial opportunity, prosperity <br> Zodiac Influences: Capricorn, Taurus, Virgo"},
    {"cardName":"Change", "cardInterpretation":"Balance, adaptability, time management, prioritisation <br> Zodiac Influence: Jupiter in Capricorn"},
    {"cardName":"Works", "cardInterpretation":"Teamwork, initial fulfilment, collaboration, learning <br> Zodiac Influence: Mars in Capricorn"},
    {"cardName":"Power", "cardInterpretation":"Control, stability, security, possession <br> Zodiac Influence: Sun in Capricorn"},
    {"cardName":"Anxiety", "cardInterpretation":"Isolation, insecurity, worry, financial loss, poverty <br> Zodiac Influence: Mercury in Taurus"},
    {"cardName":"Success", "cardInterpretation":"Generosity, charity, giving, prosperity, sharing wealth <br> Zodiac Influence: Moon in Taurus"},
    {"cardName":"Perseverance", "cardInterpretation":"Delays, undexpected setbacks, limited success or reward, perseverance, harvest to be reaped, profit, reward, investment <br> Zodiac Influence: Saturn in Taurus"},
    {"cardName":"Prudence", "cardInterpretation":"Apprenticeship, education, quality, engagement <br> Zodiac Influence: Sun in Virgo"},
    {"cardName":"Gain", "cardInterpretation":"Gratitude, luxury, self-sufficiency, culmination <br> Zodiac Influence: Venus in Virgo"},
    {"cardName":"Wealth", "cardInterpretation":"Wealth, inheritance, family, establishment, retirement <br> Zodiac Influence: Mercury in Virgo"},
    {"cardName":"Princess of Disks", "cardInterpretation":"Manifestation, financial opportunity, new job <br> Elemental Influences: Earth / Earth"},
    {"cardName":"Prince of Disks", "cardInterpretation":"Efficiency, routine, conservatism, methodical <br> Elemental Influences: Air / Earth"},
    {"cardName":"Queen of Disks", "cardInterpretation":"Kind, charming, great-hearted, truthful, stable, sensual <br> Elemental Influences: Water / Earth"},
    {"cardName":"Knight of Disks", "cardInterpretation":"Security, control, power, discipline, abundance <br> Elemental Influences: Fire / Earth"},

    {"cardName":"Ace of Disks Reversed", "cardInterpretation":"Manifestation, new financial opportunity, prosperity <br> Zodiac Influences: Capricorn, Taurus, Virgo"},
    {"cardName":"Change Reversed", "cardInterpretation":"Balance, adaptability, time management, prioritisation <br> Zodiac Influence: Jupiter in Capricorn"},
    {"cardName":"Works Reversed", "cardInterpretation":"Teamwork, initial fulfilment, collaboration, learning <br> Zodiac Influence: Mars in Capricorn"},
    {"cardName":"Power Reversed", "cardInterpretation":"Control, stability, security, possession <br> Zodiac Influence: Sun in Capricorn"},
    {"cardName":"Anxiety Reversed", "cardInterpretation":"Isolation, insecurity, worry, financial loss, poverty <br> Zodiac Influence: Mercury in Taurus"},
    {"cardName":"Success Reversed", "cardInterpretation":"Generosity, charity, giving, prosperity, sharing wealth <br> Zodiac Influence: Moon in Taurus"},
    {"cardName":"Perseverance Reversed", "cardInterpretation":"Delays, undexpected setbacks, limited success or reward, perseverance, harvest to be reaped, profit, reward, investment <br> Zodiac Influence: Saturn in Taurus"},
    {"cardName":"Prudence Reversed", "cardInterpretation":"Apprenticeship, education, quality, engagement <br> Zodiac Influence: Sun in Virgo"},
    {"cardName":"Gain Reversed", "cardInterpretation":"Gratitude, luxury, self-sufficiency, culmination <br> Zodiac Influence: Venus in Virgo"},
    {"cardName":"Wealth Reversed", "cardInterpretation":"Wealth, inheritance, family, establishment, retirement <br> Zodiac Influence: Mercury in Virgo"},
    {"cardName":"Princess of Disks Reversed", "cardInterpretation":"Manifestation, financial opportunity, new job <br> Elemental Influences: Earth / Earth"},
    {"cardName":"Prince of Disks Reversed", "cardInterpretation":"Efficiency, routine, conservatism, methodical <br> Elemental Influences: Air / Earth"},
    {"cardName":"Queen of Disks Reversed", "cardInterpretation":"Kind, charming, great-hearted, truthful, stable, sensual <br> Elemental Influences: Water / Earth"},
    {"cardName":"Knight of Disks Reversed", "cardInterpretation":"Security, control, power, discipline, abundance <br> Elemental Influences: Fire / Earth"}
];




