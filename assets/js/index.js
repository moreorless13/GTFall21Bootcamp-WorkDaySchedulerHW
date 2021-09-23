let currentDayDisplayEl = $('#currentDay');


const displayDay = () => {
    let rightNow = moment().format('dddd, MMMM Do');
    currentDayDisplayEl.text(rightNow);
};


setInterval(displayDay, 1000);