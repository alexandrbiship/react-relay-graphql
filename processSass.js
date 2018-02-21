const sass = require('node-sass');

module.exports = function processSass(data, file) {
  console.log('processSass: ', file);
  return sass.renderSync({ data, file }).css.toString('utf8');
};
