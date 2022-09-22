const $ = require('jquery')

const elementBuilder = (tag = 'div', content = '', className = 'box') => {
  const element = document.createElement(tag);

  $(element).addClass(className).html(content)

  return element;
};

module.exports = elementBuilder;
