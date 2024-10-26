wrongWordCount = 0;

function onWrongAnswer() {
  wrongWordCount++;

  if (wrongWordCount == 7) {
    return;
  }

  hangmanParts = [
    "head",
    "body",
    "left-arm",
    "right-arm",
    "left-leg",
    "right-leg",
  ];

  part = hangmanParts[wrongWordCount - 1];
  console.log(part);
}

function onCorrectAnswer() {}
