const {isArray, indexOf, slice} = require('../cjs');

console.assert(isArray === Array.isArray);
console.assert(indexOf === [].indexOf);
console.assert(slice === [].slice);
