import assert, { AssertionError } from 'assert';

export const isArray = (arr: unknown) => Array.isArray(arr);
export const isValidArray = (arr: unknown) =>
    isArray(arr) && !!(arr as Array<unknown>)?.length;
export const assertArray = (
    arr: unknown,
    functionName: string,
    message: string,
) =>
    assert.equal(
        isArray(arr),
        true,
        new AssertionError({
            message: `ERROR - [${functionName}] - ${message}`,
            actual: arr,
        }),
    );
export const assertValidArray = (
    arr: unknown,
    functionName: string,
    message: string,
) =>
    assert.equal(
        isValidArray(arr),
        true,
        new AssertionError({
            message: `ERROR - [${functionName}] - ${message}`,
            actual: arr,
        }),
    );
