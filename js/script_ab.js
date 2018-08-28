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

var deck = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח','ט', 'י', 'כ','ל', 'מ',
'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];

var deckInterpretation = [
    {"cardName":"א", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ב", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ג", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ד", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ה", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ו", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ז", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ח", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ט", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"י", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"כ", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ל", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"מ", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"נ", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ס", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ע", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"פ", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"צ", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ק", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ר", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ש", "cardInterpretation":"Keywords: TBD"},
    {"cardName":"ת", "cardInterpretation":"Keywords: TBD"}    
];    
   
