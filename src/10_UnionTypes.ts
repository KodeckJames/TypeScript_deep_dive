// Union types are used when a value can be more than a single type. Such as when a property can be a string or a number

const statusCode = (code: string | number) => {
    return `The status code returned is ${code}`
};
console.log(statusCode(200));
console.log(statusCode("200"));