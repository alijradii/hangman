word = "";
cur = "";

answerSection = document.getElementById("answer-section");

// got the file reading method from stackoverflow
// https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file-in-the-browser
fetch("../data/wordlist.txt")
  .then((res) => res.text())
  .then((text) => {
    arr = text.split("\n");

    index = Math.floor(Math.random() * arr.length);
    word = arr[index];
    cur = "-".repeat(word.length);
    console.log("word: " + word);

    startGame(word);
  })
  .catch((e) => console.error(e));

function startGame(word) {
  initAnswerSection(word);
  initButtonListeners();
}

function initButtonListeners() {
  keys = Array.from(document.getElementsByClassName("letter"));

  keys.forEach((key) => {
    key.addEventListener("click", function (key) {
      if (key.target.classList.contains("pressed")) return;

      letter = key.target.innerText.toLowerCase();
      key.target.classList.add("pressed");

      if (word.includes(letter)) onCorrectAnswer(letter);
      else onWrongAnswer();
    });
  });
}

function initAnswerSection(word) {
  answerSection.innerText = cur;

  console.log(answerSection.innerText);
}

function onCorrectAnswer(letter) {
  newString = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) newString += word[i];
    else newString += cur[i];
  }

  cur = newString;
  answerSection.innerText = cur;
}
