<!DOCTYPE html>
<html>
   <head>
      <title>Cruise Search</title>
      <link rel="stylesheet" href="" type="text/css">
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
      <!-- Optional theme -->
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap-theme.min.css">
      <!-- Custom styles for this template -->
      <link href="css/theme.css" rel="stylesheet">
      <link href="css/grid.css" rel="stylesheet">
      <link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css" rel="stylesheet">
      <link href="css/bootstrap-select.min.css" rel="stylesheet">
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
         <h3>Search Criteria</h3>
         <div class="row">
            <div class="col-md-4">
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title">Select a DBO Line</h3>
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
                     <h3 class="panel-title">Select a Chief Scientist</h3>
                  </div>
                  <div class="panel-body">
                     <select id="chief_sci" class="selectpicker" data-live-search="true" >
                        <option value='0'></option>
                        <option value='Bob'>Bob</option>
                        <option value='Sue'>Sue</option>
                        <option value='Adam'>Adam</option>
                     </select>
                  </div>
               </div>
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title">Select a Vessel</h3>
                  </div>
                  <div class="panel-body">
                     <select id="vessel" class="selectpicker" data-live-search="true" >
                        <option value='0'></option>
                        <option value='Healy'>Healy</option>
                        <option value='Knorr'>Knorr</option>
                        <option value='JCR'>JCR</option>
                     </select>
                  </div>
               </div>
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title">Enter a Cruise Id</h3>
                  </div>
                  <div class="panel-body">
                     <select id = "cruise_id" class="selectpicker" data-live-search="true" >
                        <option value='0'></option>
                        <option value='AE1213'>AE1213</option>
                        <option value='JCR1255'>JCR1255</option>
                        <option value='JCR1255'>HLY1303</option>
                     </select>
                  </div>
               </div>
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <h3 class="panel-title">Select Desired Parameters</h3>
                  </div>
                  <div class="panel-body">
                     <input type='checkbox' name='bio_params'> Biological Parameters Sampled<br><br>
                     <input type='checkbox' name='bio_params'> Water Samples Taken<br><br>
                  </div>
               </div>
            </div>
            <div class="col-md-8">
               <div class="panel panel-info">
                  <div class="panel-heading">
                     <h3 class="panel-title">Map of Cruise Distro</h3>
                  </div>
                  <div class="panel-body">
                     
                     <h2>Greetings</h2>
<div class="container">
  <div class="inner">
    Hello
  </div>
  <div class="inner">
    Goodbye
  </div>
</div>
                  </div>
               </div>
               
            </div>
            
            <div class="col-md-8">
               <div class="panel panel-info">
                  <div class="panel-heading">
                     <h3 class="panel-title">Cruise Results</h3>
                  </div>
                  <div class="panel-body">
                     <div class="list-group">
                        <a href="#" class="list-group-item ">
                           <h4 class="list-group-item-heading">KN203</h4>
                           <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                        <a href="#" class="list-group-item">
                           <h4 class="list-group-item-heading">JCR2003</h4>
                           <p><strong>Vessel:</strong> KNORR</p>
                           <p><strong>Dates:</strong> Jan-Dec</p>
                           <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                        <a href="#" class="list-group-item">
                           <h4 class="list-group-item-heading">AE1213</h4>
                           <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        </a>
                     </div>
                  </div>
               </div>
               <a class ="btn btn-default" href="#" role ="button"> Get Data! </a>
            </div>
         </div>
      </div>
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
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