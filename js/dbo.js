// JavaScript Document
 
 var cruiseData = [{"vessel":"Knorr","chief_sci":"Bob","DBO":"1","cruise_id":"AE1213"},
 {"vessel":"JCR","chief_sci":"Sue","DBO":"2","cruise_id":"JCR1255"},
 {"vessel":"Healy","chief_sci":"Adam","DBO":"3","cruise_id":"HLY1303"},
 {"vessel":"Knorr","chief_sci":"Bob","DBO":"1","cruise_id":"AE1213"},
 {"vessel":"JCR","chief_sci":"Sue","DBO":"2","cruise_id":"JCR1255"},
 {"vessel":"Healy","chief_sci":"Adam","DBO":"3","cruise_id":"HLY1303"}];
 
 filter();
 
 
            /*-------------------------------------------------------------------------------------------------
            Listeners
            -------------------------------------------------------------------------------------------------*/
                $('select').change(filter);
			

			 
            function filter() {
				
            	var vessel   = $('#vessel').val();
				var dbo = $('#dbo').val();
				var chief_sci = $('#chief_sci').val();
				var cruise_id = $('#cruise_id').val();
				
				//copying original data array w/ all cruises
				var data = cruiseData;
				
				//If a vessel was selected, filter by vessel
				if (vessel != 0){
				var data = $.grep(data, function (e) {
    			return e.vessel === vessel 
				});
				}
				
				//If a chief scientist was selected, filter by chief scientist
				if (chief_sci != 0){
				var data = $.grep(data, function (e) {
    			return e.chief_sci === chief_sci 
				});
				}
				


			//Clear list of result cruises
			$('.list-group').html("");
			
			//Cycle through each cruise that passed the filter and insert list element
			$.each(data,function(e) {
            		
            		$('.list-group').append('<a href=\"#\" class=\"list-group-item \"> \
					<h4 class=\"list-group-item-heading\">' + data[e].cruise_id + '</h4>\
					 <p class=\"list-group-item-text\">\
					 <strong>Chief Scientist</strong>: ' + data[e].chief_sci + '</br>\
					 <strong>Vessel</strong>: ' + data[e].vessel + '</br>\
					 <strong>DBO Line</strong>: ' + data[e].DBO + '</br>\
					 </p> </a>');
					
            	}); // end of loop
				
				if (data.length == 0) {
					$('.list-group').html ('\
					<div class=\"alert alert-warning\"> \
        			<strong>Oops!</strong> It seems no \
					cruises match your search criteria! Please try again!</div>')
					};
            	
			
			
						
            	
            }
            
