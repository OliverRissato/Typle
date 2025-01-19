document.addEventListener("DOMContentLoaded", () => {
    createPhrase();

    let actualTime = 0;

    resetTime();

    function getPhrase() {
        const phrase = new String("Frase do dia");

        return phrase;
    }

    function createPhrase() {
        const phraseBox = document.getElementById("phrase-box")

        let par = document.createElement("p");
        par.classList.add("par-phrase");

        phraseBox.appendChild(par);

        const phrase = getPhrase();

        for (let index = 0; index < phrase.length; index++) {
            let letter = document.createElement("span");
            letter.classList.add("untyped");
            letter.setAttribute("id", index + 1);
            letter.innerHTML = phrase[index];
            par.appendChild(letter);
          }
    }

    function resetTime() {
        actualTime = 0;

        const time_output = document.getElementById("actual-time");

        time_output.innerHTML = "Time: " + String(actualTime) + "s";
    }

    const inputText = document.getElementById('type-text');

    inputText.addEventListener("input", (event) => {
        var inputValue = event.target.value;

        const phrase = getPhrase();

        for (let index = 0; index < phrase.length; index++)
        {
            var letter = document.getElementById(index+1);

            if(letter.innerHTML == inputValue[index])
            {
                letter.className = "typed";
            }
            else
            {
                letter.className = "untyped";
            }
        }
    });
})

