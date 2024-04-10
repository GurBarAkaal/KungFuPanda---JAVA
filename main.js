// KF Panda Search
let charnameel = document.getElementById("char-name");
let charquoteel = document.getElementById("char-quote");
let charimgel = document.getElementById("char-img");
//event listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let name = document.getElementById("char-in").value.toLowerCase();
  //if statement
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charnameel.innerHTML = "po";
    charquoteel.innerHTML = "buddy, i am the dragon warrior";
    charimgel.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charnameel.innerHTML = "tigress";
    charquoteel.innerHTML = "that was hardcore!";
    charimgel.src = "img/tigress.png";
  } else if (name === "mantis") {
    charnameel.innerHTML = "mantis";
    charquoteel.innerHTML = "fear the bug!";
    charimgel.src = "img/mantis.png";
  } else if (name === "monkey") {
    charnameel.innerHTML = "monkey";
    charquoteel.innerHTML =
      "If you beat me, I will go. If not, then it is you who must leave—without your pants!";
    charimgel.src = "img/monkey.png";
  } else if (name === "viper") {
    charnameel.innerHTML = "viper";
    charquoteel.innerHTML = "i dont need to bite to fight!";
    charimgel.src = "img/viper.png";
  } else if (name === "crane") {
    charnameel.innerHTML = "crane";
    charquoteel.innerHTML = "wings of justice";
    charimgel.src = "img/crane.png";
  } else if (name === "boss wolf") {
    charnameel.innerHTML = "boss wolf";
    charquoteel.innerHTML = "my fist in your plush, cuddly, super-soft face! ";
    charimgel.src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charnameel.innerHTML = "crane";
    charquoteel.innerHTML =
      "Stop flapping your mouth and start flapping your wings. ";
    charimgel.src = "img/crane.png";
  } else if (name === "croc") {
    charnameel.innerHTML = "croc";
    charquoteel.innerHTML = "The only hero in this town is a dead one";
    charimgel.src = "img/croc.png";
  } else if (name === "kai") {
    charnameel.innerHTML = "kai";
    charquoteel.innerHTML =
      " there will be no one left who will even remember your name.";
    charimgel.src = "img/kai.png";
  } else if (name === "mr ping") {
    charnameel.innerHTML = "mr ping";
    charquoteel.innerHTML =
      "There is no secret ingredient. Don't have to. To make something special, you just believe it's special.";
    charimgel.src = "img/mr-ping.png";
  } else if (name === "oogway") {
    charnameel.innerHTML = "oogway";
    charquoteel.innerHTML = "You must believe";
    charimgel.src = "img/oogway.png";
  } else if (name === "shen") {
    charnameel.innerHTML = "shen";
    charquoteel.innerHTML =
      "Then China will know to bow before me. Set sail! Nothing stands in my way.";
    charimgel.src = "img/shen.png";
  } else if (name === "shifu") {
    charnameel.innerHTML = "shifu";
    charquoteel.innerHTML =
      "If you only do what you can do, you'll never be better than what you are.";
    charimgel.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charnameel.innerHTML = "soothsayer";
    charquoteel.innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are";
    charimgel.src = "img/soothsayer.png";
  } else if (name === "storming ox") {
    charnameel.innerHTML = "storming ox";
    charquoteel.innerHTML = "It's time to surrender, panda";
    charimgel.src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    charnameel.innerHTML = "tai lung";
    charquoteel.innerHTML =
      "Not your fault? Who filled my head with dreams? Who drove me to train until my bones cracked? Who denied me my destiny?";
    charimgel.src = "img/tai-lung.png";
  } else {
    charnameel.innerHTML = "?????";
    charquoteel.innerHTML = "--------";
    charimgel.src = "img/question-mark.png";
  }
}
let themeColour = document.getElementById("themecolour");
let textColour = document.getElementById("textTheme");
document.getElementById("theme-btn").addEventListener("click", themebtnClicked);
function themebtnClicked() {
  let theme = document.getElementById("theme-in").value.toLowerCase();
  if (theme === "dark" || theme === "black") {
    themeColour.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    textColour.style.color = "white";
  } else if (theme === "light" || theme === "white") {
    themeColour.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    textColour.style.color = "black";
  } else if (theme === "random") {
    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);

    var randomColor =
      "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

    var randcol =
      "rgba(" + randomGreen + "," + randomRed + "," + randomBlue + "0.7)";

    textColour.style.color = randomColor;

    themeColour.style.backgroundColor = randcol;
  }
}
