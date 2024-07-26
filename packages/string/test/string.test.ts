import { AssertionError } from 'assert';
import { describe, expect, it } from 'vitest';
import {
    assertString,
    assertStringValue,
    isInString,
    isString,
    toBase64,
} from '..';

describe('isString', () => {
    it('Should return true if the parameter is a string', () => {
        expect(isString('string test')).toStrictEqual(true);
        expect(isString('')).toStrictEqual(true);
    });
    it('Should return false if the parameter is not a string', () => {
        expect(isString(1)).toStrictEqual(false);
        expect(isString({})).toStrictEqual(false);
        expect(isString([])).toStrictEqual(false);
        expect(isString(undefined)).toStrictEqual(false);
    });
});

describe('assertString', () => {
    it('Should not throw an error if the parameter is a string', () => {
        expect(() =>
            assertString(
                'string test',
                'Test Assert String',
                null as unknown as string,
            ),
        ).not.toThrow();

        expect(() =>
            assertString('', 'Test Assert String', null as unknown as string),
        ).not.toThrow();
    });
    it('Should throw an error if the parameter is not a string', () => {
        expect(() =>
            assertString(1, 'Test Assert String', null as unknown as string),
        ).toThrow(AssertionError);

        expect(() =>
            assertString({}, 'Test Assert String', null as unknown as string),
        ).toThrow(AssertionError);
    });
});

describe('assertStringValue', () => {
    it('Should not throw an error if the parameter is a string which matches the expected value', () => {
        expect(() =>
            assertStringValue(
                'string',
                /string/g,
                'Test Assert String',
                'error message',
            ),
        ).not.toThrow();
    });
    it('Should throw an error the parameter is not a string', () => {
        expect(() =>
            assertStringValue(
                'number',
                /string/g,
                'Test Assert String',
                'error message',
            ),
        ).toThrow(AssertionError);
    });
});

describe('toBase64', () => {
    it('Should return the base64 version of the string', () => {
        expect(toBase64('test')).toStrictEqual('dGVzdA==');
    });
});

describe('isInString', () => {
    it('Should return true if the sample was found in the string', () => {
        expect(isInString('test', 'st')).toStrictEqual(true);
    });
    it('Should return true if the sample was found in the string', () => {
        expect(isInString('test', 'string')).toStrictEqual(false);
    });
});
