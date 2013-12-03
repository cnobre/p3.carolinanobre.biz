// JavaScript Document
 
 var cruiseData = [{"vessel":"Knorr","chief_sci":"Bob ","DBO":"1","cruise_id":"AE1213"},
 {"vessel":"JCR","chief_sci":"Sue ","DBO":"2","cruise_id":"JCR1255"},
 {"vessel":"Healy","chief_sci":"Adam ","DBO":"3","cruise_id":"HLY1303"}];
 
 
 
            /*-------------------------------------------------------------------------------------------------
            Listeners
            -------------------------------------------------------------------------------------------------*/
                $('select').change(filter);
			

			 
            function filter() {
				
            	var vessel   = $('#vessel').val();
				var dbo = $('#vessel').val();
				
				var data = $.grep(cruiseData, function (e) {
    			return e.vessel === vessel 
});

			//Clear list of result cruises
			$('.list-group').html("");
			
			//Cycle through each cruise that passed the filter and insert list element
			$.each(data,function(e) {
            		
            		$('.list-group').append('<a href=\"#\" class=\"list-group-item \"> \
					<h4 class=\"list-group-item-heading\">' + data[e].vessel + '</h4>\
					 <p class=\"list-group-item-text\">\
					 Chief Scientist: ' + data[e].chief_sci + '\
					 </p> </a>');
					
					console.log(e)
					
					
            		
            	}); // end of loop
				
            	
            //console.log(data[0].chief_sci);
			
			
						
            	
            }
            
