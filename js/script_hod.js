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
'The Hermit', 'Fortune', 'Lust', 'Death', 'Art',
'The Tower', 'The Star', 'The Moon', 'The Sun', 'The New Aeon',
'The Universe',

'The Fool Needed', 'The Magician Needed', 'The Priestess Needed', 'The Empress Needed', 
'The Emperor Needed', 'The Hierophant Needed', 'The Lovers Needed', 'The Chariot Needed', 'Adjustment Needed',
'The Hermit Needed', 'Fortune Needed', 'Lust Needed', 'Death Needed', 'Art Needed', 'The Tower Needed',
'The Star Needed', 'The Moon Needed', 'The Sun Needed', 'The New Aeon Needed','The Universe Needed',

'Ace of Wands','Dominion', 'Virtue', 'Completion', 'Strife', 'Victory',
'Fortitude', 'Swiftness', 'Faith', 'Duty', 'Princess of Wands',
'Prince of Wands','Queen of Wands', 'Knight of Wands',

'Ace of Wands Needed','Dominion Needed', 'Virtue Needed', 'Completion Needed', 'Strife Resolving', 'Victory Needed',
'Defeatism', 'Swiftness Needed', 'Faith Needed', 'Duty Abandoned', 'Princess of Wands Needed',
'Prince of Wands Needed','Queen of Wands Needed', 'Knight of Wands Needed',

'Ace of Cups','Love', 'Abundance', 'Meditation', 'Disillusionment', 'Pleasure',
'Creation', 'Transmutation', 'Happiness', 'Satiety', 'Princess of Cups',
'Prince of Cups','Queen of Cups', 'Knight of Cups',

'Ace of Cups Needed','Love Needed', 'Abundance Needed', 'Meditation Needed', 'Disillusionment Resolving', 'Pleasure Needed',
'Illusion', 'Transmutation Needed', 'Happiness Needed', 'Satiety Needed', 'Princess of Cups Needed',
'Prince of Cups Needed','Queen of Cups Needed', 'Knight of Cups Needed',

'Ace of Swords','Peace', 'Sorrow', 'Truce', 'Paradox', 'Science', 'Divine Ingenuity',
'Divine Interference', 'Analysis', 'Trumpian Logic', 'Princess of Swords', 'Prince of Swords',
'Queen of Swords', 'Knight of Swords',

'Ace of Swords Needed','Peace Needed', 'Sorrow Needed', 'Truce Needed', 'Paradox Resolving',
'Science Needed', 'Dexterity', 'Interference', 'Analysis Needed', 'Trumpian Logic Resolving', 'Princess of Swords Needed',
'Prince of Swords Needed', 'Queen of Swords Needed', 'Knight of Swords Needed',

'Ace of Disks','Change', 'Deep Work', 'Power', 'Anxiety', 'Success', 'Perseverance',
'Apprenticeship', 'Gain', 'Wealth', 'Princess of Disks', 'Prince of Disks', 
'Queen of Disks', 'Knight of Disks',

