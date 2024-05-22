var randomNumber1;
var randomNumber2;

function playWinnerSound() {
    var winnerAudio = document.getElementById("winnerSound");
    winnerAudio.play();
  }

function rollDice() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var pathImg1 = "./images/dice" + randomNumber1 + ".png";
    document.querySelector("img.img1").setAttribute("src", pathImg1);
  
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var pathImg2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector("img.img2").setAttribute("src", pathImg2);

    //who is the winner?
if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent="🥳Draw🥳"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="player 1 wins🏆"
    playWinnerSound(); 

}
else{
    document.querySelector("h1").textContent="player 2 wins🏆"
    playWinnerSound(); 
}
}



document.querySelector("button.btn").addEventListener("click", rollDice);
