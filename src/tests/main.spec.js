import { showMessage, getDay, getAdultUsers, getRandomUsers, Product} from './main';
import { days, defaultProduct, money, users } from './constants';

import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';

describe('showMessage()', () => {
  it('should work alert with correct text', () => {
    const fakeAlert = sinon.stub(window, 'alert');
    const testText = 'test';

    showMessage(testText);

    expect(fakeAlert.args[0][0]).to.equal(testText);
  })
})

describe('getDay()', () => {
  it('should return day matching by array index', () => {
    expect(getDay()).to.equal(days[new Date().getDay()]);
  })
})

describe('getAdultUsers()', () => {
  it('should return array of objects with age greater than 18', () => {
    const newArray = getAdultUsers(users);

    expect(getAdultUsers(users).every(element => element.age > 18)).to.be.true;
  })

  it('should return an empty array if no argument was passed', () => {
    expect(getAdultUsers().length).to.equal(0);
  })
})

describe('getRandomUsers()', () => {
  const length = users.length;
  const middleUser = Math.round(length / 2);
  const firstHalfOfUsers = users.slice(0, middleUser);
  const secondHalfOfUsers = users.slice(middleUser, length);
  const stub = sinon.stub(Math, 'random');

  it('should return false if the argument is not transferred', () => {
    expect(getRandomUsers()).to.be.false;
  })

  it('should return first half of users if Math.random is greater than 0.5', () => {
    stub.returns(0.6);

    expect(getRandomUsers(users)).to.deep.equal(firstHalfOfUsers);
  })

  it('should return the second half of the Math.random if the numb is less than 0.5', () => {
    stub.returns(0.5);

    expect(getRandomUsers(users)).to.deep.equal(secondHalfOfUsers);
  })
})


describe('class Product', () => {
  const productNoArguments = new Product();
  const product = new Product('Samsung', 5);

  it('should default to the title and price property if the class was initialized with no arguments', () => {
    expect(productNoArguments.title).to.equal(defaultProduct);
    expect(productNoArguments.price).to.equal(10);
  })

  it('the value in title and price should be assigned if the class was initialized with arguments', () => {
    expect(product.title).to.equal('Samsung');
    expect(product.price).to.equal(5);
  })

  it('getPrice() method should return price + money', () => {
    expect(productNoArguments.getPrice()).to.equal(`10${money}`);
    expect(product.getPrice()).to.equal(`5${money}`);
  })

  it('should throw an error if the method was called without an argument', () => {
    expect(product.setPrice).to.throw(Error, 'Price should be defined');
  })

  it('should change the price if the value is greater than 10', () => {
    product.setPrice(11);

    expect(product.price).to.equal(11);
  })

  it('should not change the price if the value is less than 10', () => {
    product.setPrice(9);

    expect(product.price).to.not.equal(9);
  })
})
