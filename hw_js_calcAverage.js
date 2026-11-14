/* Сделать функцию addNumber которая принимает число в качестве параметра
и 1) записывает это число в массив
2) печатается сообщение что такое-то число занесено в массив (через
интерполяцию)
В этом же задании сделать функцию calculateAverage которая считает среднее значение 
из нашего массива и выводит значение на консоль до 2 знаков после запятой
*/

let numbers = []
function addNumber(number) {
    numbers.push(number)
    console.log(`Число ${number} занесено в массив`)
}
function calculateAverage() {
    if (numbers.length === 0) {
        return "Ошибка: массив пуст"
    }
    let sum = 0
    for (let num of numbers) {
        sum = sum + num
    }
    let average = sum / numbers.length
        return average.toFixed(2)
};

addNumber(80);
addNumber(50);
addNumber(70);
addNumber(90);
console.log(`Среднее - ${calculateAverage()}`);