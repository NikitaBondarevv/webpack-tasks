import { showMessage, getDay, getAdultUsers, getRandomUsers} from './main';
import { days, defaultProduct, money, users } from './constants';

import { expect } from 'chai';
import chai from 'chai';

describe('showMessage()', () => {
  it('should work alert with correct text', () => {
    const text = 'Hello!';
    
    expect(showMessage(text)).to.equal(showMessage(text));
  });
});

describe('getDay()', () => {
  it('should return day matching by array index', () => {
    expect(getDay()).to.equal(days[new Date().getDay()]);
  });
});

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
  it('should return a random array with users', () => {
    expect(getRandomUsers(users).length).not.to.equal(users.length)
  })
})