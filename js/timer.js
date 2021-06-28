export default class CountdownTimer {
    constructor({ selector, targetDate, title } = {}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerRefs = {
            timer: document.querySelector(this.selector),
            daysSpan: document.querySelector(`${this.selector} span[data-value="days"]`),
            hoursSpan: document.querySelector(`${this.selector} span[data-value="hours"]`),
            minsSpan: document.querySelector(`${this.selector} span[data-value="mins"]`),
            secsSpan: document.querySelector(`${this.selector} span[data-value="secs"]`),
            title: document.querySelector(`${this.selector} h1`),

        }
        this.intervalId = null;
        this.title = title;
    }
    getTimerValue = () => {
        let isTimeOut = !(Math.floor(((this.targetDate - Date.now()) / 1000)));
        let days = Math.floor((this.targetDate - Date.now()) / (1000 * 60 * 60 * 24));
        let hours = Math.floor(((this.targetDate - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor(((this.targetDate - Date.now()) % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor(((this.targetDate - Date.now()) % (1000 * 60)) / 1000);
        return { days, hours, mins, secs, isTimeOut }
    }
    renderValue = () => {
        const timerValue = this.getTimerValue();
        this.timerRefs.secsSpan.textContent = timerValue.secs < 10 ? `0${timerValue.secs}` : timerValue.secs;
        this.timerRefs.minsSpan.textContent = timerValue.mins < 10 ? `0${timerValue.mins}` : timerValue.mins;
        this.timerRefs.hoursSpan.textContent = timerValue.hours < 10 ? `0${timerValue.hours}` : timerValue.hours;
        this.timerRefs.daysSpan.textContent = timerValue.days < 10 ? `0${timerValue.days}` : timerValue.days;
        this.timerRefs.title.innerText = this.title;

        if (timerValue.isTimeOut) {
            clearInterval(this.intervalId);
            return
        }
    }

    startTimer = () => {
        this.intervalId = setInterval(() => { this.renderValue() }, 1000)
    }
};
