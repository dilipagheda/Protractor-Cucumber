import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('super calculator', function() {
    it('plus operation', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');

      element(by.model('first')).sendKeys("5");
      
      

      element(by.model('operator')).element(by.css('option[value="DIVISION"]')).click();

      element(by.model('second')).sendKeys("2");
      element(by.id('gobutton')).click();

        element(by.css('h2.ng-binding')).getText().then(function(text){
            console.log(text);
            // expect(text).toEqual('7');

        });
    });
  });
