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