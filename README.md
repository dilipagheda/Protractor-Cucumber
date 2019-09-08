# Protractor-Cucumber
## Automated Testing of Websites

This project contains protractor tests to automate testing of websites. It uses a BDD approach using Cucumber, Gherkin syntax and Page object pattern.

# Skills gained
- Behaviour driven development (BDD)
- Cucumber
- Typescript
- JavaScript
- Protractor
- Chai assertions
- Jasmine testing framework
- Report integration

# Sample Tests

```
Feature: I am going to validate Calculator App
@calculatortesting
Scenario: Calculator Add functionality testing

Given I will navigate to Calc Site
When I add two numbers "3" and "5"
Then the output displayed should be "8"

@calculatortesting
Scenario: Calculator Add functionality testing no 2

Given I will navigate to "calc" page
When I add two numbers "2" and "7"
Then the output displayed should be "9"
```

# How to run tests locally
- Checkout this repo to your local
- run `npm install`
- run `npm test`

# Report
![alt text](https://github.com/dilipagheda/Protractor-Cucumber/blob/master/report.png)
