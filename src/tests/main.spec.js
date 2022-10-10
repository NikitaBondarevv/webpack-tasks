import { showMessage, getDay, getAdultUsers, getRandomUsers} from './main';
import { days, defaultProduct, money, users } from './constants';

import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';

describe('showMessage()', () => {
  it('should work alert with correct text', () => {
    const stub = sinon.stub(window, 'alert');

    showMessage();

    expect(stub.called).to.be.true;
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
  const originRandom = Math.random;
  const firstHalfOfUsers = users.slice(0, middleUser);
  const secondHalfOfUsers = users.slice(middleUser, length);

  it('should return false if the argument is not transferred', () => {
    expect(getRandomUsers()).to.be.false;
  })

  it('should return first half of users if Math.random is greater than 0.5', () => {
    Math.random = () => 0.6;

    expect(getRandomUsers(users)).to.deep.equal(firstHalfOfUsers)
  })

  it('should return the second half of the Math.random if the numb is less than 0.5', () => {
    Math.random = () => 0.5;

    expect(getRandomUsers(users)).to.deep.equal(secondHalfOfUsers);
  })
})