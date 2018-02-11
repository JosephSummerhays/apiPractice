$(document).ready(function() {
  var submitButton = $('#weatherSubmit');
  console.log(submitButton);
  $('#weatherSubmit').click(function(e) {
  	e.preventDefault();

  	var value = $('#weatherInput').val();
  	var myurl = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial"+"&APPID=18a552a5a757060623785a574d1c709a";
    $.ajax({
      url : myurl,
      dataType : "json",
      success : function(json) {
        var results = "";
    		results += '<h2>Weather in ' + json.name + "</h2>";
    		for (var i=0; i<json.weather.length; i++) {
    		    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
    		}
    		results += '<h2>' + json.main.temp + " &deg;F</h2>"
    		results += "<p>"
    		for (var i=0; i<json.weather.length; i++) {
    		    results += json.weather[i].description
    		    if (i !== json.weather.length - 1)
    			results += ", "
    		}
    		results += "</p>";
    		$("#weatherResults").html(results);
      }
    });
  });
  $('#stackSubmit').click(function(e) {
    e.preventDefault();

    var value = $('#stackInput').val();
    var myurl = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle="+ value + "&site=stackoverflow";
    $.ajax({
      url : myurl,
      dataType : "json",
      success : function(json) {
        var results = "<h1>First Ten answers from stackoverflow</h1>";
        for (var i=0; i<10; ++i) {
          results += '<a href="' +json.items[i].link+'"><p>'+json.items[i].title+"</p></a>";
        }
        $('#stackResults').html(results);
      }
    });
  });
});
