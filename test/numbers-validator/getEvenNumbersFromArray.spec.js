import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import { NumbersValidator } from '../../app/numbers-validator.js';

describe('getEvenNumbersFromArray', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });
  
    afterEach(() => {
        validator = null;
    });
  
    it('should return an array of even numbers', () => {
        const arr = [5, 2, 6, 11, 22];
        expect(validator.getEvenNumbersFromArray(arr)).to.be.eql([2, 6, 22]);
    });
  
    it('should throw an error if array is not full of numbers', () => {
        const arr = [5, '2', 6, 11, 22];
        expect(() => {
            validator.getEvenNumbersFromArray(arr)
        }).to.throw('[5,2,6,11,22] is not an array of "Numbers"');
    });
});