'Ace of Disks Needed','Change Needed', 'Deep Work Needed', 'Power Needed', 'Anxiety Resolving', 'Success Needed', 'Failure',
'Apprenticeship Needed', 'Gain Needed', 'Wealth Needed', 'Princess of Disks Needed', 'Prince of Disks Needed', 
'Queen of Disks Needed', 'Knight of Disks Needed'];

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
    {"cardName":"The Tower", "cardInterpretation":"Keywords: Revelation, sudden change, upheaval, disaster, sudden realization of the truth, the will to change old ways"},
    {"cardName":"The Star", "cardInterpretation":"Keywords: Hope, spirituality, optimism, trust, renewal, inspiration, serenity"},
    {"cardName":"The Moon", "cardInterpretation":"Keywords: Subconscious, intuitivity, wisdom, maturity, confrontation with the dark side, illusion, fear, anxiety, insecurity"},
    {"cardName":"The Sun", "cardInterpretation":"Keywords: Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life"},
    {"cardName":"The New Aeon", "cardInterpretation":"Keywords: Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities"},
    {"cardName":"The Universe", "cardInterpretation":"Keywords: Culmination, completion, integration, accomplishment, travel, harmony between spirit and body"},    
    
    {"cardName":"The Fool Needed", "cardInterpretation":"Keywords: Beginnings, optimism, trust in inner instincts, innocence, spontaneity, a free spirit"},
    {"cardName":"The Magician Needed", "cardInterpretation":"Keywords: Law of Attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, solar impulse, energy"},
    {"cardName":"The Priestess Needed","cardInterpretation": "Keywords: Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind"},
    {"cardName":"The Empress Needed", "cardInterpretation":"Keywords: Creativity, maternity, love, trust, fulfilness, femininity, beauty, nature, abundance"},
    {"cardName":"The Emperor Needed", "cardInterpretation":"Keywords: Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, authority, father-figure, solid foundation"},
    {"cardName":"The Hierophant Needed", "cardInterpretation":"Keywords: Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs"},
    {"cardName":"The Lovers Needed", "cardInterpretation":"Keywords: Love, union, relationships, trust, optimism, values alignment, choices"},
    {"cardName":"The Chariot Needed", "cardInterpretation":"Keywords: Control, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life"},
    {"cardName":"Adjustment Needed", "cardInterpretation":"Keywords: Justice, fairness, truth, will for knowlegde, harmony between reality and instinct, objectivity, law"},
    {"cardName":"The Hermit Needed", "cardInterpretation":"Keywords: Wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, being alone, inner guidance"},
    {"cardName":"Fortune Needed", "cardInterpretation":"Keywords: Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point"},
    {"cardName":"Lust Needed", "cardInterpretation":"Keywords: Joy of Strength Exercised, power, vitality, unconditional devotion, energy, passion, charisma, joy of life, courage, patience, control, compassion"},
    /*{"cardName":"The Hanged Man Needed", "cardInterpretation":"Keywords: Overcoming the ego, changing life, a new perspective, patience, letting go, sacrifice for the higher good, acceptace of fate"},*/
    {"cardName":"Death Needed", "cardInterpretation":"Keywords: Endings, beginnings, change, transformation and metamorphosis, transition"},
    {"cardName":"Art Needed", "cardInterpretation":"Keywords: Balance and harmony, combining opposities in moderation, magic, creation, alchemy, purpose, meaning, temperance"},
    /*{"cardName":"The Devil Reversed", "cardInterpretation":"Keywords: Personal Power, intellect, never accepting dogma, independence, bondage, addiction, wilfulness, sexuality, materialism"},*/
    {"cardName":"The Tower Needed", "cardInterpretation":"Keywords: Revelation, sudden change, upheaval, disaster, sudden realization of the truth, the will to change old ways"},
    {"cardName":"The Star Needed", "cardInterpretation":"Keywords: Hope, spirituality, optimism, trust, renewal, inspiration, serenity"},
    {"cardName":"The Moon Needed", "cardInterpretation":"Keywords: Subconscious, intuitivity, wisdom, maturity, confrontation with the dark side, illusion, fear, anxiety, insecurity"},
    {"cardName":"The Sun Needed", "cardInterpretation":"Keywords: Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life"},
    {"cardName":"The New Aeon Needed", "cardInterpretation":"Keywords: Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities"},
    {"cardName":"The Universe Needed", "cardInterpretation":"Keywords: Culmination, completion, integration, accomplishment, travel, harmony between spirit and body"},        

    {"cardName":"Ace of Wands", "cardInterpretation":"Keywords: Inspiration, power, creation, beginnings, potential <br> Zodiac Influences: Aries, Leo, Sagittarius"},
    {"cardName":"Dominion", "cardInterpretation":"Keywords: Future planning, progress, decisions, discovery <br> Zodiac Influence: Mars in Aries"},
    {"cardName":"Virtue", "cardInterpretation":"Keywords: Preparation, foresight, enterprise, expansion <br> Zodiac Influence: Sun in Aries"},
    {"cardName":"Completion", "cardInterpretation":"Keywords: Celebration, harmony, marriage, home, community <br> Zodiac Influence: Venus in Aries"},
    {"cardName":"Strife", "cardInterpretation":"Keywords: Disagreement, competition, tension, conflict <br> Zodiac Influence: Saturn in Leo"},
    {"cardName":"Victory", "cardInterpretation":"Keywords: Public recognition, progress, self-confidence <br> Zodiac Influence: Jupiter in Leo"},
    {"cardName":"Fortitude", "cardInterpretation":"Keywords: Bravery, valor, challenge, competition, perseverance <br> Zodiac Influence: Mars in Leo"},
    {"cardName":"Swiftness", "cardInterpretation":"Keywords: Speed, action, air travel, movement, swift change <br> Zodiac Influence: Mercury in Sagittarius"},
    {"cardName":"Faith", "cardInterpretation":"Keywords: Courage, persistence, test of faith, resilience <br> Zodiac Influence: Moon in Sagittarius"},
    {"cardName":"Duty", "cardInterpretation":"Keywords: Commitment, responsibility, hard work, a blessing of Duty and Love [Swiftness] <br> Zodiac Influence: Saturn in Sagittarius"},
    {"cardName":"Princess of Wands", "cardInterpretation":"Personality: Enthusiasm, exploration, discovery, free spirit <br> Elemental Influences: Earth / Fire"},
    {"cardName":"Prince of Wands", "cardInterpretation":"Personality: Energy, passion, lust, action, adventure, impulsiveness, restless <br> Elemental Influences: Air / Fire"},
    {"cardName":"Queen of Wands", "cardInterpretation":"Personality: Exuberance, warmth, vibrancy, determination <br> Elemental Influences: Water / Fire"},
    {"cardName":"Knight of Wands", "cardInterpretation":"Personality: Natural-born leader, vision, entrepreneur, honour <br> Elemental Influences: Fire / Fire"},

    {"cardName":"Ace of Wands Needed", "cardInterpretation":"Keywords: Inspiration, power, creation, beginnings, potential <br> Zodiac Influences: Aries, Leo, Sagittarius"},
    {"cardName":"Dominion Needed", "cardInterpretation":"Keywords: Future planning, progress, decisions, discovery <br> Zodiac Influence: Mars in Aries"},
    {"cardName":"Virtue Needed", "cardInterpretation":"Keywords: Preparation, foresight, enterprise, expansion <br> Zodiac Influence: Sun in Aries"},
    {"cardName":"Completion Needed", "cardInterpretation":"Keywords: Celebration, harmony, marriage, home, community <br> Zodiac Influence: Venus in Aries"},
    {"cardName":"Strife Resolving", "cardInterpretation":"Keywords: Disagreement, competition, tension, conflict <br> Zodiac Influence: Saturn in Leo"},
    {"cardName":"Victory Needed", "cardInterpretation":"Keywords: Public recognition, progress, self-confidence <br> Zodiac Influence: Jupiter in Leo"},
    {"cardName":"Defeatism", "cardInterpretation":"Keywords: Bravery, valor, challenge, competition, perseverance <br> Zodiac Influence: Mars in Leo"},
    {"cardName":"Swiftness Needed", "cardInterpretation":"Keywords: Speed, action, air travel, movement, swift change <br> Zodiac Influence: Mercury in Sagittarius"},
    {"cardName":"Faith Needed", "cardInterpretation":"Keywords: Courage, persistence, test of faith, resilience <br> Zodiac Influence: Moon in Sagittarius"},
    {"cardName":"Duty Abandoned", "cardInterpretation":"Keywords: Commitment, responsibility, hard work, a blessing of Duty and Love [Swiftness] <br> Zodiac Influence: Saturn in Sagittarius"},
    {"cardName":"Princess of Wands Needed", "cardInterpretation":"Personality: Enthusiasm, exploration, discovery, free spirit <br> Elemental Influences: Earth / Fire"},
    {"cardName":"Prince of Wands Needed", "cardInterpretation":"Personality: Energy, passion, lust, action, adventure, impulsiveness, restless <br> Elemental Influences: Air / Fire"},
    {"cardName":"Queen of Wands Needed", "cardInterpretation":"Personality: Exuberance, warmth, vibrancy, determination <br> Elemental Influences: Water / Fire"},
    {"cardName":"Knight of Wands Needed", "cardInterpretation":"Personality: Natural-born leader, vision, entrepreneur, honour <br> Elemental Influences: Fire / Fire"},

    {"cardName":"Ace of Cups", "cardInterpretation":"Keywords: Love, compassion, creativity, overwhelming emotion <br> Zodiac Influences: Cancer, Scorpio, Pisces"},
    {"cardName":"Love", "cardInterpretation":"Keywords: Unified love, partnership, attraction, relationships <br> Zodiac Influence: Venus in Cancer"},
    {"cardName":"Abundance", "cardInterpretation":"Keywords: Celebration, friendship, creativity, community <br> Zodiac Influence: Mercury in Cancer"},
    {"cardName":"Meditation", "cardInterpretation":"Keywords: Meditation, contemplation, apathy, re-evaluation <br> Zodiac Influence: Moon in Cancer"},
    {"cardName":"Disillusionment", "cardInterpretation":"Keywords: Loss, regret, despair, bereavement <br> Zodiac Influence: Mars in Scorpio"},
    {"cardName":"Pleasure", "cardInterpretation":"Keywords: Reunion, nostalgia, childhood memories, innocence <br> Zodiac Influence: Sun in Scorpio"},
    {"cardName":"Creation", "cardInterpretation":"Keywords: Imagination, creativity, dreaming, fantasy, illusion <br> Zodiac Influence: Venus in Scorpio"},
    {"cardName":"Transmutation", "cardInterpretation":"Keywords: Revolution, resolution, moving forward, letting the past go, escapism, withdrawal, disappointment, abandonment <br> Zodiac Influence: Saturn in Pisces"},
    {"cardName":"Happiness", "cardInterpretation":"Keywords: Wishes fulfilled, comfort, happiness, satisfaction <br> Zodiac Influence: Jupiter in Pisces"},
    {"cardName":"Satiety", "cardInterpretation":"Keywords: Harmony, alignment of one's ideas reality and emotions, happiness, marriage <br> Zodiac Influence: Mars in Pisces"},
    {"cardName":"Princess of Cups", "cardInterpretation":"Personality: A messenger, creative beginnings, synchronicity <br> Elemental Influences: Earth / Water"},
    {"cardName":"Prince of Cups", "cardInterpretation":"Personality: Romance, charm, ‘Knight in shining armour’, imagination <br> Elemental Influences: Air / Water"},
    {"cardName":"Queen of Cups", "cardInterpretation":"Personality: Emotional security, calm, intuitive, compassionate<br>Elemental Influences: Water / Water"},
    {"cardName":"Knight of Cups", "cardInterpretation":"Personality: Emotional balance and control, generosity <br> Elemental Influences: Fire / Water"},

    {"cardName":"Ace of Cups Needed", "cardInterpretation":"Keywords: Love, compassion, creativity, overwhelming emotion <br> Zodiac Influences: Cancer, Scorpio, Pisces"},
    {"cardName":"Love Needed", "cardInterpretation":"Keywords: Unified love, partnership, attraction, relationships <br> Zodiac Influence: Venus in Cancer"},
    {"cardName":"Abundance Needed", "cardInterpretation":"Keywords: Celebration, friendship, creativity, community <br> Zodiac Influence: Mercury in Cancer"},
    {"cardName":"Meditation Needed", "cardInterpretation":"Keywords: Meditation, contemplation, apathy, re-evaluation <br> Zodiac Influence: Moon in Cancer"},
    {"cardName":"Disillusionment Resolving", "cardInterpretation":"Keywords: Loss, regret, despair, bereavement <br> Zodiac Influence: Mars in Scorpio"},
    {"cardName":"Pleasure Needed", "cardInterpretation":"Keywords: Reunion, nostalgia, childhood memories, innocence <br> Zodiac Influence: Sun in Scorpio"},
    {"cardName":"Illusion", "cardInterpretation":"Keywords: Imagination, creativity, dreaming, fantasy, illusion <br> Zodiac Influence: Venus in Scorpio"},
    {"cardName":"Transmutation Needed", "cardInterpretation":"Keywords: Revolution, resolution, moving forward, letting the past go, escapism, withdrawal, disappointment, abandonment <br> Zodiac Influence: Saturn in Pisces"},
    {"cardName":"Happiness Needed", "cardInterpretation":"Keywords: Wishes fulfilled, comfort, happiness, satisfaction <br> Zodiac Influence: Jupiter in Pisces"},
    {"cardName":"Satiety Needed", "cardInterpretation":"Keywords: Harmony, alignment of one's ideas reality and emotions, happiness, marriage <br> Zodiac Influence: Mars in Pisces"},
    {"cardName":"Princess of Cups Needed", "cardInterpretation":"Personality: A messenger, creative beginnings, synchronicity <br> Elemental Influences: Earth / Water"},
    {"cardName":"Prince of Cups Needed", "cardInterpretation":"Personality: Romance, charm, ‘Knight in shining armour’, imagination <br> Elemental Influences: Air / Water"},
    {"cardName":"Queen of Cups Needed", "cardInterpretation":"Personality: Emotional security, calm, intuitive, compassionate<br>Elemental Influences: Water / Water"},
    {"cardName":"Knight of Cups Needed", "cardInterpretation":"Personality: Emotional balance and control, generosity <br> Elemental Influences: Fire / Water"},
    
    {"cardName":"Ace of Swords", "cardInterpretation":"Keywords: Raw power, victory, break-throughs, mental clarity <br> Zodiac Influences: Libra, Aquarius, Gemini"},
    {"cardName":"Peace", "cardInterpretation":"Keywords: Peace, tranquility, follow-through, calm, internal debate, choices, truce, stalemate, blocked emotions <br> Zodiac Influence: Moon in Libra"},
    {"cardName":"Sorrow", "cardInterpretation":"Keywords: Understanding, development of an idea at a cost, painful separation, heartbreak, grief, Weltschmerz <br> Zodiac Influence: Saturn in Libra"},
    {"cardName":"Truce", "cardInterpretation":"Keywords: Passive power, stability in an idea, contemplation, recuperation, passivity, relaxation, rest <br> Zodiac Influence: Jupiter in Libra"},
    {"cardName":"Paradox", "cardInterpretation":"Keywords: Equivocation, inconsistency, temporary defeat, invalidity, fallacy, intellectual crisis, struggling against fate, tension, loss<br> Zodiac Influence: Venus in Aquarius"},
    {"cardName":"Science", "cardInterpretation":"Keywords: Success after anxiety and trouble, search for truth, regretful but necessary transition, rite of passage <br> Zodiac Influence: Mercury in Aquarius"},
    {"cardName":"Divine Ingenuity", "cardInterpretation":"Keywords: Dexterity, flexibility, forging one's destiny, deftness, finesse, going it alone, stealth, deception, betrayal, getting away with something <br> Zodiac Influence: Moon in Aquarius"},
    {"cardName":"Divine Interference", "cardInterpretation":"Zodiac Influence: Jupiter in Gemini"},
    {"cardName":"Analysis", "cardInterpretation":"Keywords: Investiation, dissection, scrutiny, analysis paralysis, depression, nightmares, cruelty, intense anxiety, despair <br> Zodiac Influence: Mars in Gemini"},
    {"cardName":"Trumpian Logic", "cardInterpretation":"'Alternative Facts', destruction of the intellect, logic of lunatics, reason divorced from reality, rejection of the life force, but, new dawn to follow this darkest hour of illogicality and destruction<br> Zodiac Influence: Sun in Gemini"},
    {"cardName":"Princess of Swords", "cardInterpretation":"Personality: Talkative, curious, mentally restless, energetic <br> Elemental Influences: Earth / Air"},
    {"cardName":"Prince of Swords", "cardInterpretation":"Personality: Idealism, intellectuall agility, creativity, richdom of ideas, intelligence, mastery of words <br> Elemental Influences: Air / Air "},
    {"cardName":"Queen of Swords", "cardInterpretation":"Personality: Quick thinker, organised, perceptive, independent <br> Elemental Influences: Water / Air"},
    {"cardName":"Knight of Swords", "cardInterpretation":"Personality: Investigator, clear thinker, master planner, intellectual power, authority figure <br> Elemental Influences: Fire / Air"},

    {"cardName":"Ace of Swords Needed", "cardInterpretation":"Keywords: Raw power, victory, break-throughs, mental clarity <br> Zodiac Influences: Libra, Aquarius, Gemini"},
    {"cardName":"Peace Needed", "cardInterpretation":"Keywords: Peace, tranquility, follow-through, calm, internal debate, choices, truce, stalemate, blocked emotions <br> Zodiac Influence: Moon in Libra"},
    {"cardName":"Sorrow Needed", "cardInterpretation":"Keywords: Understanding, development of an idea at a cost, painful separation, heartbreak, grief, Weltschmerz <br> Zodiac Influence: Saturn in Libra"},
    {"cardName":"Truce Needed", "cardInterpretation":"Keywords: Passive power, stability in an idea, contemplation, recuperation, passivity, relaxation, rest <br> Zodiac Influence: Jupiter in Libra"},
    {"cardName":"Paradox Resolving", "cardInterpretation":"Keywords: Equivocation, inconsistency, temporary defeat, invalidity, fallacy, intellectual crisis, struggling against fate, tension, loss<br> Zodiac Influence: Venus in Aquarius"},
    {"cardName":"Science Needed", "cardInterpretation":"Keywords: Success after anxiety and trouble, search for truth, regretful but necessary transition, rite of passage <br> Zodiac Influence: Mercury in Aquarius"},
    {"cardName":"Dexterity", "cardInterpretation":"Keywords: Dexterity, flexibility, forging one's destiny, deftness, finesse, going it alone, stealth, deception, betrayal, getting away with something <br> Zodiac Influence: Moon in Aquarius"},
    {"cardName":"Interference", "cardInterpretation":"Zodiac Influence: Jupiter in Gemini"},
    {"cardName":"Analysis Needed", "cardInterpretation":"Keywords: Investiation, dissection, scrutiny, analysis paralysis, depression, nightmares, cruelty, intense anxiety, despair <br> Zodiac Influence: Mars in Gemini"},
    {"cardName":"Trumpian Logic Resolving", "cardInterpretation":"'Alternative Facts', destruction of the intellect, logic of lunatics, reason divorced from reality, rejection of the life force, but, new dawn to follow this darkest hour of illogicality and destruction<br> Zodiac Influence: Sun in Gemini"},
    {"cardName":"Princess of Swords Needed", "cardInterpretation":"Personality: Talkative, curious, mentally restless, energetic <br> Elemental Influences: Earth / Air"},
    {"cardName":"Prince of Swords Needed", "cardInterpretation":"Personality: Idealism, intellectuall agility, creativity, richdom of ideas, intelligence, mastery of words <br> Elemental Influences: Air / Air "},
    {"cardName":"Queen of Swords Needed", "cardInterpretation":"Personality: Quick thinker, organised, perceptive, independent <br> Elemental Influences: Water / Air"},
    {"cardName":"Knight of Swords Needed", "cardInterpretation":"Personality: Investigator, clear thinker, master planner, intellectual power, authority figure <br> Elemental Influences: Fire / Air"},

    {"cardName":"Ace of Disks", "cardInterpretation":"Keywords: Manifestation, new financial opportunity, prosperity <br> Zodiac Influences: Capricorn, Taurus, Virgo"},
    {"cardName":"Change", "cardInterpretation":"Keywords: Balance, adaptability, time management, prioritisation <br> Zodiac Influence: Jupiter in Capricorn"},
    {"cardName":"Deep Work", "cardInterpretation":"Keywords: Teamwork, initial fulfilment, collaboration, learning <br> Zodiac Influence: Mars in Capricorn"},
    {"cardName":"Power", "cardInterpretation":"Keywords: Control, stability, security, possession <br> Zodiac Influence: Sun in Capricorn"},
    {"cardName":"Anxiety", "cardInterpretation":"Keywords: Isolation, insecurity, worry, financial loss, poverty <br> Zodiac Influence: Mercury in Taurus"},
    {"cardName":"Success", "cardInterpretation":"Keywords: Generosity, charity, giving, prosperity, sharing wealth <br> Zodiac Influence: Moon in Taurus"},
    {"cardName":"Perseverance", "cardInterpretation":"Keywords: Persevereance, determination, harvest to be reaped, profit, investment of energy and time, delays, undexpected setbacks, limited success or reward <br> Zodiac Influence: Saturn in Taurus"},
    {"cardName":"Apprenticeship", "cardInterpretation":"Keywords: Prudence, education, quality, engagement <br> Zodiac Influence: Sun in Virgo"},
    {"cardName":"Gain", "cardInterpretation":"Keywords: Gratitude, luxury, self-sufficiency, culmination <br> Zodiac Influence: Venus in Virgo"},
    {"cardName":"Wealth", "cardInterpretation":"Keywords: Wealth, inheritance, family, establishment, retirement <br> Zodiac Influence: Mercury in Virgo"},
    {"cardName":"Princess of Disks", "cardInterpretation":"Personality: Manifestation, financial opportunity, new job <br> Elemental Influences: Earth / Earth"},
    {"cardName":"Prince of Disks", "cardInterpretation":"Personality: Efficiency, routine, conservatism, methodical <br> Elemental Influences: Air / Earth"},
    {"cardName":"Queen of Disks", "cardInterpretation":"Personality: Kind, charming, great-hearted, truthful, stable, sensual <br> Elemental Influences: Water / Earth"},
    {"cardName":"Knight of Disks", "cardInterpretation":"Personality: Security, control, power, discipline, abundance <br> Elemental Influences: Fire / Earth"},

    {"cardName":"Ace of Disks Needed", "cardInterpretation":"Keywords: Manifestation, new financial opportunity, prosperity <br> Zodiac Influences: Capricorn, Taurus, Virgo"},
    {"cardName":"Change Needed", "cardInterpretation":"Keywords: Balance, adaptability, time management, prioritisation <br> Zodiac Influence: Jupiter in Capricorn"},
    {"cardName":"Deep Work Needed", "cardInterpretation":"Keywords: Teamwork, initial fulfilment, collaboration, learning <br> Zodiac Influence: Mars in Capricorn"},
    {"cardName":"Power Needed", "cardInterpretation":"Keywords: Control, stability, security, possession <br> Zodiac Influence: Sun in Capricorn"},
    {"cardName":"Anxiety Resolving", "cardInterpretation":"Keywords: Isolation, insecurity, worry, financial loss, poverty <br> Zodiac Influence: Mercury in Taurus"},
    {"cardName":"Success Needed", "cardInterpretation":"Keywords: Generosity, charity, giving, prosperity, sharing wealth <br> Zodiac Influence: Moon in Taurus"},
    {"cardName":"Failure", "cardInterpretation":"Keywords: Persevereance, determination, harvest to be reaped, profit, investment of energy and time, delays, undexpected setbacks, limited success or reward <br> Zodiac Influence: Saturn in Taurus"},
    {"cardName":"Apprenticeship Needed", "cardInterpretation":"Keywords: Prudence, education, quality, engagement <br> Zodiac Influence: Sun in Virgo"},
    {"cardName":"Gain Needed", "cardInterpretation":"Keywords: Gratitude, luxury, self-sufficiency, culmination <br> Zodiac Influence: Venus in Virgo"},
    {"cardName":"Wealth Needed", "cardInterpretation":"Keywords: Wealth, inheritance, family, establishment, retirement <br> Zodiac Influence: Mercury in Virgo"},
    {"cardName":"Princess of Disks Needed", "cardInterpretation":"Personality: Manifestation, financial opportunity, new job <br> Elemental Influences: Earth / Earth"},
    {"cardName":"Prince of Disks Needed", "cardInterpretation":"Personality: Efficiency, routine, conservatism, methodical <br> Elemental Influences: Air / Earth"},
    {"cardName":"Queen of Disks Needed", "cardInterpretation":"Personality: Kind, charming, great-hearted, truthful, stable, sensual <br> Elemental Influences: Water / Earth"},
    {"cardName":"Knight of Disks Needed", "cardInterpretation":"Personality: Security, control, power, discipline, abundance <br> Elemental Influences: Fire / Earth"}
];




