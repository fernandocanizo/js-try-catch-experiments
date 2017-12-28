'use strict';

module.exports = () => Promise.resolve(setTimeout(() => {
  throw Error('Throwing a Zalgo from a setTimeout()');
}, 500));
