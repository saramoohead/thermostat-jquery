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

  // $('.power-saving').on('click', function () {
  //  thermostat.switchPowerSave();
  //  if (thermostat.powerSavingMode) {
  //    refreshTemperature();
  //    $('.power-saving').text('Power Saving On');
  //  } else {
  //    $('.power-saving').text('Power Saving Off');
  //  };
 // });

});
