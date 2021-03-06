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
'VIII. Aaron', 'IX. Yosef', 'X. David','XI. Persuasion', 'XII. Bitachon', 'XIII. Shift', 
'XIV. Ruach HaKodesh', 'XV. Addiction', 'XVI. The Tower', 'XVII. The Star',
'XVIII. The Moon', 'XIX. The Sun', 'XX. Geulah', 'XXI. Yechida',

'Kether in Atziluth','Dominion', 'Virtue', 'Completion', 'Strife', 'Victory', 'Valor',
'Swiftness', 'Emmunah', 'Commitment', 'Princess of Atziluth',
'Prince of Atziluth','Queen of Atziluth', 'Knight of Atziluth',

'Kether in Briah','Love', 'Abundance', 'Luxury', 'Disillusionment', 'Pleasure', 
'Creation','Transmutation','Happiness', 'Satiety', 'Princess of Briah',
'Prince of Briah','Queen of Briah', 'Knight of Briah',

'Kether in Yetzirah','Peace', 'Sorrow', 'Truce', 'Paradox', 'Science', 
'Ingenuity', 'Divine Providence', 'Analysis', 'Trumpian Logic', 'Princess of Yetzirah',
'Prince of Yetzirah','Queen of Yetzirah', 'Knight of Yetzirah',

'Kether in Assiah','Change', 'Deep Work', 'Power', 'Anxiety', 'Success',
'Perseverance', 'Prudence', 'Gain', 'Wealth', 'Princess of Assiah', 
'Prince of Assiah', 'Queen of Assiah', 'Knight of Assiah'];

