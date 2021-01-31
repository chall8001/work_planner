

//create a function that displays the current date on the top of the page
//create a loop function that generate 24 time blocks for each hour in the day
//create a function that colors the current time-block green and the previous blocks-red, and the future blocks grey
//give each time-block an add event listener that opens an input box, so that when clicked, users can store there todo in it


//code snippet for the current date and time object 
var d = new Date();


//function to execute jquery after the page loads 
$(document).ready(function(){

//accsess the save button on click, and the value in the text area
$('.saveBtn').on('click', function(){
var desEl = $(this).siblings(".description").val()
var desKey =  $(this).siblings(".hour").text()
//save the text to local storage as a key value pair
localStorage.setItem(desKey, desEl)

})

//get the pair from local storage
$("#9 .description").val(localStorage.getItem("9:00 am"))
$("#10 .description").val(localStorage.getItem("10:00 am"))
$("#11 .description").val(localStorage.getItem("11:00 am"))
$("#12 .description").val(localStorage.getItem("12:00 am"))
$("#1 .description").val(localStorage.getItem("1:00 pm"))
$("#2 .description").val(localStorage.getItem("2:00 pm"))
$("#3 .description").val(localStorage.getItem("3:00 pm"))
$("#4 .description").val(localStorage.getItem("4:00 pm"))
$("#4 .description").val(localStorage.getItem("5:00 pm"))

//print the current time in the header

var currentTime = $('#currentDay').text(d)
console.log(currentTime)
color()

//I commented out this next part because I couldn;t find the bug, and it was breaking my code, but it was suppossed to color the planner according to time

// function color(){
//     var k = new Date();
//     var n = k.getHours();

//     $(".hour").each(function(){
//      if (n = $(this)) 
//      {
//          $(this).siblings(".description").add("present")
      
//     }

//     else if (n > $(this)) {
//         $(this).siblings(".description").addClas("past")
//     }
    
//     else (n < $(this))
//     {$(this).siblings(".description").addClass("future")
// }

    
// }) 
// }