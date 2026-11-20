function countTo(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
    return "It`s all!"
};
console.log(countTo(3));

function a(x) {
    for (let y = 0; y <= x; y++) {
        console.log(y)
    }
};
a(2);

function countdown(start) {
    for (let i = start; i >= 1; i--) {
        console.log(i)
    }
    return "Поехали"
};
console.log(countdown(3));

function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i // sum += 1
    }
    return sum
};
console.log(sumTo(4));

function sumEven(n) {
    let sum1 = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum1 = sum1 + i
        }
    }
    return sum1
};
console.log(sumEven(6));

function factorial(n){
    let aa = 1
    for (let i = 1; i <= n; i++){
        aa = aa * i
    }
    return aa
};
console.log(factorial(4));

function countChar(str, char) {
    let bb = 0
    for (let li of str) {
        if (li === char) {
            bb = bb + 1
        }
    }
    return bb
};
console.log(countChar("hello worlld", "l"));

function findMax(numbers) {
    let max = numbers[0]
    for (let num of numbers) {
        if (num > max) {
            max = num
        }
    }
    return max
};
console.log(findMax([3, 7, 2, 9, 4]));
console.log(findMax([-5, -1, -10]));