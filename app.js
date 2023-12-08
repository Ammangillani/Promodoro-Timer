let promodorostart = document.getElementById("#promodoro");
let shortbreak = document.getElementById("#Shortbreak");
let longbreak = document.getElementById("#longbreak");

let promodorotimer = 25;
let shortbreaktime = 5;
let longbreaktime = 15;

let second = "00";

window.onload = () => {
  document.getElementById("minutes").innerHTML = promodorotimer;
  document.getElementById("Second").innerHTML = second;
};
