'use strict';

const process = require('process');
const withReject = require('../lib/bottom-with-reject');
const withTimeout = require('../lib/bottom-with-setTimeout');

const main = async () => {
  if ('true' === process.env.USE_REJECT) {
    return await withReject();
  } else { // default
    return await withTimeout();
  }
};


module.exports = main;
