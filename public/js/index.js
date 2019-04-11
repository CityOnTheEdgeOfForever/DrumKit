var x = document.querySelectorAll("button");
var y;
var audio;
var string1 = "url(/images/";
var string2;
var string3 = ".png)";
var string4;
var string5 = "/sounds/";
var string6;
var string7 = ".mp3";
var string8;

// function addBackgroundImage() {
//   string2 = "crash";
//   string4 = string1 + string2 + string3;
//   document.querySelector(".w").style.backgroundImage = string4;
//
//   string2 = "kick";
//   string4 = string1 + string2 + string3;
//   document.querySelector(".a").style.backgroundImage = string4;
//
//   string2 = "snare";
//   string4 = string1 + string2 + string3;
//   document.querySelector(".s").style.backgroundImage = string4;
//
//   string2 = "tom1";
//   string4 = string1 + string2 + string3;
//   document.querySelector(".d").style.backgroundImage = string4;
//
//   string2 = "tom2";
//   string4 = string1 + string2 + string3;
//   document.querySelector(".j").style.backgroundImage = string4;
//
//   string2 = "tom3";
//   string4 = string1 + string2 + string3;
//   document.querySelector(".k").style.backgroundImage = string4;
//
//   string2 = "tom4";
//   string4 = string1 + string2 + string3;
//   document.querySelector(".l").style.backgroundImage = string4;
// }
//
// addBackgroundImage();

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  applyStyle(event.key);
});

for (var i = 0; x.length; i++) {
  y = x[i];
  y.addEventListener("click", function() {
    this.style.color = "white";
    makeSound(this.textContent);
    applyStyle(this.textContent);


  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      string6 = "crash";
      string8 = string5 + string6 + string7;
      string9 = "." + key;
      audio = new Audio(string8);
      audio.play();

      break;
    case "a":
      string6 = "kick-bass";
      string8 = string5 + string6 + string7;
      audio = new Audio(string8);
      audio.play();

      break;
    case "s":
      string6 = "snare";
      string8 = string5 + string6 + string7;
      audio = new Audio(string8);
      audio.play();

      break;
    case "d":
      string6 = "tom-1";
      string8 = string5 + string6 + string7;
      audio = new Audio(string8);
      audio.play();

      break;
    case "j":
      string6 = "tom-2";
      string8 = string5 + string6 + string7;
      audio = new Audio(string8);
      audio.play();

      break;
    case "k":
      string6 = "tom-3";
      string8 = string5 + string6 + string7;
      audio = new Audio(string8);
      audio.play();

      break;
    case "l":
      string6 = "tom-3";
      string8 = string5 + string6 + string7;
      audio = new Audio(string8);
      audio.play();

      break;
    default:

  }

}

function applyStyle(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
