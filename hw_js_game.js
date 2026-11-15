/* Сделать игру камень ножницы бумага 
ф-ция принимает выбор игрока
если у тебя и у компа одинаковые значение - пишет Ничья
если ты выиграл - пишет ты выиграл
если проиграл - ты проиграл
компьютер загадывает рандомное значение - камень или ножницы или бумага
rock - paper - scissors
*/

function game(playerchoice) {
    let options = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * options.length)
    let compchoice = options[index]
    if (playerchoice === compchoice) {
        return "Ничья"
    }
    else if (
        (playerchoice === "rock" && compchoice === "scissors") ||
        (playerchoice === "scissors" && compchoice === "paper") ||
        (playerchoice === "paper" && compchoice === "rock")) {
        return  "ты выиграл"
    }
    else {
        return "ты проиграл"
    }
};
console.log(game("rock"));
console.log(game("paper"));
console.log(game("scissors"));