describe('Thermostat Back End', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Temperature is 20 degrees by default', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('Can increment temperature up by 1 degree', function() {
    thermostat.incrementUp();
    expect(thermostat.temperature).toEqual(21);
  });

  it('Can increment temperature down by 1 degree', function() {
    thermostat.incrementDown();
    expect(thermostat.temperature).toEqual(19);
  });

  it('Has a minimum temperature of 10 degrees', function() {
    for(var i = 0; i < 15; i ++){
      thermostat.incrementDown();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('Power saving mode is on by default', function() {
    expect(thermostat.powerSave).toEqual(true);
  });

  it('Power saving mode can be turned off', function() {
    thermostat.powerSaveOff();
    expect(thermostat.powerSave).toEqual(false);
  });

  it('Power saving mode can be turned on', function() {
    thermostat.powerSaveOff();
    thermostat.powerSaveOn();
    expect(thermostat.powerSave).toEqual(true);
  });

  it('Whilst powerSave is on, max temp is 25 degrees', function() {
    for(var i = 0; i <= 15; i ++){
      thermostat.incrementUp();
    };
    expect(thermostat.temperature).toEqual(25);
  });

  it('Whilst powerSave is off, max temp is 32 degrees', function() {
    thermostat.powerSaveOff();
    for(var i = 0; i <= 15; i ++){
      thermostat.incrementUp();
    };
    expect(thermostat.temperature).toEqual(32);
  });

  it('Can reset temperature to 20 degrees by hitting reset', function() {
    thermostat.incrementDown();
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  // 'if your turn power save off whilst temp above 25'

});
