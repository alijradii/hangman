wrongWordCount = 0

function onWrongAnswer() {
    wrongWordCount++;

    if(wrongWordCount == 7) {
    }

    hangmanParts = {
        1: "head",
        2: "body", 
        3: "left-arm",
        4: "right-arm",
        5: "left-leg",
        6: "right-leg"
    }

    part = hangmanParts[wrongWordCount]
    console.log(part)
}

function onCorrectAnswer() {

}