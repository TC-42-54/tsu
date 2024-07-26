import { AssertionError } from 'assert';
import { describe, expect, it } from 'vitest';
import {
    assertArray,
    assertValidArray,
    getOccurences,
    isArray,
    isValidArray,
} from '..';

describe('isArray', () => {
    it('Should be true wether the array is empty or not', () => {
        expect(isArray([])).toStrictEqual(true);
        expect(isArray([1, 2, 3])).toStrictEqual(true);
    });
    it('Should be false if it is anything but an array', () => {
        expect(isArray({})).toStrictEqual(false);
        expect(isArray({ 0: 1, 1: 2, 2: 3 })).toStrictEqual(false);
        expect(isArray(1)).toStrictEqual(false);
        expect(isArray('[1, 2, 3]')).toStrictEqual(false);
        expect(isArray(null)).toStrictEqual(false);
        expect(isArray(undefined)).toStrictEqual(false);
    });
});

describe('isValidArray', () => {
    it('Should be true only when the array is not empty', () => {
        expect(isValidArray([])).toStrictEqual(false);
        expect(isValidArray([1, 2, 3])).toStrictEqual(true);
    });
    it('Should be false if it is anything but an array', () => {
        expect(isValidArray({})).toStrictEqual(false);
        expect(isValidArray({ 0: 1, 1: 2, 2: 3 })).toStrictEqual(false);
        expect(isValidArray(1)).toStrictEqual(false);
        expect(isValidArray('[1, 2, 3]')).toStrictEqual(false);
        expect(isValidArray(null)).toStrictEqual(false);
        expect(isValidArray(undefined)).toStrictEqual(false);
    });
});

describe('assertArray', () => {
    it('Should be throwing an error when the content is not an array', () => {
        expect(() =>
            assertArray('not an array', 'TestAssertArray', 'Array Expected'),
        ).toThrow(AssertionError);
    });
    it('Should not be throwing an error when the content is an array', () => {
        expect(() =>
            assertArray([], 'TestAssertArray', 'Array Expected'),
        ).not.toThrow();
    });
});

describe('assertValidArray', () => {
    it('Should be throwing an error when the content is anything but an array with elements', () => {
        expect(() =>
            assertValidArray(
                'not an array',
                'TestAssertArray',
                'Array Expected',
            ),
        ).toThrow(AssertionError);
        expect(() =>
            assertValidArray([], 'TestAssertArray', 'Array Expected'),
        ).toThrow(AssertionError);
    });
    it('Should not be throwing an error when the content is an array with elements', () => {
        expect(() =>
            assertValidArray([1, 2, 3], 'TestAssertArray', 'Array Expected'),
        ).not.toThrow();
    });
});

describe('getOccurences', () => {
    it('Should be throwing an error when the content is anything but an array of string/number elements', () => {
        expect(() => getOccurences([])).toThrow(AssertionError);
        expect(() =>
            getOccurences([{}, {}, {}] as unknown as Array<string | number>),
        ).toThrow(AssertionError);
    });

    it('Should return the list of occurences of the array', () => {
        expect(getOccurences([1, 1, 1, 2, 2, 3])).toStrictEqual([
            { value: 1, quantity: 3 },
            { value: 2, quantity: 2 },
            { value: 3, quantity: 1 },
        ]);
    });
});
