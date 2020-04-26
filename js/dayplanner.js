// Display the current date
// use Moment.js
// acts as a javascript method
// set the current date variable
//ex
// console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
// document.getElementById("currentDay").innerHTML = moment().format(
//   "MMMM Do YYYY, h:mm:ss a"
// );
// add the current date variable to #currentday

// Save & Display little notes

//LocalStorage - holds data in the browser memory
// 1. setting information in localStorage
// 2. getting/retrived information

// set
// create an onclick for every button
// $(".saveBtn").on("click", function () {

//     var noteText = $(this).siblings(".description").val()
//     // Store name and
//     var hourSection = $(this).parent().attr("id");
//     localStorage.setItem(hourSection, noteText);
// });

$(document).ready(function () {
  //Setting up the date and appending to the HTML page
  var today = moment().format("MMMM Do YYYY");
  console.log(today);
  $(".currentDay").append(today);
  // set a variable for the curent time in hours
  var now = parseInt(moment().format("HH"));
  console.log(now);

  //   var $text9AM = $("#hour-9");
  //   var $text10AM = $("#hour-10");
  //   var $text11AM = $("#hour-11");
  //   var $text12AM = $("#hour-12");
  //   var $text1PM = $("#hour-1");
  //   var $text2PM = $("#hour-2");
  //   var $text3PM = $("#hour-3");
  //   var $text4PM = $("#hour-4");
  //   var $text5PM = $("#hour-5");

  // loop through each text area
  $("textarea").each(function () {
    // change classes of text area based on current time
    var name = parseInt($(this).attr("name"));
    //if time block has passed, set to past
    if (name < now) {
      $(this).addClass("past");
    }
    // if time block is in the future set to future
    if (name > now) {
      $(this).addClass("future");
    }
    // if present block, set class to present..etc
    if (name === now) {
      $(this).addClass("present");
    }
  });

  $(".saveBtn").on("click", function () {
    //setting items in the local storage
    localStorage.setItem("9AM", $("#text9AM").val());
    localStorage.setItem("10AM", $("#text10AM").val());
    localStorage.setItem("11AM", $("#text11AM").val());
    localStorage.setItem("12PM", $("#text12PM").val());
    localStorage.setItem("13PM", $("#text1PM").val());
    localStorage.setItem("14PM", $("#text2PM").val());
    localStorage.setItem("15PM", $("#text3PM").val());
    localStorage.setItem("16PM", $("#text4PM").val());
    localStorage.setItem("17PM", $("#text5PM").val());
  });

  //getting the content stored and sending to the screen. When page is refreshed content will stay
  $("#text9AM").append(localStorage.getItem("9AM"));
  $("#text10AM").append(localStorage.getItem("10AM"));
  $("#text11AM").append(localStorage.getItem("11AM"));
  $("#text12PM").append(localStorage.getItem("12PM"));
  $("#text1PM").append(localStorage.getItem("13PM"));
  $("#text2PM").append(localStorage.getItem("14PM"));
  $("#text3PM").append(localStorage.getItem("15PM"));
  $("#text4PM").append(localStorage.getItem("16PM"));
  $("#text5PM").append(localStorage.getItem("17PM"));
});