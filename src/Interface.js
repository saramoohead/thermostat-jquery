console.log("hello")
var thermostat = new Thermostat();

var refreshTemperature = function(){
  $('#temperature').text(thermostat.temperature);
}

$(document).ready(function(){
  refreshTemperature();

    $('.increase-temp').on

});