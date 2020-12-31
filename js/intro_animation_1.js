var i = 0;
var txt = ["|", "C|", "Ch|", "Che|", "Chem|", "ChemG|", "ChemGr|", "ChemGra|", "ChemGram|", "ChemGrams", "ChemGrams"];
const typing_animation = document.getElementById("typing-animation");
typing_animation.style.fontFamily = "Numans, sans-serif";
const split_animation = document.getElementById("split-animation");
split_animation.style.fontFamily = "Numans, sans-serif";
const reveal_logo = document.getElementById("reveal-logo");
reveal_logo.style.fontFamily = "Numans, sans-serif";
const fade_out = document.getElementById("fade-out");

function unsetObjects() {
  typing_animation.style.zIndex = "-10000";
  split_animation.style.zIndex = "-10000";
  reveal_logo.style.zIndex = "-10000";
  fade_out.style.zIndex = "-10000";
}

function typeWriter(callback = split) {
  if (i < 1) {
    speed = 500;
  }
  else {
    speed = 30;
  }
  if (i < txt.length) {
    typing_animation.innerHTML = txt[i];
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (i === txt.length) {
    i++;
    setTimeout(typeWriter, 700);
  }
  else if (i > txt.length) {
    typing_animation.style.opacity = 0;
    callback(); // runs split() once this function finishes
  }
}

var j = 0;

function split(callback = displayLogo) {
  var split_letters = ["C", "he", "mG", "ra", "m", "s"];
  var split_locations = ["-67%", "-40%", "-21%", "0%", "24.5%", "54.5%"];
  if (j < 1) {
    for (var i = 0; i < split_letters.length; i++) {
      var letter = document.createElement("span");
      letter.innerHTML = split_letters[i];
      letter.style.position = "relative";
      letter.animate ([
        { left: "0"},
        { left: split_locations[i]},
      ], {
        iterations: 1,
        duration: 400,
        fill: "forwards"
      });
      split_animation.animate ([
        { left: "50%", top: "20%", transform: "translate(-50%, -20%)"},
        { left: "50%", top: "50%", transform: "translate(-50%, -50%)"},
      ], {
        iterations: 1,
        duration: 400,
        fill: "forwards"
      });
      split_animation.appendChild(letter);
    }
    j++;
    setTimeout(split, 1100);
  }
  else if (j === 1) {
    split_animation.animate ([
      { opacity: "100"},
      { opacity: "0"},
    ], {
      iterations: 1,
      duration: 100,
      fill: "forwards"
    });
    j++;
    setTimeout(split, 500);
    callback();
  }
}

var k = 0;

function displayLogo(callback = fadeOut) {
  var numbers = ["6", "2", "12", "88", "-", "16"];
  var symbols = ["C", "He", "Mg", "Ra", "m", "S"];
  var elements = ["Carbon", "Helium", "Magnesium", "Radium", "mass", "Sulfur"];
  var squareColors = ["#FF4E4E", "#FFA94E", "#F3D200", "#0CD033", "#2675FF", "#A326FF"];
  var locations = ["21%", "32%", "43%", "54%", "65%", "76%"];
  if (k < 1) {
    for (var i = 0; i < numbers.length; i++) {
      var square = document.createElement("div");
      square.className = "logo-square";
      square.style.background = squareColors[i];
      square.style.left = locations[i];

      var number = document.createElement("span");
      square.appendChild(number);
      number.innerHTML = numbers[i];
      number.style.fontSize = "1vw";
      number.style.position = "fixed";
      number.style.top = "5%";
      number.style.left = "50%";
      number.style.transform = "translate(-50%, -5%)";
      number.style.zIndex = "51";

      var symbol = document.createElement("span");
      square.appendChild(symbol);
      symbol.innerHTML = symbols[i];
      symbol.style.fontSize = "4vw";
      symbol.style.position = "fixed";
      symbol.style.top = "50%";
      symbol.style.left = "50%";
      symbol.style.transform = "translate(-50%, -50%)";
      symbol.style.zIndex = "52";

      var element = document.createElement("span");
      square.appendChild(element);
      element.innerHTML = elements[i];
      element.style.fontSize = "1vw";
      element.style.position = "fixed";
      element.style.top = "95%";
      element.style.left = "50%";
      element.style.transform = "translate(-50%, -95%)";
      element.style.zIndex = "53";

      square.animate ([
        { opacity: "0"},
        { opacity: "100"},
      ], {
        iterations: 1,
        duration: 1000,
        fill: "forwards"
      });

      reveal_logo.appendChild(square);
    }
    k++;
    setTimeout(displayLogo, 1500);
  }
  else if (k === 1) {
    reveal_logo.animate ([
      { opacity: "100"},
      { opacity: "0"},
    ], {
      iterations: 1,
      duration: 500,
      fill: "forwards"
    });
    k++;
    setTimeout(displayLogo, 800);
  }
  else if (k > 1) {
    callback();
  }
}

function fadeOut() {
  fade_out.animate ([
    { opacity: "100"},
    { opacity: "0"},
  ], {
    iterations: 1,
    duration: 750,
    fill: "forwards"
  });
  setTimeout(unsetObjects, 500);
}

window.onload = function introAnimation() {
  if (split_animation.hasChildNodes()) {
    while (split_animation.hasChildNodes()) {
      split_animation.removeChild(split_animation.firstChild)
    }
  }
  if (reveal_logo.hasChildNodes()) {
    while (reveal_logo.hasChildNodes()) {
      reveal_logo.removeChild(reveal_logo.firstChild)
    }
  }
  typeWriter();
}