// import { days, hours, mins, secs } from "./date.js";
import CountdownTimer from "./timer.js"

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 31, 2021'),
    title: 'Предел моих возможностей закончится через:',
});
timer.startTimer()

// targetDate: new Date('Jun 31, 2021'), - нет такой даты, почему не выбивает такую ошибку?

// когда прописываю дату new Date('Jun 32, 2021'), пишет: 
// NaN Days
// NaN Hours
// NaN Minutes
// NaN Seconds


// просто интересно