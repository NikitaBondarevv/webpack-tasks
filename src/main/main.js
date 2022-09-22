const builder = require('../elementBulder');

const createDivContent = () => builder('div', `<main><h1>Ukraine, Kharkiv - city hero!!! ${new Date().toLocaleDateString()}</h1></main><aside></aside>`, 'content');

module.exports = createDivContent;
