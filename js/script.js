// import { days, hours, mins, secs } from "./date.js";
import CountdownTimer from "./timer.js"

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 27, 2021'),
    title: 'До кінця світу залишилось',
});
timer.startTimer()
