import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import { NumbersValidator } from '../../app/numbers-validator.js';

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if number is even', () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should return false if number is odd', () => {
    expect(validator.isNumberEven(3)).to.be.equal(false);
  });

  it('should return an error when provided with a string', () => {
    expect(() => {
        validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});