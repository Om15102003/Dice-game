var randomNumber1=1+Math.floor(Math.random()*6);
var png="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src","./images/"+png);
var randomNumber2=1+Math.floor(Math.random()*6);
var png2="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src","./images/"+png2);
if(randomNumber1>randomNumber2) document.querySelector("h1").textContent="🚩Player 1 wins!";
else if(randomNumber1<randomNumber2) document.querySelector("h1").textContent="🚩Player 2 wins!";
else document.querySelector("h1").textContent="Draw!";