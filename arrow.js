// function doubleIt(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result1 =  add(55, 70);
const result = doMath(7, 5)
console.log(result);