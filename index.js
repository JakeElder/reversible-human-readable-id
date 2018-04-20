const adjectives = require('./assets/adjectives.js');
const lastNames = require('./assets/lastNames.js');
const colors = require('./assets/colors.js');
const scientists = require('./assets/scientists.js');
const local = require('./local.js');
const shajs = require('sha.js');

const colorsAndScientists = colors.concat(scientists);

// Helpers
function parser(stringNumber) {
  return parseInt(stringNumber, 16);
}

function generateHR(hash) {
  const adjective = adjectives[parser(hash.slice(1, 3)) * 2];
  const color = colorsAndScientists[parser(hash.slice(3, 5)) * 2];
  const lastName = lastNames[parser(hash.slice(5, 7))];

  const arr = [adjective, color, lastName].filter(x => x);

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
