var randomNumber1=Math.floor(Math.random()*6)+1;
var one="./images/dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",one);



var randomNumber2=Math.floor(Math.random()*6)+1;
var two="./images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",two);


if (randomNumber1>randomNumber2){
document.getElementsByTagName("h1")[0].innerHTML="player1 wins";
}
else if (randomNumber2>randomNumber1){
 document.getElementsByTagName("h1")[0].innerHTML="player2 wins";
}
else{
  document.getElementsByTagName("h1")[0].innerHTML="draw";
}