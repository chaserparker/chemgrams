var i = 0;
var txt = ["|", "C|", "Ch|", "Che|", "Chem|", "ChemG|", "ChemGr|", "ChemGra|", "ChemGram|", "ChemGrams|", "ChemGrams"];
const intro_text = document.getElementById("intro_text");

function turnOff() {
  intro_text.style.color = "transparent";
}

window.onload = function typeWriter() {
  if (i < 1) {
    speed = 500;
  }
  else {
    speed = 30;
  }
  if (i < txt.length) {
    intro_text.innerHTML = txt[i];
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    setTimeout(turnOff, 600);
  }
}