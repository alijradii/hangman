wrongWordCount = 0;

function onWrongAnswer() {
  wrongWordCount++;

  hangmanParts = [
    "head",
    "body",
    "left-hand",
    "right-hand",
    "left-leg",
    "right-leg",
  ];

  part = hangmanParts[wrongWordCount - 1];
  let element = document.createElement("img");
  element.setAttribute("id", part);
  element.setAttribute("class", part);
  element.setAttribute("src", `../assets/${part}.svg`);

  hang.appendChild(element);

  if (wrongWordCount == 6) {
    setTimeout(() => {
      alert(`You Lose!\n\nThe word was "${word}"`);
      location.reload();
    }, 400);
  }
}
