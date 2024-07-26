import assert, { AssertionError } from 'assert';

export const isString = (str: unknown) => typeof str === 'string';
export const assertString = (
    str: unknown,
    functionName: string,
    message: string,
) =>
    assert.equal(
        isString(str),
        true,
        new AssertionError({
            message: `ERROR - [${functionName}] - ${message}`,
            actual: str,
        }),
    );
export const assertStringValue = (
    str: unknown,
    expression: RegExp,
    functionName: string,
    message: string,
) => {
    assertString(str, functionName, message);
    assert.match(
        str as string,
        expression,
        `ERROR - [${functionName}] - ${message}`,
    );
};
