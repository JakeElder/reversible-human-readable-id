const animals = require('./assets/animals');
const adjectives = require('./assets/adjectives');
const scientists = require('./assets/scientists');
const local = require('./local.js');
const hasher = require('cityhash-js');

// Helpers
function parser(stringNumber) {
  return Number(stringNumber);
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
