'use strict';

const process = require('process');
const withReject = require('../lib/bottom-with-reject');
const withTimeout = require('../lib/bottom-with-setTimeout');

const main = async () => {
  try {
    if ('true' === process.env.USE_REJECT) {
      return await withReject();
    } else { // default
      return await withTimeout();
    }
  } catch (e) {
    console.log('From levelOne try/catch:\n', e);
  }
};


module.exports = main;
