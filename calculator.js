// 덧셈
const add = (a, b) => {
    return a + b;
};

// 뺄셈
const substract = (a, b) => {
    return a - b;
};

// 곱셈
const multiply = (a, b) => {
    return a * b;
};

// 나눗셈
const divide = (a, b) => {
    if (b === 0) {
        throw new Error();
    }
    return a / b;
};