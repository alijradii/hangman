wrongWordCount = 0;

function onWrongAnswer() {
  wrongWordCount++;

  if (wrongWordCount == 7) {
    alert("You Lose!");

    location.reload();
  }

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
}
