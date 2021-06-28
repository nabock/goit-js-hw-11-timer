// import { days, hours, mins, secs } from "./date.js";
import CountdownTimer from "./timer.js"

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(),
    title: 'Предел моих возможностей закончится через:',
});
timer.startTimer()

// new Date('Jun 28, 2021')