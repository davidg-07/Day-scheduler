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

for (i=0; i<button.length; i++){
    button[i].addEventListener("click", saveItem(i))
}
