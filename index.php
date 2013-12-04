<!DOCTYPE html>
<html>
   <head>
      <title>Cruise Search</title>
      <script src="http://d3js.org/d3.v3.min.js"></script>
      <!-- Heat Map files -->
      <link href="css/cal-heatmap.css" rel="stylesheet">
      <script src="js/cal-heatmap.js"></script>
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
      <!-- Optional theme -->
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap-theme.min.css">
      <link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css" rel="stylesheet">
      <link href="css/bootstrap-select.min.css" rel="stylesheet">
      <!-- Custom styles for this template -->
      <link href="css/theme.css" rel="stylesheet">
      <link href="css/grid.css" rel="stylesheet">
   </head>
   <body>
      <div class="container theme-showcase">
      <!-- Header -->
      <div class="jumbotron">
         <h2>DBO Cruise Finder</h2>
         <p>This is the Cruise Finder for the DBO website. I plan on incorporating this into my final project, 
            which will use php and a mysql database to access the cruise database information. 
         </p>
      </div>
      <h3>Search Criteria </h3>
      <div class="row">
         <div class="col-md-3">
            <div class="panel panel-default">
               <div class="panel-heading">
                  <h3 class="panel-title">Select a DBO Line
                     <span class="glyphicon glyphicon-minus"></span> 
                     <span class="glyphicon glyphicon-minus"></span> 
                  </h3>
               </div>
               <div class="panel-body">
                  <select id="dbo" class="selectpicker" multiple >
                     <option value ='1'>DBO 1</option>
                     <option value ='2'>DBO 2</option>
                     <option value ='3'>DBO 3</option>
                     <option value ='4'>DBO 4</option>
                     <option value ='5'>DBO 5</option>
                  </select>
               </div>
            </div>
            <div class="panel panel-default">
               <div class="panel-heading">
                  <h3 class="panel-title">Select a Chief Scientist
                     <span class="glyphicon glyphicon-user"></span> 
                  </h3>
               </div>
               <div class="panel-body">
                  <select id="chief_sci" class="selectpicker" data-live-search="true" >
                     <option value='0'>Any</option>
                  </select>
               </div>
            </div>
            <div class="panel panel-default">
               <div class="panel-heading">
                  <h3 class="panel-title">Select a Vessel
                     <span class="glyphicon glyphicon-plane"></span>
                  </h3>
               </div>
               <div class="panel-body">
                  <select id="vessel" class="selectpicker" data-live-search="true" >
                     <option value='0'>Any</option>
                  </select>
               </div>
            </div>
            <div class="panel panel-default">
               <div class="panel-heading">
                  <h3 class="panel-title">Enter a Cruise Id
                     <span class="glyphicon glyphicon-text-height"></span>
                  </h3>
               </div>
               <div class="panel-body">
                  <select id = "cruise_id" class="selectpicker" data-live-search="true" >
                     <option value='0'>Any</option>
                  </select>
               </div>
            </div>
            <div class="panel panel-default">
               <div class="panel-heading">
                  <h3 class="panel-title">Select a Year
                     <span class="glyphicon glyphicon-send"></span>
                  </h3>
               </div>
               <div class="panel-body">
                  <select id = "year" class="selectpicker" data-live-search="true" >
                     <option value='0'>Any</option>
                  </select>
               </div>
            </div>
            <!--<div class="panel panel-default">
               <div class="panel-heading">
                  <h3 class="panel-title">Select Desired Parameters</h3>
               </div>
               <div class="panel-body">
                  <input type='checkbox' name='bio_params'> Biological Parameters Sampled<br><br>
                  <input type='checkbox' name='bio_params'> Water Samples Taken<br><br>
               </div>
               </div>-->
         </div>
         <div class="col-md-3" id="right_panel">
            <div class="panel panel-info ">
               <div class="panel-heading">
                  <h3 class="panel-title">Cruise Results</h3>
               </div>
               <div class="panel-body">
                  <div class="list-group">
                  </div>
               </div>
            </div>
            
            
            <!--<button type="button" class="btn btn-lg btn-success">Download Data for Selected Cruises</button>-->
         </div>
         <div class="col-md-6">
           <div class="panel panel-default" >
           
           <div class="page-header" id="time_series_title">
  <h2>Number of DBO occupations <br><small>a heatmap of selected cruises</small></h2>
</div>
              <div class="panel-body" id="time_series" >
              </div>
           </div>
        </div>
      </div>
   
      
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      <script src="js/data.js"></script>
      <script src="js/dbo.js"></script>
      <script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>
      <script src="http://silviomoreto.github.io/bootstrap-select/javascripts/bootstrap-select.js"></script>
      <script type="text/javascript">
         $(document).ready(function(e) {
             $('.selectpicker').selectpicker();
         });
      </script>
   </body>
</html>