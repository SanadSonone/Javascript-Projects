 const timerDisplay = document.querySelector('.timerDisplay');
    const stopBtn = document.getElementById('stopBtn');
    const startBtn = document.getElementById('startBtn');
    const resetBtn = document.getElementById('resetBtn');

    let msec = 0, secs = 0, mins = 0;
    let timerId = null;

    function startTimer() {
      msec++;
      if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
          secs = 0;
          mins++;
        }
      }

      const msecString = msec < 10 ? `0${msec}` : msec;
      const secsString = secs < 10 ? `0${secs}` : secs;
      const minsString = mins < 10 ? `0${mins}` : mins;

      timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
    }

    startBtn.addEventListener('click', () => {
      if (timerId !== null) {
        clearInterval(timerId);
      }
      timerId = setInterval(startTimer, 10);
    });

    stopBtn.addEventListener('click', () => {
      clearInterval(timerId);
    });

    resetBtn.addEventListener('click', () => {
      clearInterval(timerId);
      timerDisplay.innerHTML = `00 : 00 : 00`;
      msec = secs = mins = 0;
      timerId = null;
    });