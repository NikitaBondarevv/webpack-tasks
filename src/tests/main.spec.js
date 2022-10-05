import { showMessage, getDay, getAdultUsers, getRandomUsers} from './main';
import { days, defaultProduct, money, users } from './constants';

import { expect } from 'chai';
import chai from 'chai';

describe('showMessage()', () => {
  it('should work alert with correct text', () => {
    const originAlert = alert;

    window.alert = (text) => {
      window.alert.wasCalled = true;
      window.alert.argument = text;
    }

    showMessage('Hello');
    
    expect(alert.wasCalled).to.be.true;
    expect(alert.argument).to.equal('Hello');

    window.alert = originAlert;
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

const length = users.length;
const middleUser = Math.round(length / 2);

describe('getRandomUsers()', () => {
  it('should return false if the argument is not transferred', () => {
    expect(getRandomUsers()).to.be.false;
  })

  it('should return the array of its length to divide by 2', () => {
    expect(JSON.stringify(getRandomUsers(users))).to.equal(JSON.stringify(users.slice(0, middleUser)));
  })

  it('Should return the array from the middle to the end', () => {
    expect(JSON.stringify(getRandomUsers(users))).to.equal(JSON.stringify(users.slice(middleUser, length)));
  })
})
