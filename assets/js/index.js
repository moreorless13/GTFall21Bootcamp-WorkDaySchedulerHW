let todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').html(todayDate);

$(function () {
    $(".saveButton").on("click", function createObject(event) {
        event.preventDefault();
        let object = {
            id: $(this).parent().attr("id"),
            time: $(this).parent().attr("id"),
            date: $(this).todayDate,
            description: $(this).siblings("description").val()
        };
        let activitiesArray = [];
        activitiesArray.push(object);
        localStorage.setItem("scheduledEvents", JSON.stringify(activitiesArray));
    })

    function realTime() {
        let timeNow = moment().format('hh a');
        $(".time-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if(blockTime < timeNow) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    function retrieveLocalStorage(){
        if (localStorage.getItem('scheduledEvents')) {
            try {
                let activities = JSON.parse(localStorage.getItem('scheduledEvents'));
                if (activities.length > 0) {
                    return activities;
                } else {
                    return [activities];
                }
            } catch {
                let activities = [localStorage.getItem('scheduledEvents')];
                return activities;
            }
        } else {
            return [];
        }
    }
    retrieveLocalStorage();

    realTime();
})