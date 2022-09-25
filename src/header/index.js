const builder = require('../elementBulder');
require('./header.css');

const createHeader = () => builder('header', '<a href="#">Logo</a>', 'header')

module.exports = createHeader;
