describe('Thermostat Front End', function(){

    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = '../';
        loadFixtures('index.html');
    });

    it('displays default temperature', function(){
        expect('#temperature').toContainText('20');
    });

    it('increases temperature with up button', function(){
      $('input#up').click();
      expect('#temperature').toContainText('21');
    });

    it('decreases temperature with down button', function(){
      $('input#down').click();
      expect('#temperature').toContainText('19');
    });

    it('has power saving mode on by default', function(){
      expect('#powersave').toBeChecked();
    });

    it('can turn off power save mode by unchecking the box', function(){
      $('#powersave').click();
      expect('#powersave').not.toBeChecked();
    });

    // it('can increase max temp when power save mode is off', function(){
    //   $('#powersave').click();
    //   expect(document.getElementById("powersave").checked).toBe(false);
    //   for(var i = 0; i < 6; i++){
    //       $('input#up').click();
    //   }
    //   expect('#temperature').toContainText('26');
    // })

    it('cannot increase above 22 if power saving mode is on', function (){
      $('#powersave').click();
      $('input#up').click();
      $('input#up').click();
      $('input#up').click();
      expect('#temperature').toContainText('22');
    });

    it('temperature can go up and down consistently', function(){
      $("input#down").click();
      expect('#temperature').toContainText('19');
      $("input#up").click();
      expect('#temperature').toContainText('20');
    });

    it('temperature ...', function (){
      $('#powersave').click();
      $('input#down').click();
      $('input#down').click();
      $('input#down').click();
      expect('#temperature').toContainText('18');
    });
});
