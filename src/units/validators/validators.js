export const required = value => {
    if (value) return undefined;
    return "File is required"
}

export const maxLenghtCreator = (maxLenght) => value=> {
    return value && value.length > maxLenght ? `Must be ${maxLenght} characters or less` : undefined
}
