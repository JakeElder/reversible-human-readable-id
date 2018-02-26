const animals = require('./assets/animals');
const adjectives = require('./assets/adjectives');
const scientists = require('./assets/scientists');
const local = require('./local');
const hasher = require('node-cityhash');

function generateHR(hash) {
  const count = hash[0];
  const adjective = adjectives[hash.slice(1, 2)];
  const animal = animals[hash.slice(3, 4)];
  const scientist = scientists[hash.slice(5, 6)];

  return [adjective, count, animal, scientist].join('-');
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
  return local.getKey(id) || saveHR(id);
}

module.exports = {
  getHR,
  getId
};
