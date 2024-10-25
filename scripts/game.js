word = "default";

// got the file reading method from stackoverflow
// https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file-in-the-browser
fetch("../data/wordlist.txt")
  .then((res) => res.text())
  .then((text) => {
    arr = text.split("\n");

    index = Math.floor(Math.random() * arr.length);
    word = arr[index];
    console.log("word: " + word);

    startGame(word);
  })
  .catch((e) => console.error(e));

function startGame(word) {
  initButtonListeners();
}

function initButtonListeners() {
  keys = Array.from(document.getElementsByClassName("letter"));

  keys.forEach((key) => {
    key.addEventListener("click", function (key) {
      if(key.target.classList.contains("pressed")) return;

      letter = key.target.innerText
      key.target.classList.add("pressed")

      if(word.includes(letter.toLowerCase())) onCorrectAnswer();
      else onWrongAnswer();
    });
  });
}
