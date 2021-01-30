console.log("test")

//create a function that displays the current date on the top of the page
//create a loop function that generate 24 time blocks for each hour in the day
//create a function that colors the current time-block green and the previous blocks-red, and the future blocks grey
//give each time-block an add event listener that opens an input box, so that when clicked, users can store there todo in it


//code snippet for the current date and time object 
var d = new Date();
//select all the different time blocks
//use .each jquery function-- use this 
//inside of there compare the current time to that rows time 

$(document).ready(function(){

$('.saveBtn').on('click', function(){
var desEl = $(this).siblings(".description").val()
var desKey =  $(this).siblings(".hour").text()
console.log(desKey)
console.log(desEl)

localStorage.setItem(desKey, desEl)

})

$("#9 .description").val(localStorage.getItem("9:00 am"))
$("#10 .description").val(localStorage.getItem("10:00 am"))
$("#11 .description").val(localStorage.getItem("11:00 am"))
$("#12 .description").val(localStorage.getItem("12:00 am"))
$("#1 .description").val(localStorage.getItem("1:00 pm"))
$("#2 .description").val(localStorage.getItem("2:00 pm"))
$("#3 .description").val(localStorage.getItem("3:00 pm"))
$("#4 .description").val(localStorage.getItem("4:00 pm"))
$("#4 .description").val(localStorage.getItem("5:00 pm"))

var currentTime = $('#currentDay').text(d)
console.log(currentTime)

})