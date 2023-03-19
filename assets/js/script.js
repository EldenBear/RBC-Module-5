$(function () {
  var date = dayjs();
//Handles the click for the save button for each hour
  $("#hour-9").children().eq(2).click(function() {
    handleClick("#hour-9");
  });

  $("#hour-10").children().eq(2).click(function() {
    handleClick("#hour-10");
  });

  $("#hour-11").children().eq(2).click(function() {
    handleClick("#hour-11");
  });

  $("#hour-12").children().eq(2).click(function() {
    handleClick("#hour-12");
  });

  $("#hour-1").children().eq(2).click(function() {
    handleClick("#hour-1");
  });

  $("#hour-2").children().eq(2).click(function() {
    handleClick("#hour-2");
  });

  $("#hour-3").children().eq(2).click(function() {
    handleClick("#hour-3");
  });

  $("#hour-4").children().eq(2).click(function() {
    handleClick("#hour-4");
  });


  $("#hour-5").children().eq(2).click(function() {
    handleClick("#hour-5");
  });
 //Sets color of each time slot based on time of day 
  for(var hour = 9; hour < 18; hour++){
    var hourIn12HrFormat = hour % 12;
    var id = "#hour-" + hourIn12HrFormat;

    // calculate current hour
    var currentHour = date.hour();
    if(hour < currentHour){
      $(id).addClass("past");
    } else if(hour === currentHour){
      $(id).addClass("present");
    } else {
      $(id).addClass("future");
    }
   }
  //Gets users input from the local storage
  var hourNineText = localStorage.getItem("#hour-9");
  if (hourNineText !== null) {
    $("#hour-9").children().eq(1).val(hourNineText);
  }

  var hourTenText = localStorage.getItem("#hour-10");
  if (hourTenText !== null) {
    $("#hour-10").children().eq(1).val(hourTenText);
  }

  var hourElevenText = localStorage.getItem("#hour-11");
  if (hourElevenText !== null) {
    $("#hour-11").children().eq(1).val(hourElevenText);
  }

  var hourTwelveText = localStorage.getItem("#hour-12");
  if (hourTwelveText !== null) {
    $("#hour-12").children().eq(1).val(hourTwelveText);
  }

  var hourOneText = localStorage.getItem("#hour-1");
  if (hourOneText !== null) {
    $("#hour-1").children().eq(1).val(hourOneText);
  }

  var hourTwoText = localStorage.getItem("#hour-2");
  if (hourTwoText !== null) {
    $("#hour-2").children().eq(1).val(hourTwoText);
  }

  var hourThreeText = localStorage.getItem("#hour-3");
  if (hourThreeText !== null) {
    $("#hour-3").children().eq(1).val(hourThreeText);
  }

  var hourFourText = localStorage.getItem("#hour-4");
  if (hourFourText !== null) {
    $("#hour-4").children().eq(1).val(hourFourText);
  }

  var hourFiveText = localStorage.getItem("#hour-5");
  if (hourFiveText !== null) {
    $("#hour-5").children().eq(1).val(hourFiveText);
  }
// Formats date to Day of week(dddd), Month(MMMM), Date(D), and Year(YYYY)
  var formatedDate = date.format('dddd, MMMM D YYYY');
  $("#currentDay").html(formatedDate);
});
//Saves to local storage
function handleClick(id){
  console.log(id);
  var textField = $(id).children().eq(1).val();
  localStorage.setItem(id, textField);
}