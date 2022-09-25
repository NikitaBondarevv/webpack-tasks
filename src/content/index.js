const builder = require('../elementBulder');
require('./content.css');

const createContent = () => builder('div', `<main><h1>Ukraine, Kharkiv - city hero!!! ${new Date().toLocaleDateString()}</h1></main><aside></aside>`, 'content');

module.exports = createContent;
