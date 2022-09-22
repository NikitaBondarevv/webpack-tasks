const builder = require('../elementBulder');

const createHeader = () => builder('header', '<a href="#">Logo</a>', 'header')

module.exports = createHeader;
