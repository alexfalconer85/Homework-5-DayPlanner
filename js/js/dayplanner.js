// Display the current date
// use Moment.js
// on click event storing all entered data in local storage
$(".saveBtn").on("click", function () {
  // setting variable to grab the value of the text area
  var noteText = $(this).siblings(".description").val();
  // set a variable to grab the id attribute
  var hourSection = $(this).parent().attr("id");
  // grab only position 5 and on out of the div id="hour-9" grabbing "9"
  hourSection = hourSection.slice(5);
  // setting the data in local storage
  localStorage.setItem(hourSection, noteText);
});

$(document).ready(function () {
  //Setting up the date and appending to the HTML page
  var today = moment().format("MMMM Do YYYY,  h:mm a");
  // displaying the today variable in the currentDay p tag
  $("#currentDay").append(today);
  // set a variable for the curent time in hours
  var now = parseInt(moment().format("HH"));
  console.log(now)
  // loop through each text area
  $("textarea").each(function () {
    // setting a variable name to an integer created from the name(9-17) of the text area
    var name = parseInt($(this).attr("name"));
    // change classes of text area based on current time
    //if time block has passed, set to past
    if (name < now) {
      // add past class
      $(this).addClass("past");
    }
    // if time block is in the future set to future
    if (name > now) {
      // add future class
      $(this).addClass("future");
    }
    // if present block, set class to present..etc
    if (name === now) {
      // add present class
      $(this).addClass("present");
    }
  });

  // instead of all those lines of code below, i used a for loop to grab all the local storage data
  // for loop that gets the text enter data from local storage
  for (var i = 9; i < 18; i++) {
    var string1 = "#text" + i;
    var string2 = i;
    $(string1).text(localStorage.getItem(string2));
  }

  // $(".saveBtn").on("click", function () {
  //   //setting items in the local storage
  //   localStorage.setItem("9AM", $("#text9AM").val().trim());
  //   localStorage.setItem("10AM", $("#text10AM").val().trim());
  //   localStorage.setItem("11AM", $("#text11AM").val().trim());
  //   localStorage.setItem("12PM", $("#text12PM").val().trim());
  //   localStorage.setItem("13PM", $("#text1PM").val().trim());
  //   localStorage.setItem("14PM", $("#text2PM").val().trim());
  //   localStorage.setItem("15PM", $("#text3PM").val().trim());
  //   localStorage.setItem("16PM", $("#text4PM").val().trim());
  //   localStorage.setItem("17PM", $("#text5PM").val().trim());
  // });

  //getting the content stored and sending to the screen. When page is refreshed content will stay
  // $("#text9AM").text(localStorage.getItem("9AM"));
  // $("#text10AM").text(localStorage.getItem("10AM"));
  // $("#text11AM").text(localStorage.getItem("11AM"));
  // $("#text12PM").text(localStorage.getItem("12PM"));
  // $("#text1PM").text(localStorage.getItem("13PM"));
  // $("#text2PM").text(localStorage.getItem("14PM"));
  // $("#text3PM").text(localStorage.getItem("15PM"));
  // $("#text4PM").text(localStorage.getItem("16PM"));
  // $("#text5PM").text(localStorage.getItem("17PM"));
});