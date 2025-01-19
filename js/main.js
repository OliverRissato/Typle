document.addEventListener("DOMContentLoaded", () => {
    createPhrase();

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
})