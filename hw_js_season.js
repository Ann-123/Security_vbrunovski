/*Сделать функцию getSeason которая принимает 2 параметра: month, temperature
сделать проверку чтобы функция принимала только числа (иначе вылетает ошибка 
- Неверный Тип данных)
сделать проверку если месяц введен НЕ в промежутке 1 и 12, то выводить сообщение 
Ошибка - такого месяца нету
Затем проверки следующие
если месяц 12 1 и 2 и темп <=5 - то это зима
если месяц между 3 и 5 и темп <20 - то это весна
если месяц между 6 и 8 и темп >20 - то это лето
если месяц между 9 и 11 и темп 5 - 20 - то осень
в противной случае - несоответствия сезона
*/

function getSeason(month, temperature) {
    if (typeof month !== "number" || typeof temperature !== "number"){
        return "ERROR: invalid data type"
        }
    if (month < 1 || month > 12) {
        return "ERROR: there is no such month"
        }
    else if ((month === 12 || month === 1 || month === 2) && temperature <=5) {
        return "Winter"
        }
    else if ((month === 3 || month === 4 || month === 5) && temperature < 20) {
        return "Spring"
        }
    else if ((month === 6 || month === 7 || month === 8) && temperature > 20) {
        return "Summer"
        }
    else if ((month === 9 || month === 10 || month === 11) && temperature >= 5 && temperature <= 20) {
        return "Autumn"
        }
    else {
        return "ERROR: seasonal mismatch"
        }
};
console.log(getSeason(12, 5))
console.log(getSeason(4, 15))
console.log(getSeason(8, 21))
console.log(getSeason(11, 20))
console.log(getSeason("11", 20))
console.log(getSeason(13, 20))
console.log(getSeason(12, 20))
