const builder = require('../elementBulder');
require('./footer.css');

const createFooter = () => builder('footer', '<p>Contacts</p>', 'footer')

module.exports = createFooter;
