/* Сделать калькулятор - функция calculator с 3 параметрами(a,b,operator)
operator +-/* - сделать действия на каждый оператор
Сделать проверку что параметры только числа
return каждого рез-та
если b = 0, то выводить ошибку на ноль делить нельзя
Ошибка: неизвестный оператор

task_1
*/
function calculator(a, b, operator) {
    if (typeof a !== "number" || typeof b !== "number")
    return "ERROR: enter a number"
    switch(operator) {
        case "+":
        return a + b;
        case "-":
        return a - b;
        case "*":
        return a * b;
        case "/":
        if( b === 0) {
        return "ERROR: can`t divide by 0"
        }
        return a / b
        default:
        return "ERROR: unknown operator"
    }
}

console.log(calculator(5, 2, "*"))
console.log(calculator(1, 3, "+"))
console.log(calculator(7, 2, "/"))
console.log(calculator(4, 3, "-"))
console.log(calculator(1, 0, "/"))
console.log(calculator("1", 3, "+"))
console.log(calculator(1, 3, "?"))