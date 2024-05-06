import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import { NumbersValidator } from '../../app/numbers-validator.js';

describe('isAllNumbers', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });
  
    afterEach(() => {
        validator = null;
    });
  
    it('should return true if all are numbers in the array', () => {
        const arr = [5, 2, 6, 11, 22];
        expect(validator.isAllNumbers(arr)).to.be.equal(true);
    });

    it('should return false if not all are numbers in the array', () => {
        const arr = [5, '2', 6, 11, 22];
        expect(validator.isAllNumbers(arr)).to.be.equal(false);
    });
  
    it('should throw an error if input is not an array', () => {
        expect(() => {
            validator.isAllNumbers('array');
        }).to.throw('[array] is not an array');
    });
});