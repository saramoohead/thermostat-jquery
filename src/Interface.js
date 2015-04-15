console.log("hello")
var thermostat = new Thermostat();

var refreshTemperature = function() {
  $('#temperature').text(thermostat.temperature);
  // changeColor();
};

// var changeColor = function() {
//   $('[class$=usage]').attr("class", thermostat.colorDisplay());
// };

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
   } else {
     $('.powersave').text('Power Saving Off');
   };
 });

});
