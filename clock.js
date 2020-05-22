const jsClock = document.querySelector(".js-clock");
const time = jsClock.querySelector("#time");
const afternoon = jsClock.querySelector("#afternoon");

function getTime(){
    const date = new Date();
    const hour24 = date.getHours();
    const hours = (hour24 < 13 ? hour24 : hour24-12);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amPm = (hour24 < 13 ? "AM" : "PM");
    
    time.innerText = `${hours<10 ? `0${hours}` : hours
    }:${minutes<10 ? `0${minutes}`:minutes
    }:${seconds<10 ? `0${seconds}`:seconds}`;

    afternoon.innerText = amPm;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();