import {FinanceUtils} from './finance-utils';
import {TestBed} from '@angular/core/testing';

describe('FinanceUtils', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  describe('parseInputNumber', () => {
    it('should parse K values', () => {
      const result = FinanceUtils.parseInputNumber('5K');
      expect(result.outputNumber?.valueOf()).toEqual(5000);
    });

    it('should parse M values', () => {
      const result = FinanceUtils.parseInputNumber('3M');
      expect(result.outputNumber?.valueOf()).toEqual(3000000);
    });

    it('should parse B values', () => {
      const result = FinanceUtils.parseInputNumber('2B');
      expect(result.outputNumber?.valueOf()).toEqual(2000000000);
    });

    it('should parse T values', () => {
      const result = FinanceUtils.parseInputNumber('1T');
      expect(result.outputNumber?.valueOf()).toEqual(1000000000000);
    });

    it('should parse without unit', () => {
      const result = FinanceUtils.parseInputNumber('500');
      expect(result.outputNumber?.valueOf()).toEqual(500);
    });

    it('should return undefined for incorrect value', () => {
      const result = FinanceUtils.parseInputNumber('5P');
      expect(result.outputNumber).toBeUndefined();
    });

    it('should return undefined for undefined input', () => {
      const result = FinanceUtils.parseInputNumber(undefined);
      expect(result.outputNumber).toBeUndefined();
    });
  });
});
