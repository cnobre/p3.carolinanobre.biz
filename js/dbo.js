// JavaScript Document
var cruiseData = [{
    "vessel": "Knorr",
    "chief_sci": "Bob",
    "dbo": "1",
    "cruise_id": "AE1213",
	"year":"2008"
}, {
    "vessel": "JCR",
    "chief_sci": "Sue",
    "dbo": "2",
    "cruise_id": "JCR1255",
	"year":"2009"
}, {
    "vessel": "Healy",
    "chief_sci": "Adam",
    "dbo": "3",
    "cruise_id": "HLY1303",
	"year":"2010"
}, {
    "vessel": "Knorr",
    "chief_sci": "Bob",
    "dbo": "1",
    "cruise_id": "AE1213",
	"year":"2011"
}, {
    "vessel": "JCR",
    "chief_sci": "Mark",
    "dbo": "2",
    "cruise_id": "JCR1255",
	"year":"2012"
}, {
    "vessel": "Healy",
    "chief_sci": "Adam",
    "dbo": "3",
    "cruise_id": "HLY1303",
	"year":"2013"
}];


//function to dynamically create menus from cruiseData array 

function create_menu(data, menu) {
    //find unique values for each of the dropdown menus
    var unique = {};
    var distinct = [];
    for (var i in data) {
        if (typeof (unique[data[i][menu]]) == "undefined") {
            distinct.push(data[i][menu]);
        }
        unique[cruiseData[i][menu]] = 0;
    }
	
    $.each(distinct, function (e) {

        $('#' + menu).append(
            "<option value=" + distinct[e] + ">" + distinct[e] + "</option>");
    });
}

create_menu(cruiseData, 'chief_sci');
create_menu(cruiseData, 'vessel');
create_menu(cruiseData, 'cruise_id');
create_menu(cruiseData, 'year');



filter();




/*-------------------------------------------------------------------------------------------------
            Listeners
            -------------------------------------------------------------------------------------------------*/
$('select').change(filter);



function filter() {

    var vessel = $('#vessel').val();
    var dbo = $('#dbo').val();
    var chief_sci = $('#chief_sci').val();
    var cruise_id = $('#cruise_id').val();

    //copying original data array w/ all cruises
    var data = cruiseData;


    //If 1 ore more dbo_lines were selected, filter by line
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
    };


    //function that filters by any single parameter 
    function filter_by(data, parameter) {
        //Make sure parameter is not empty
        if (eval(parameter) != 0 & eval(parameter) != null) {
            var data = $.grep(data, function (e) {
                return e[parameter] === eval(parameter)
            });

        }
        return data;
    };

    data = filter_by(data, "chief_sci");
    data = filter_by(data, "cruise_id");
    data = filter_by(data, "vessel");
	//data = filter_by(data, "year");




    //Clear list of result cruises
    $('.list-group').html("");

    //Cycle through each cruise that passed the filter and insert list element
    $.each(data, function (e) {

        $('.list-group').append(
            '<a href=\"#\" class=\"list-group-item \"> \
					<h4 class=\"list-group-item-heading\">' + data[e].cruise_id + '</h4>\
					 <p class=\"list-group-item-text\">\
					 <strong>Chief Scientist</strong>: ' + data[e].chief_sci + '</br>\
					 <strong>Vessel</strong>: ' + data[e].vessel + '</br>\
					 <strong>DBO Line</strong>: ' + data[e].dbo + '</br>\
					 </p> </a>');

    }); // end of loop

    if (data.length == 0) {
        $('.list-group').html('\
					<div class=\"alert alert-warning\"> \
        			<strong>Oops!</strong> It seems no \
					cruises match your search criteria! Please try again!</div>')
    };




}