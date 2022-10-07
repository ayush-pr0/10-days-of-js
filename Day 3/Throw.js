
// Test Cases Value

const a = 2;
// const a = 0;
// const a = -3;
// const a = 100;
// const a = -99;


const resultValue = isPositive(a);
console.log(resultValue);

function isPositive(a) {
    if (a > 0) {
        return "YES"
    } else if (a == 0) {
        throw new Error("Zero Error")
    } else if (a < 0) {
        throw new Error("Negative Error")
    }
}