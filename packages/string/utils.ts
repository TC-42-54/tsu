export const toBase64 = (value: string) =>
    Buffer.from(value).toString('base64');
export const isInString = (str: string, toFind: string) =>
    str.indexOf(toFind) >= 0;
