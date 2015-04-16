var Thermostat = function () {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.incrementUp = function() {
  if (this.temperature < 25 && this.powerSave){this.temperature ++};
  if (this.temperature < 32 && this.powerSave == false){this.temperature ++};
};

Thermostat.prototype.incrementDown = function() {
  if (this.temperature > 10) this.temperature --;
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;
};

// use toggle

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};
