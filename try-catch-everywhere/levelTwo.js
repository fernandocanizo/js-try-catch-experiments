'use strict';

const levelOne = require('./levelOne');

const main = async () => {
  try {
    return await levelOne();
  } catch (e) {
    console.log('From levelTwo try/catch:\n', e);
    throw e;
  }
};


module.exports = main;
