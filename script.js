const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const koha = '1 Jan 2030'

function countdown(){
    const kohaDate = new Date(koha);
    const currentDate = new Date();

    const totalsekonda = (kohaDate - currentDate) / 1000;

    const days = Math.floor(totalsekonda / 3600 / 24);
    const hours =  Math.floor(totalsekonda /3600) % 24;
    const mins =  Math.floor(totalsekonda /60) % 60;
    const seconds =  Math.floor(totalsekonda) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time <10 ? (`0${time}`) : time;
}
// 

countdown();
setInterval(countdown,1000);