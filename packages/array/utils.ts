import { assertStringValue } from '../string';
import { assertValidArray } from './validation';

export function getOccurences(arr: Array<string | number>) {
    assertValidArray(
        arr,
        getOccurences.name,
        `A non-empty Array is expected as a parameter of this function`,
    );
    const occurences: Map<
        string | number,
        {
            value: string | number;
            quantity: number;
        }
    > = new Map();

    for (const item of arr) {
        assertStringValue(
            typeof item,
            /(number)|(string)/g,
            getOccurences.name,
            `An Array of either string or number is expected as a parameter of this function`,
        );
        if (occurences.has(item)) {
            occurences.set(item, {
                value: item,
                quantity: occurences.get(item).quantity + 1,
            });
        } else {
            occurences.set(item, {
                value: item,
                quantity: 1,
            });
        }
    }

    return Array.from(occurences.values());
}
