const button = document.getElementById("btn");
const textElement = document.getElementById("text");
const lyrics = `She's been my queen,Since we were sixteen,We want the same things,We dream the same dreams,Alright, alright`;
const music = new Audio("audio.mp3");
let play = false;
let click = false;
button.addEventListener("click", () => {
  if (!click) {
    music.play();
    click = true;
    setTimeout(() => {
        writingText(lyrics, textElement);
    },3200)
  } else {
    textElement.innerHTML = "";
    click = false;
  }
});

function writingText(
  text,
  element,
  charDelay = 50,
  lineDelay = 50,
  pauseDelay = 3200
) {
  let index = 0;
  let textLength = 0;
  const arrText = text.split(",");

  document.querySelector(".content").classList.add("resize");

  function writeLine() {
    if (index < arrText.length) {
      button.setAttribute("disabled", "true");
      if (textLength < arrText[index].length) {
        element.innerHTML += arrText[index].charAt(textLength);
        textLength++;
        setTimeout(writeLine, charDelay);
      } else {
        if (index == 4) {
          setTimeout(() => {
            element.innerText += "\n ";
            textLength = 0;
            index++;
            setTimeout(writeLine, lineDelay);
          }, pauseDelay);
        } else {
          element.innerText += "\n ";
          textLength = 0;
          index++;
          setTimeout(writeLine, lineDelay);
        }
      }
    } else {
      button.removeAttribute("disabled");
    }
  }
  writeLine();
}
