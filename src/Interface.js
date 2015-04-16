var thermostat = new Thermostat();

var refreshTemperature = function() {
  $('#temperature').text(thermostat.temperature);
  if(thermostat.temperature < 18){document.getElementById("temperature").style.color = "green"}
  else if(thermostat.temperature < 25){document.getElementById("temperature").style.color = "yellow"}
  else if(thermostat.temperature >= 25){document.getElementById("temperature").style.color = "red"}
  weatherData = $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk", function(data) {
    var temp = weatherData.responseJSON.main.temp;
    var celsius = Math.round(temp) - 272;
    $("#APITemperature").text(celsius);
  });
};

$(document).ready(function() {
  refreshTemperature();

  $('input#up').on('click', function() {
    thermostat.incrementUp();
    refreshTemperature();
  });

  $('input#down').on('click', function() {
    thermostat.incrementDown();
    refreshTemperature();
  });

  $('.powersave').on('click', function () {
   thermostat.PowerSave();
   if (thermostat.powerSavingOn) {
     refreshTemperature();
     $('.powersave').text('Power Saving On');
   } else if (thermostat.powerSavingOff) {
     refreshTemperature();
     $('.powersave').text('Power Saving Off');
   };
 });

});
