// JavaScript Document

//Populate html by creating menu items based on data content
create_menu(cruiseData, 'chief_sci');
create_menu(cruiseData, 'vessel');
create_menu(cruiseData, 'cruise_id');
create_menu(cruiseData, 'year');

//create empty variable to hold calendar on the right panel;
var cal

//Apply filters to populate cruise results panel and data density calendar
filter();

/*-------------------------------------------------------------------------------------------------
Listeners for any changes in the filter criteria         
-------------------------------------------------------------------------------------------------*/
$('select').change(filter);

/*-------------------------------------------------------------------------------------------------
 Function to dynamically create menu items from data           
 -------------------------------------------------------------------------------------------------*/

function create_menu(data, menu) {
    //find unique values for a given key
    var unique = {};
    var distinct = [];
    for (var i in data) {
        if (typeof (unique[data[i][menu]]) == "undefined") {
            distinct.push(data[i][menu]);
        }
        unique[cruiseData[i][menu]] = 0;
    }

    //for each unique value, create a dropdown item for that menu
    $.each(distinct, function (e) {
        $('#' + menu).append(
            "<option value=" + distinct[e] + ">" + distinct[e] + "</option>");
    });
}

/*-------------------------------------------------------------------------------------------------
 Functions to add/remove "Download Data" button when user hovers over a cruise          
-------------------------------------------------------------------------------------------------*/
function hover_on() {
    $(this).append('<div class = "get_data">\
	<span> <button type="button" class="btn btn-success">Get Cruise Data</button></span></div>');
};

function hover_off() {
    $(this).find("div:last").remove();
};

/*-------------------------------------------------------------------------------------------------
 Function to get data when user clicks on "get data" button . Not functional but will be in P4.        
  -------------------------------------------------------------------------------------------------*/

function click_on() {
    console.log('called click function');
};

/*-------------------------------------------------------------------------------------------------
 Function to filter cruise results by user selected values            
 -------------------------------------------------------------------------------------------------*/
function filter() {
	
	//getting values selected by user from dropdown menus
    var vessel = $('#vessel').val();
    var dbo = $('#dbo').val();
    var chief_sci = $('#chief_sci').val();
    var cruise_id = $('#cruise_id').val();
    var year = $('#year').val();

    //copying original data array w/ all cruises
    var data = cruiseData;


    //helper function that filters by any single parameter 
    function filter_by(data, parameter) {
        //Make sure parameter is not empty
        if (eval(parameter) != 0 & eval(parameter) != null) {
            var data = $.grep(data, function (e) {
                return e[parameter] === eval(parameter)
            });

        }
        return data;
    };
    
    //Parsing out first menu, which can have more than one item selected

    if (dbo != null) {
        for (var i = 0; i < dbo.length; i++) {
            if (i == 0) {
                var line = $.grep(data, function (a) {
                    return a.dbo == dbo[i]
                });
            } else {
                var line = line.concat($.grep(data, function (a) {
                    return a.dbo == dbo[i]
                }));
            }
        }
        data = line;
    }

    //filter the data cummulatively with each of the criteria
    data = filter_by(data, "chief_sci");
    data = filter_by(data, "cruise_id");
    data = filter_by(data, "vessel");
    data = filter_by(data, "year");

    //Clear list of result cruises
    $('.list-group').html("");

    //Cycle through each cruise that passed the filter and insert list element
    $.each(data, function (e) {
        $('.list-group').append(
            '<a href=\"#\" onclick="return false" class=\"list-group-item\"> \
					<h4 class=\"list-group-item-heading\">' + data[e].cruise_id + '</h4>\
					 <p class=\"list-group-item-text\">\
					 <strong>Chief Scientist</strong>: ' + data[e].chief_sci + '</br>\
					 <strong>Vessel</strong>: ' + data[e].vessel + '</br>\
					 <strong>DBO Line</strong>: ' + data[e].dbo + '</br>\
					 <strong>Date</strong>: ' + data[e].month + ' / ' + data[e].year + '</br>\
					 </p> </a>');
    }); // end of loop

    //binding event handlers to newly created elements. 
    $(".list-group-item").hover(hover_on, hover_off);
    $('.get_data').click(click_on);

	//display error msg if no cruises match the criteria
    if (data.length == 0) {
        $('.list-group').html('\
		<div class=\"alert alert-warning\"> \
        <strong>Oops!</strong> It seems no \
		cruises match your search criteria! Please try again!</div>')

    };

    //Create/update heat map plot
    cal = heat_map(data);
	
};  


/*-------------------------------------------------------------------------------------------------
 Function to create heat map of DBO occupation            
 -------------------------------------------------------------------------------------------------*/
function heat_map(data) {
    //create time series JSON array from filtered data
    var filtered = JSON.stringify(data, ['year', 'month']);
    var timeseries = $.parseJSON(filtered);
    var timeseriesUNIX = [];
    var timeseriesJSON = {};
	
    //transform times to unix time stamps and parse into JSON format
    $.each(timeseries, function (a) {
        timeseriesUNIX[a] = (new Date(timeseries[a].year, timeseries[a].month - 1).getTime() / 1000);

        //adding to JSON array
        if (timeseriesJSON.hasOwnProperty(timeseriesUNIX[a])) {
            ++timeseriesJSON[timeseriesUNIX[a]];
        } else {
            timeseriesJSON[timeseriesUNIX[a]] = 1;
        }

    });

    timeseriesJSON = JSON.stringify(timeseriesJSON);
    timeseriesJSON = $.parseJSON(timeseriesJSON);


    //Create Time Series Plot
    $('#time_series').html(function () {
		//if no calendar exists, create a new one
        if (cal == undefined){
        //creating new heatmap
        cal = new CalHeatMap();
        cal.init({
            itemSelector: "#time_series",
            itemName: ['time'],
            verticalOrientation: true,
            domain: "year",
            subDomain: "month",
            cellRadius: 10,
            data: timeseriesJSON,
            animationDuration: 0,
            start: new Date(2010, 0),
            cellSize: 40,
            range: 5,
            subDomainTextFormat: "%b",
            legend: [1, 3, 5, 7],
            legendVerticalPosition: "top",
            legendHorizontalPosition: "center",
            legendCellSize: 25,
            legendMargin: [0, 0, 30, 0],
            legendCellPadding: 8,
            label: {
                height: 55
            }

        });
		
		}
		//update existing calendar w/ new data
		else{
		cal.update(timeseriesJSON);

		};
		
	
    });
		return cal; 
	
};