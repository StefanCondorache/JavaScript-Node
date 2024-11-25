// function Fibbonaci(x){
//     if( x === 1) return 1;
//     else if( x === 0) return 0;
//     else {
//         return Fibbonaci(x-1) + Fibbonaci(x-2);
//     }
// }

// let x = Fibbonaci(45);
// console.log("X: ", x);
// let y = Fibbonaci(46);
// console.log("Y: ", y);

// const Phi = x/y;
// console.log(Phi.toPrecision(100));
/////////////////////////////////////////////////

function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(6);
console.log(game.getScore());
console.log(game.score);

 