var deckInterpretation = [
    {"cardName":"0. The Initiate", "cardInterpretation":"Keywords: Beginnings, optimism, trust in inner instincts, innocence, spontaneity, a free spirit, changes, movement, idealism <br> א: Tree of Life Pathway: כתר - חכמה"},
    {"cardName":"I. The Navi", "cardInterpretation":"Keywords: Law of Attraction, manifestation, power, skill, concentration, action, resourcefulness, activity, power of life, solar impulse, energy <br> ב: Tree of Life Pathway: כתר - בינה‬"},
    {"cardName":"II. The Shekhinah","cardInterpretation": "Keywords: Access to universal life force, intuition, higher knowledge and powers, mystery, subconscious mind <br> ג: Tree of Life Pathway: כתר - תפארת"},
    {"cardName":"III. Sarah", "cardInterpretation":"Keywords: Creativity, maternity, love, trust, femininity, beauty, nature, charm, attraction, grace, the joy of great abundance, mother nature <br> ד: Tree of Life Pathway: חכמה - בינה"},
    {"cardName":"IV. Avraham", "cardInterpretation":"Keywords: Mastery of the will over nature, a sense for law and order, plan and structure, creation, recognition, stability, realism, responsiveness, authority, father-figure, solid foundation <br> צ: Tree of Life Pathway: נצח‎ - יסוד"},
    {"cardName":"V. Yitzchak", "cardInterpretation":"Keywords: Search for hidden truths, trust in inner instincts, teacher, group identification, conformity, tradition, beliefs <br> ו: Tree of Life Pathway: חכמה - חסד"},
    {"cardName":"VI. Yacov", "cardInterpretation":"Keywords: Love, union, relationships, trust, optimism, values alignment, choices <br> ז: Tree of Life Pathway: בינה - תפארת‬"},
    {"cardName":"VII. Moshe", "cardInterpretation":"Keywords: Control, overcoming obstacles, the will to conquer, courage, victory, assertion, determination, the awakening of powers, the way ahead, searching and finding one's place in life <br> ח: Tree of Life Pathway: בינה - גבורה‬"},
    {"cardName":"VIII. Aaron", "cardInterpretation":"Keywords: Adjustment, search for justice and fairness, a will for knowledge, search for harmony between the material and the spirutual, objectivity, discernment, law <br> ט: Tree of Life Pathway: גבורה - תפארת"},
    {"cardName":"IX. Yosef", "cardInterpretation":"Keywords: Foundation, wisdom, realization, mental maturity, the inner light, soul-searching, introspection, retiring from life, inner guidance <br> י: Tree of Life Pathway: חסד - תפארת"},
    {"cardName":"X. David", "cardInterpretation":"Keywords: Good luck, karma, unexpected changings, fortune, realization of luck, life cycles, destiny, a turning point, motion, changing, resetting <br> כ: Tree of Life Pathway: חסד - נצח‎"},
    {"cardName":"XI. Persuasion", "cardInterpretation":"Keywords: Joy of strength exercised, vitality, unconditional devotion and energy, passion, charisma, courage, patience, control, compassion, enthusiasm for life <br> ל: Tree of Life Pathway: חסד - גבורה"},
    {"cardName":"XII. Bitachon", "cardInterpretation":"Keywords: Faith And TRUST In The Goodness Of God, the understanding that God loves me more than I love myself and that God knows what is best for me better than I do <br> מ: Tree of Life Pathway: גבורה - הוד"},
    {"cardName":"XIII. Shift", "cardInterpretation":"Keywords: Shift in conciousness, Death and Rebirth, Change, inner wisdom, making place for something new, transformation and metamorphosis, transition <br> נ: Tree of Life Pathway: תפארת - נצח‎"},
    {"cardName":"XIV. Ruach HaKodesh", "cardInterpretation":"Keywords: Balance and harmony, combining opposities in moderation, magic, creation, alchemy, purpose, meaning, temperance <br> ס: Tree of Life Pathway: תפארת - יסוד"},
    {"cardName":"XV. Addiction", "cardInterpretation":"Keywords: Bondage, addiction, sexuality, materialism, independence, wilfulness, never accepting dogma <br> ע: Tree of Life Pathway: תפארת - הוד"},
    {"cardName":"XVI. The Tower", "cardInterpretation":"Keywords: An Encounter With Revelation, sudden change, upheaval, sudden realization of the truth, the will to change old ways <br> פ: Tree of Life Pathway: נצח‎ - הוד"},
    {"cardName":"XVII. The Star", "cardInterpretation":"Keywords: Hope, spirituality, optimism, trust, renewal, inspiration, serenity, unity, gratitude <br> ה: Tree of Life Pathway: חכמה - תפארת"},
    {"cardName":"XVIII. The Moon", "cardInterpretation":"Keywords: Talent, career, creativity, emotional satisfaction, intuition, celebrity, influence, honor, subconscious <br> ק: Tree of Life Pathway: נצח‎ - מלכות"},
    {"cardName":"XIX. The Sun", "cardInterpretation":"Keywords: Vitality, generosity, warmth, selfconfidence, fun, success, positivity, love of life <br> ר: Tree of Life Pathway: הוד - יסוד"},
    {"cardName":"XX. Geulah", "cardInterpretation":"Keywords: Renewal, transformation, rebirth, inner calling, judgement, absolution, knowledge of coherences, widened perception and the liberation of hidden abilities <br> ש: Tree of Life Pathway: הוד - מלכות"},
    {"cardName":"XXI. Yechida", "cardInterpretation":"Keywords: The Universe, entirety and completition, perfection, being home in one's self, inner independence, the 'mental paradise', accomplishment, travel, harmony between spirit and body <br> ת: Tree of Life Pathway: יסוד - מלכות"},
    
    {"cardName":"Kether in Atziluth", "cardInterpretation":"Keywords: Illumination, inspiration, power, creation, beginnings, potential, spiritual hunger, energy, the wish to create <br> Zodiac Influences: Aries, Leo, Sagittarius"},
    {"cardName":"Dominion", "cardInterpretation":"Keywords: Application of the True Will, Future planning, progress, courage, determination, the will to conquer, decisions, discovery <br> Zodiac Influence: Mars in Aries"},
    {"cardName":"Virtue", "cardInterpretation":"Keywords: Preparation, foresight, enterprise, expansion, growth, development, opportunity, accomplishment, confidence, harmony of powers <br> Zodiac Influence: Sun in Aries"},
    {"cardName":"Completion", "cardInterpretation":"Keywords: Celebration, harmony, marriage, home, community, structure, rest after labor <br> Zodiac Influence: Venus in Aries"},
    {"cardName":"Strfe", "cardInterpretation":"Keywords: Refreshment, renewal, boldness, challenge, the will to break out, contest, struggle, conflict, rashness <br> Zodiac Influence: Saturn in Leo"},
    {"cardName":"Victory", "cardInterpretation":"Keywords: Public recognition, glory, progress, self-confidence, success through engery and industry <br> Zodiac Influence: Jupiter in Leo"},
    {"cardName":"Valor", "cardInterpretation":"Keywords: Initiation, rebirth, courage, fighting spirit, overcoming opposition, bravery, valor, challenge, competition <br> Zodiac Influence: Mars in Leo"},
    {"cardName":"Swiftness", "cardInterpretation":"Keywords: Flow, action, air travel, movement, swift change, rapid rush, ideas, creativity, motion, spiritual expanison, activities and energy speeding up, progression, development <br> Zodiac Influence: Mercury in Sagittarius"},
    {"cardName":"Emmunah", "cardInterpretation":"Keywords: Faith, courage, persistence, spiritual truth, test of faith, resilience, realization, great success but with strife and energy <br> Zodiac Influence: Moon in Sagittarius"},
    {"cardName":"Commitment", "cardInterpretation":"Keywords: Commitment, responsibility, hard work, a blessing of Duty and Love [Swiftness] <br> Zodiac Influence: Saturn in Sagittarius"},
    {"cardName":"Princess of Atziluth", "cardInterpretation":"Personality: Enthusiasm, exploration, discovery, free spirit, passion, joy of life, courage, beauty <br> Elemental Influences: Earth / Fire"},
    {"cardName":"Prince of Atziluth", "cardInterpretation":"Personality: Activity, energy, passion, action, creativity, adventure, swift, strong, impulsiveness, confidence, positivity <br> Elemental Influences: Air / Fire"},
    {"cardName":"Queen of Atziluth", "cardInterpretation":"Personality: Exuberance, warmth, vibrancy, determination, independence, honor, spiritual visons, passion, adaptability, motion and transformation <br> Elemental Influences: Water / Fire"},
    {"cardName":"Knight of Atziluth", "cardInterpretation":"Personality: Natural-born leader, vision, inspiration, entrepreneur, honour, spiritual activity, expansion of spiritual individuality, strong-willed, foresight <br> Elemental Influences: Fire / Fire"},
    
    {"cardName":"Kether in Briah", "cardInterpretation":"Keywords: Love, compassion, creativity, overwhelming emotion, intuition, psychic connection <br> Zodiac Influences: Cancer, Scorpio, Pisces"},
    {"cardName":"Love", "cardInterpretation":"Keywords: Unified love, partnership, attraction, relationships, unity in difference, harmony, friendship, passion <br> Zodiac Influence: Venus in Cancer"},
    {"cardName":"Abundance", "cardInterpretation":"Keywords: Celebration, friendship, creativity, community, healing, sensuality, conception, passive success, good luck and fortune <br> Zodiac Influence: Mercury in Cancer"},
    {"cardName":"Luxury", "cardInterpretation":"Keywords: Emotional richdom, stability of feelings, love without risk, maternity, protection, meditation <br> Zodiac Influence: Moon in Cancer"},
    {"cardName":"Disillusionment", "cardInterpretation":"Keywords: Loss, regret, despair, bereavement <br> Zodiac Influence: Mars in Scorpio"},
    {"cardName":"Pleasure", "cardInterpretation":"Keywords: Reunion, nostalgia, childhood memories, innocence <br> Zodiac Influence: Sun in Scorpio"},
    {"cardName":"Creation", "cardInterpretation":"Keywords: Imagination, creativity, dreaming, fantasy, illusion <br> Zodiac Influence: Venus in Scorpio"},
    {"cardName":"Transmutation", "cardInterpretation":"Keywords: Revolution, resolution, moving forward, letting the past go <br> Zodiac Influence: Saturn in Pisces"},
    {"cardName":"Happiness", "cardInterpretation":"Keywords: Wishes fulfilled, comfort, happiness, satisfaction <br> Zodiac Influence: Jupiter in Pisces"},
    {"cardName":"Satiety", "cardInterpretation":"Keywords: Harmony, alignment of one's ideas reality and emotions, happiness, marriage, search for inner completion and fulfilment, kindness, optimism, generosity <br> Zodiac Influence: Mars in Pisces"},
    {"cardName":"Princess of Briah", "cardInterpretation":"Personality: A messenger, creative beginnings, synchronicity, tenderness, fantasy <br> Elemental Influences: Earth / Water"},
    {"cardName":"Prince of Briah", "cardInterpretation":"Personality: Romance, charm, ‘Knight in shining armour’, compassion, warmth, love, artistic intentions, imagination <br> Elemental Influences: Air / Water"},
    {"cardName":"Queen of Briah", "cardInterpretation":"Personality: Emotional security and depth, calm, intuitive, compassionate, sensitivity, drifting between reality and dream <br>Elemental Influences: Water / Water"},
    {"cardName":"Knight of Briah", "cardInterpretation":"Personality: Emotional balance and control, generosity, healing, spiritual leader, self-redemption, grace, poetry, solicitousness <br> Elemental Influences: Fire / Water"},
    
    {"cardName":"Kether in Yetzirah", "cardInterpretation":"Keywords: Raw power, victory, break-throughs, mental clarity, invoked powers. whirling force of mind, realisation, logic, intellectual aspiration <br> Zodiac Influences: Libra, Aquarius, Gemini"},
    {"cardName":"Peace", "cardInterpretation":"High Vibraton Keywords: Peace, Tranquility, Calm, Follow-Through <br> Keywords: Internal Debate, Choices, Stalemate, Blocked Emotions <br> Zodiac Influence: Moon in Libra"},
    {"cardName":"Sorrow", "cardInterpretation":"Keywords: Understanding, development of an idea at a cost, painful separation, heartbreak, grief, Weltschmerz <br> Zodiac Influence: Saturn in Libra"},
    {"cardName":"Truce", "cardInterpretation":"Keywords: Passive power, stability in an idea, contemplation, recuperation, passivity, relaxation, rest <br> Zodiac Influence: Jupiter in Libra"},
    {"cardName":"Paradox", "cardInterpretation":"Keywords: Equivocation, inconsistency, temporary defeat, invalidity, fallacy, intellectual crisis, struggling against fate, tension, loss<br> Zodiac Influence: Venus in Aquarius"},
    {"cardName":"Science", "cardInterpretation":"Keywords: Success, search for and discovery of truth, progress, humanitarianism, rite of passage, all-embracing thinking, research <br> Zodiac Influence: Mercury in Aquarius"},
    {"cardName":"Ingenuity", "cardInterpretation":"Keywords: Dexterity, flexibility, forging one's destiny, deftness, finesse, going it alone, stealth, deception, betrayal, getting away with something <br> Zodiac Influence: Moon in Aquarius"},
    {"cardName":"Divine Providence", "cardInterpretation":"Keywords: Channeling, Clairvoyance, Divine Communication, Prophetic, Telepathic, Psychic Discernment, Extrasensory <br> Zodiac Influence: Jupiter in Gemini"},
    {"cardName":"Analysis", "cardInterpretation":"Keywords: Investigation, discernment, dissection, scrutiny <br> Zodiac Influence: Mars in Gemini"},
    {"cardName":"Trumpian Logic", "cardInterpretation":"'Alternative Facts', destruction of the intellect, logic of lunatics, reason divorced from reality, rejection of the life force, but, new dawn to follow this darkest hour of illogicality and destruction<br> Zodiac Influence: Sun in Gemini"},
    {"cardName":"Princess of Yetzirah", "cardInterpretation":"Personality: Talkative, curious, couragious, serious, energetic, impulsive <br> Elemental Influences: Earth / Air"},
    {"cardName":"Prince of Yetzirah", "cardInterpretation":"Personality: Idealism, intellectuall agility, creativity, richdom of ideas, intelligence, mastery of words <br> Elemental Influences: Air / Air "},
    {"cardName":"Queen of Yetzirah", "cardInterpretation":"Personality: Freedom of mind and soul, independence, wisdom, imagination, self-confidence, perceptive, graceful, quick thinker, organised <br> Elemental Influences: Water / Air"},
    {"cardName":"Knight of Yetzirah", "cardInterpretation":"Personality: Cutting-edge consciousnes, intelligent judgement, mental realizations, sharpness of mind, science, enlightenment, logic, investigator, master planner <br> Elemental Influences: Fire / Air"},

    {"cardName":"Kether in Assiah", "cardInterpretation":"Keywords: Manifestation, new financial opportunity, prosperity <br> Zodiac Influences: Capricorn, Taurus, Virgo"},
    {"cardName":"Change", "cardInterpretation":"Keywords: Growing, proceeding, flexibility, the start of a project, balance, adaptability, time management, prioritisation <br> Zodiac Influence: Jupiter in Capricorn"},
    {"cardName":"Deep Work", "cardInterpretation":"Keywords: Understanding, crystalization, teamwork, initial fulfilment, collaboration, learning, progress, increase of substance, manifestation <br> Zodiac Influence: Mars in Capricorn"},
    {"cardName":"Power", "cardInterpretation":"Keywords: Control, stability, security, safety, possession, establishment, wealth, financial foundation <br> Zodiac Influence: Sun in Capricorn"},
    {"cardName":"Anxiety", "cardInterpretation":"Keywords: Isolation, insecurity, worry, financial loss, poverty <br> Zodiac Influence: Mercury in Taurus"},
    {"cardName":"Success", "cardInterpretation":"Keywords: Generosity, charity, giving, prosperity, sharing wealth <br> Zodiac Influence: Moon in Taurus"},
    {"cardName":"Perseverance", "cardInterpretation":"Keywords: Persevereance, determination, harvest to be reaped, profit, investment of energy and time, delays, undexpected setbacks, limited success or reward <br> Zodiac Influence: Saturn in Taurus"},
    {"cardName":"Prudence", "cardInterpretation":"Keywords: Prudence, education, quality, engagement, realisation of coherences, ability to wait for the right moment <br> Zodiac Influence: Sun in Virgo"},
    {"cardName":"Gain", "cardInterpretation":"Keywords: Gratitude, luxury, self-sufficiency, culmination <br> Zodiac Influence: Venus in Virgo"},
    {"cardName":"Wealth", "cardInterpretation":"Keywords: Wealth, inheritance, family, establishment, retirement <br> Zodiac Influence: Mercury in Virgo"},
    {"cardName":"Princess of Assiah", "cardInterpretation":"Personality: Manifestation, financial opportunity, new job, creation, growth, birth, faith, sensitivity, concentration <br> Elemental Influences: Earth / Earth"},
    {"cardName":"Prince of Assiah", "cardInterpretation":"Personality: Efficiency, routine, conservatism, methodical, industrious, enduring, reliable, practcal, reasonable, careful <br> Elemental Influences: Air / Earth"},
    {"cardName":"Queen of Assiah", "cardInterpretation":"Personality: Practical, security, kind, charming, great-hearted, truthful, stable, sensual, fertility, womanliness, security for family, home and materials  <br> Elemental Influences: Water / Earth"},
    {"cardName":"Knight of Assiah", "cardInterpretation":"Personality: Security, control, power, discipline, abundance, strive for material success and wealth, clever in material matters, patient, industrious <br> Elemental Influences: Fire / Earth"} 
];