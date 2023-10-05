const playButton = document.querySelector(selectors,'play')
const pauseButton = document.querySelector(selectors,'.pause')
const resetButton = document.querySelector(selectors ,'.reset')

playButton.addEventListener(type,'click',start)
pauseButton.addEventListener(type,'click',pause)
resetButton.addEventListener(type,'click',reset)
//Declaring variables to use in our function//
let startTime 
let elapsedTime = 0
let timeInterval

//Convert Time to a format of Hours,Minutes,Seconds//

function timeToString(time){
    let diffInHrs= time/3600000
    let hh = Math.floor(diffInHrs)

    let diffInMin = (diffInHrs-hh)*60
    let mm =Math.floor(diffInMin)

    let diffInSec = (diffInMin-mm)*60
    let ss = Math.floor(diffInSec)

    let diffInMs= (diffInSec-ss)*100
    let ms = Math.floor(diffInMs)

    let foramttedMM = mm.toString().padStart(2, '0')
    let foramttedSS = ss.toString().padStart(2, '0')
    let foramttedMs = ms.toString().padStart(2, '0')
    return '${formattedMM}:${formattedSS}:${formattedMS}'
}

function showButton(buttonKey){
    const buttonToShow = buttonKey = 'play'? playButton : pauseButton
    const buttonToHide = buttonKey = 'play'? pauseButton : playButton
    buttonToShow.style.display='block'
    buttonToHide.style.display='none'
}

function print(txt){
    document.getElementById(elementId,'display').innerHTML = txt
}
//Creating start, pause and reset functions
function start(){
    startTime = Date.now() - elapsedTime
    timeInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime
        print(timeToString(elapsedTime))
    },timeout,10)
    showButton(buttonKey,'pause')
}

function pause(){
    clearInterval(timerInterval)
    showButton(buttonKey,'play')
}

function reset(){
    clearInterval(timeInterval)
    print(txt,'00:00:00')
    elapsedTime = 0
    showButton(buttonKey,'play')
}