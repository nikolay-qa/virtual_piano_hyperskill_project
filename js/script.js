document.addEventListener("keydown", function (event) {
    const codeLetters = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];
    if (codeLetters.includes(event.key.toUpperCase())) {
        let audio = document.createElement("AUDIO");
        audio.src = `../audio/${event.key.toUpperCase()}.mp3`;
        audio.play();
        console.log(`The '${event.key}' key is pressed`);
    } else {
        console.log("Wrong key was pressed");
    }
});


