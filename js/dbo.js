// JavaScript Document
 
            /*-------------------------------------------------------------------------------------------------
            Listeners
            -------------------------------------------------------------------------------------------------*/
            $('button').click(calculate);
            $('input,select').change(calculate);
			
			/*-------------------------------------------------------------------------------------------------
Recipient
-------------------------------------------------------------------------------------------------*/
$('#cruise_id').keyup(function() {

	// Figure out what the user typed in
	var cruiseId = $(this).val();
	
	
	// How long was the recipient?
	var length = cruiseId.length;
	
	// If it was 7 characters, that's the max, so inject an error message
	if(length == 6) {
		$('#cruise_id_error').html("Cruise Ids have a maximum of 6 characters!");
		$('#cruise_id_error').css('display','block');
		
	}
	// Otherwise, hide the error msg
	else {
		$('#cruise_id_error').css('display','none');
	}
	
	// Note: The "maxlength" attribute on the HTML element will prevent the user from entering more than 14 characters
	// <input type='text' id='recipient' maxlength="14"> 
	
});

			


            /*-------------------------------------------------------------------------------------------------
            
            -------------------------------------------------------------------------------------------------*/
            function calculate() {
				
            	var budget   = $('#budget').val();
            	var rooms    = $('#room_count').val();
            	var services = $('input[name=services]:checked');
            	var total    = 0;
				
				//$('.alert').css('color', 'black');
				//$('.alert').css('display','none');
            
            	
            	services.each(function() {
            		
            		var price = $(this).val();
            		
            		var amount = price * rooms;
            		
            		total = total + amount;
            		
            	}); // end of loop
            	
            	$('#output').html(total);
            	
            }
            
