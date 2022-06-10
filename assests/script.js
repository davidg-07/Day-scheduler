$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    
    $(".saveBtn").on("click", function () {
        
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 
        
        localStorage.setItem(time, text);
    });
});