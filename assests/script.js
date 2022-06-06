var times = document.getElementsByClassName('time')
console.log(times)
var saveButtons = document.getElementsByClassName('save-btn')
console.log(saveButtons)
var button = document.getElementsByTagName('button')


function getHeaderDate() {
    var updateCurrentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(updateCurrentHeaderDate);
}


function saveItem(i) {
    console.log(i)
    var saveItem= button[i].parentElement.previousElementSibling.firstElementChild
    // Save to Local Storage
}

function checkTime(givenTime, textdiv) {
    var currentTime = moment().hour();
    // console.log(currentTime)
    // Accept a time that is given
    // console.log(moment(givenTime).format('LT'))
// Check if the time is in the past
if (currentTime < givenTime){
    // If in the past, give it class past,
    // locate the text area and color it with classes
    textdiv.classList.add('future')
    console.log("It's in the future")
} else if (currentTime > givenTime) {
    // If in the present, give it class present,
    console.log("It's in the past")
    textdiv.classList.add('past')

} else {
    // In the present
    console.log("in the present")
    textdiv.classList.add('present')

}
}
// checkTime('11');
getHeaderDate();

var planner = [
    {
        id: "a",
        hour: "09:00",
        time: "09",
        activity: ""
    },
    {
        id: "b",
        hour: "10:00",
        time: "10",
        activity: ""
    },
    {
        id: "c",
        hour: "11:00",
        time: "11",
        activity: ""
    },
    {
        id: "d",
        hour: "12:00",
        time: "12",
        activity: ""
    },
    {
        id: "e",
        hour: "13:00",
        time: "13",
        activity: ""
    },
    {
        id: "f",
        hour: "14:00",
        time: "14",
        activity: ""
    },
    {
        id: "g",
        hour: "15:00",
        time: "15",
        activity: ""
    },
    {
        id: "h",
        hour: "16:00",
        time: "16",
        activity: ""
    },
    {
        id: "i",
        hour: "17:00",
        time: "17",
        activity: ""
    },
    {
        id: "j",
        hour: "18:00",
        time: "18",
        activity: ""
    },
    
]

// for (i=0; i<button.length; i++){
//     button[i].addEventListener("click", saveItem(i))

// }

for (i=0; i< times.length; i++){
    let timeElement = times[i].dataset.id
    let textElementSibling = times[i].nextSibling.nextElementSibling
    checkTime(timeElement,textElementSibling)
}