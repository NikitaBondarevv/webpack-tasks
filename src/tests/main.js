import { days, defaultProduct, money, users } from './constants';

export const showMessage = (text) => {
  alert(text);
};

export const getDay = () => {
  return days[new Date().getDay()];
};

export const getAdultUsers = (users = []) => users.filter(user => user.age > 18);
getAdultUsers(users);

export const getRandomUsers = (users) => {
  const numb = Math.random();

  if (!users) {
    return false;
  }

  const length = users.length;
  const middleUser = Math.round(length / 2);

  if (numb > 0.5) {
    return users.slice(0, middleUser);
  }

  return users.slice(middleUser, length);
};

export class Product {
  constructor(title, price) {
    this.title = title || defaultProduct;
    this.price = price || 10;
  }

  getPrice() {
    return this.price + money;
  }

  setPrice(value) {
    if (!value) {
      throw new Error('Price should be defined');
    }

    if (value > 10) {
      this.price = value;
    }
  }
}
