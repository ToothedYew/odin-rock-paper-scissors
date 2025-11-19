function getComputerChoice() {
    let x = (Math.random() * 100) ;
    if (x > 0 && x <= 33) {
        return "rock" ;
    } else if (x > 33 && x <= 66) {
        return "paper" ;
    } else {
        return "scissors" ;
    } 
    } ;