const header = require('./header');
const footer = require('./footer');
const content = require('./content');
require('./main.scss');

document.body.append(header());
document.body.append(content());
document.body.append(footer());
