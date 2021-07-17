const fs = require('fs')
const path = require('path');
const basename = path.basename(__filename);

const crud = {}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))
    crud[path.basename(file, '.js')] = model;
  });

module.exports = crud;