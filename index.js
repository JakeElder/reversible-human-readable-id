const animals = require('./assets/animals');
const adjectives = require('./assets/adjectives');
const local = require('./local');


function generateHR(id) {
  return id;
}

// Access functions
const saveHR = (id, name) => {
  local.setItem(id, name);
}

const get = id => generateHR(id)

const getByValue = name => local.getKey(name)

module.exports = {
  generateHR,
  saveHR,
  get,
  getByValue
}
