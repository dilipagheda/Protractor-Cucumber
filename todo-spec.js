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


    //   element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    //   element(by.css('[value="add"]')).click();
  
    //   var todoList = element.all(by.repeater('todo in todoList.todos'));
    //   expect(todoList.count()).toEqual(3);
    //   expect(todoList.get(2).getText()).toEqual('write first protractor test');
  
    //   // You wrote your first test, cross it off the list
    //   todoList.get(2).element(by.css('input')).click();
    //   var completedAmount = element.all(by.css('.done-true'));
    //   expect(completedAmount.count()).toEqual(2);
    });
  });
