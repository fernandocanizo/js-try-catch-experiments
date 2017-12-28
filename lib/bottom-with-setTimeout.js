'use strict';

module.exports = () => Promise.resolve(setTimeout(() => {
  throw Error('RELEASE THE ZALGO!');
}, 500));
