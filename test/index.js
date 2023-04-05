import {isArray, indexOf, slice} from '../index.js';

function assert(condition) {
  if (!condition) throw new Error('Assertion failed');
}

assert(isArray === Array.isArray);
assert(indexOf === [].indexOf);
assert(slice === [].slice);
