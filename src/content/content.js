const builder = require('../elementBulder');

const createContent = () => builder('div', `<main><h1>Ukraine, Kharkiv - city hero!!! ${new Date().toLocaleDateString()}</h1></main><aside></aside>`, 'content');

module.exports = createContent;
