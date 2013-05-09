
//main function

$(function() { $( "#button_highlight" ).click(function() {
    
    //Toogles highlight_on classes to any elemente with .to_higlight class
  $( ".to_highlight" ).toggleClass( "highlight_on", 1000 );
    
    //Toogles highlight_on classes to trigger button too
    $( "#button_highlight" ).toggleClass( "highlight_on", 1000 );
	return false; }); });
