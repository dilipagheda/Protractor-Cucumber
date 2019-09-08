import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config: Config = {    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true ,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
 
    specs: ['../features/calc.feature'],

    cucumberOpts: {
      // require step definitions
     // tags:"@AngularTesting",
      format:'json:./report.json',
      require: [
        './stepDefs/*.js', // accepts a glob,
      
      ]
    },
    onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './report.json',
          output: './cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
  
      reporter.generate(options);

    }

  };
