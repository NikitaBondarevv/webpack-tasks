const header = require('./header/header');
const footer = require('./footer/footer');
const divContent = require('./main/main');

document.body.append(header());
document.body.append(divContent());
document.body.append(footer());
