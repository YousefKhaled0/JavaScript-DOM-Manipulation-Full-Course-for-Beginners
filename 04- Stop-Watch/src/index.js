const startButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

let intervalId = -1;
let countSeconds = 0;

startButton.addEventListener('click', () => {

    if (intervalId !== -1){

        clearInterval(intervalId);
        intervalId = -1;
        return;
    }

    intervalId = setInterval(() => {

        countSeconds++;
        document.getElementById('stopwatch').innerText = getTimePassedString(countSeconds);
        
    }, 1000);
});

resetButton.addEventListener('click', () => {

    clearInterval(intervalId);
    countSeconds = 0;
    document.getElementById('stopwatch').innerText = '00:00:00';
});

function getTimePassedString(countSeconds) {

    let h = Math.floor(countSeconds/ 3600);
    countSeconds = countSeconds - (h * 3600);

    let m = Math.floor(countSeconds / 60);
    countSeconds = countSeconds - (m * 60);

    let hStr = `${h}` , mStr = `${m}` , sStr = `${countSeconds}`;
    
    if (hStr.length < 2){
        
        hStr = '0' + hStr;
    }

    if (mStr.length < 2){
        
        mStr = '0' + mStr;
    }
    
    if (sStr.length < 2){
        
        sStr = '0' + sStr;
    }

    return `${hStr}:${mStr}:${sStr}`;
}


