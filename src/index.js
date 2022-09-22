const header = require('./header/header');
const footer = require('./footer/footer');
const content = require('./content/content');

document.body.append(header());
document.body.append(content());
document.body.append(footer());
