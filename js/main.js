document.addEventListener("DOMContentLoaded", () => {
    createPhrase();

    let actualTime = 0;
    var init_flag = 0;
    var finish_flag = 0;

    resetStopwatch();

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

        if(init_flag == 0 && finish_flag == 0)
        {
            init_flag = 1;
            startStopwatch();
        }

        var streakFlag = 1;

        const phrase = getPhrase();

        for (let index = 0; index < phrase.length; index++)
        {
            var letter = document.getElementById(index+1);

            if(letter.innerHTML == inputValue[index] && streakFlag == 1)
            {
                letter.className = "typed";
                if(index == phrase.length - 1)
                {
                    stopStopwatch();
                    init_flag = 0;
                    finish_flag = 1;
                    inputText.disabled = true;
                }
            }
            else
            {
                letter.className = "untyped";
                streakFlag = 0;
            }
        }
    });

    var startTime; // to keep track of the start time
    var stopwatchInterval; // to keep track of the interval
    var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped
    
    function startStopwatch() {
      if (!stopwatchInterval) {
        startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
        stopwatchInterval = setInterval(updateStopwatch, 1); // update every millisecond
      }
    }
    
    function stopStopwatch() {
      clearInterval(stopwatchInterval); // stop the interval
      elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
      stopwatchInterval = null; // reset the interval variable
    }
    
    function resetStopwatch() {
      stopStopwatch(); // stop the interval
      elapsedPausedTime = 0; // reset the elapsed paused time variable
      document.getElementById("actual-time").innerHTML = "Time: 0.000s"; // reset the display
    }
    
    function updateStopwatch() {
      var currentTime = new Date().getTime(); // get current time in milliseconds
      var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
      var milliseconds = elapsedTime % 1000 // calculate milliseconds
      var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
      var displayTime = "Time: " + String(seconds) + '.' + String(milliseconds) + 's'; // format display time
      document.getElementById("actual-time").innerHTML = displayTime; // update the display
    }

    const resetButton = document.getElementById('reset-button');

    resetButton.addEventListener("click", () => {
        resetStopwatch();
        init_flag = 0;
        finish_flag = 0;

        inputText.value = "";
        inputText.disabled = false;

        const phrase = getPhrase();

        for (let index = 0; index < phrase.length; index++)
        {
            var letter = document.getElementById(index+1);
            letter.className = "untyped";
        }

    });
})

