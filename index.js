const animals = require('./assets/animals');
const adjectives = require('./assets/adjectives');
const scientists = require('./assets/scientists');
const local = require('./local.js');
const shajs = require('sha.js');

// Helpers
function parser(stringNumber) {
  return parseInt(stringNumber, 16);
}

function generateHR(hash) {
  const adjective = adjectives[parser(hash.slice(1, 2))];
  const animal = animals[parser(hash.slice(2, 3))];
  const scientist = scientists[parser(hash.slice(3, 4))];

  const number = parser(hash.slice(7, 8));
  const arr = [adjective, scientist, animal, number].filter(x => x);

  return arr.join('-');
}

// Access functions
const saveHR = (id) => {
  const hash = shajs('sha256').update(id).digest('hex');

  const humanReadable = generateHR(hash.toString());
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
