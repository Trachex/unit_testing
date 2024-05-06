import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import { NumbersValidator } from '../../app/numbers-validator.js';

describe('isInteger', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });
  
    afterEach(() => {
        validator = null;
    });
  
    it('should return true if integer', () => {
        expect(validator.isInteger(1)).to.be.equal(true);
    });

    it('should return false if not integer', () => {
        expect(validator.isInteger(1.5)).to.be.equal(false);
    });
  
    it('should throw an error if input is not a number', () => {
        expect(() => {
            validator.isInteger('integer');
        }).to.throw('[integer] is not a number');
    });
});