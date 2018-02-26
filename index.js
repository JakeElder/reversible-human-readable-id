const animals = require('./assets/animals');
const adjectives = require('./assets/adjectives');
const scientists = require('./assets/scientists');
const local = require('./local.js');
const hasher = require('node-cityhash');

// Helpers
function parser(stringNumber) {
  // Dashes seem to be present in hash lib
  // I am going to shift the number by a factor of 10 or 11 given the position
  // This means that the name arrays length needs to be at least 119
  if (stringNumber.indexOf('-') > -1) {
    const indexDash = stringNumber.indexOf('-');
    const indexOfOther = indexDash ^ 1;
    const newStringNumber = String(10 + indexDash) + stringNumber[indexOfOther];
    return Number(newStringNumber);
  }
  if (Number(stringNumber)) {
    return Number(stringNumber);
  }
  return NaN;
}

function generateHR(hash) {
  const adjective = adjectives[parser(hash.slice(1, 3))];
  const animal = animals[parser(hash.slice(3, 5))];
  const scientist = scientists[parser(hash.slice(5, 7))];

  const arr = [adjective, scientist, animal].filter(x => x);

  return arr.join('-');
}

// Access functions
const saveHR = (id) => {
  const hash = hasher.hash128(id);
  const humanReadable = generateHR(hash);
  local.setItem(id, humanReadable);
  return humanReadable;
};

const getId = name => local.getByValue(name);

function getHR(id) {
  return local.getItem(id) || saveHR(id);
}

module.exports = {
  getHR,
  getId
};
