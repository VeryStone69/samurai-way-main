

export const required = (value: string) => {
    if (value) return undefined;
    return "Field is required"
}
export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols!`
    return undefined
}

export const maxLength100 = maxLengthCreator(100);
export const maxLength50 = maxLengthCreator(50);