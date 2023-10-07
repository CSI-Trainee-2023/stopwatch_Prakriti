let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let displayHours = hours;
let displayMins = Mins;
let displaySec = Sec;
let displayMillisec = Millisec;

let status = "stopped";
let interval = null;



function start(){
    milliseconds++;

    if(milliseconds/100 == 1){
        seconds++;
        milliseconds = 0;
        if(seconds/60 ==1){
          minutes++;
          seconds = 0;
        if(minutes/60 ==1){
            hours++;
            minutes=0;
           }   
        }
    }
    if(milliseconds<10){
        displayMillisec = "0" + milliseconds;
    } else{
        displayMillisec = milliseconds;
    }

    if(seconds < 10) {
        displaySec="0" + seconds;
    } else{
        displaySec= seconds;
    }
    if(minutes < 10){
        displayMins = "0" + minutes;
    } else{
        displayMins = minutes;
    }
    if(hours < 10){
        displayHours = "0" + hours;
    } else{
        displayHours = hours;
    }
    document.getElememntById('timerHrs').innerHTML = displayHours;
    document.getElememntById('timerMins').innerHTML = displayMins;
    document.getElememntById('timerSec').innerHTML = displaySec;
    document.getElememntById('timerMillisec').innerHTML = displayMillisec;
}

function startStop(){
    if(status == "stopped"){
        window.setInterval(start, 10);
        status = "started";
        document.getElementById(`startBtn`).innerHTML = "Stop"
    }
    else{
        window.clearInterval(interval);
        status="stopped";
        document.getElementById(`startBtn`).innerHTML="Start";
    }
}

function reset(){
    window.clearInterval(interval);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayMillisec= 0;
    displayMins= 0;
    displaySec = 0;
    displayHours = 0;
    status = "stopped";
    document.getElementById('timeHrs').innerHTML = "00";
    document.getElementById('timeMins').innerHTML = "00";
    document.getElementById('timeSec').innerHTML = "00";
    document.getElementById('timeMillisec').innerHTML = "00";
    document.getElementById('lapRecord').innerHTML = "";
}

function lap(){
    lapNow = displayHours + ":" + displayMins + ":" + displaySec + ":" + displayMillisec;
    document.getElementById('lapRecord').innerHTML=document.getElementById('lapRecord').innerHTML +"<p" + lapNow + "</p>";

}
