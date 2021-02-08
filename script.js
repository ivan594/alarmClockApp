let timeParts1;
let timeParts2;

function setAlarm() {
    const alarmTime = document.getElementById("timeEntry").value;
    let timeInput = alarmTime.split(':');
    timeInputHours = timeInput[0];
    timeInputMinutes = timeInput[1];
    alert('Будильник установлен.');
}

function wakeUp() {
    let date = new Date();
    let hours = date.getHours();  
    let minutes = date.getMinutes(); 
    let aud = new Audio('melody.mp3');
    if (timeInputHours == hours && timeInputMinutes == minutes) {
        aud.play();
    } 
}

 setInterval(wakeUp, 1000);