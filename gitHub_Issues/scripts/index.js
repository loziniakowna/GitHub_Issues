$( ".filter" ).click(function() {
  $( this ).toggleClass( "filter--selected" );
});

$( ".issues__btn" ).click(function() {
	$( this ).find("path").toggleClass('issues__icon--white');
});

