/* Сделать функцию addNumber(number) - она добавляет в массив число и
пишет сообщение "Число " + number + " добавлено в массив." (Сделать через интерполяцию обязательно)
Сделать функцию analyzeNumbers() - анализирует сколько чисел в массиве
(который у нас создан в предыдущем пункте) положительных, отрицательных и 0.
*/

let numbers = []
function addNumber(number) {
    numbers.push(number)
    console.log(`Число ${number} добавлено в массив`)
}

function ananalyzeNumbers() {
    let positive = 0
    let negative = 0
    let zero = 0
        for (let num of numbers) {
            if (num > 0) {
                positive++
            }
            else if (num < 0) {
                negative++
            }
            else {
                zero++
                }
            }
        console.log(`Итого: положительных чисел - ${positive}, отрицательных - ${negative} и нуль - ${zero}.`)
        };

console.log(addNumber(5))
console.log(addNumber(-2))
console.log(addNumber(0))
console.log(addNumber(7))
console.log(ananalyzeNumbers())
