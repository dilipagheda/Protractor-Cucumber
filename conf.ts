import {Config} from 'protractor';

export let config: Config = {    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['calc-spec.js'],
    directConnect: true 
    
  };
