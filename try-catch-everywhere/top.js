'use strict';

// Top module to test try/catch usage

const levelTwo = require('./levelTwo');

// Uncomment to catch runaway rejections
//process.on('unhandledRejection', reason => console.log('From our catch-all unhandled promise rejection handler\n', reason));

const run = async () => {
  try {
    await levelTwo();
    console.log(`Didn't catch the Zalgo.`);
  } catch (e) {
    console.log('top.js try/catch:\n', e);
  }
};


run();
