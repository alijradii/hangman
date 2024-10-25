word = "default";

// got the file reading method from stackoverflow
// https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file-in-the-browser
fetch("../data/wordlist.txt")
  .then((res) => res.text())
  .then((text) => {
    arr = text.split("\n");

    index = Math.floor(Math.random() * arr.length);
    word = arr[index];
    console.log(word);

    startGame(word);
  })
  .catch((e) => console.error(e));

function startGame(word) {
  initButtonListeners();
}

function initButtonListeners() {
  keys = Array.from(document.getElementsByClassName("letter"));
  console.log(keys)

  keys.forEach((key) => {
    key.addEventListener("click", function (key) {
      console.log(key.target.innerText);
    });
  });
}
