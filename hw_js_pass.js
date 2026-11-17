/*Есть строка 
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
Сделать функцию, которая генерирует рандомный пароль по его длине
Например, я вызываю функцию generatePassword(4)
Мне печатается пароль из рандомных значений длиной 4
*/

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
function genpass(length) {
    let pass = ""
    for (let i = 0; i < length; i++) {
        let randomInd = Math.floor(Math.random() * charset.length)
        pass += charset[randomInd]
    }
    return pass
};

console.log(genpass(7));