//Let's get started
$(document).ready(function() {

  //Create a constant to rep
  const now = moment().format("MMM DD YYYY");
  let $todaysDate = $('#todays-date');
     $todaysDate.text(now);

  //Clicking the clear button clears the input boxes
  $(".clear-click").on("click" , function() {
    localStorage.setItem("8" , "");
    localStorage.setItem("9" , "");
    localStorage.setItem("10" , "");
    localStorage.setItem("11" , "");
    localStorage.setItem("12" , "");
    localStorage.setItem("1" , "");
    localStorage.setItem("2" , "");
    localStorage.setItem("3" , "");
    localStorage.setItem("4" , "");
    localStorage.setItem("5" , "");
    localStorage.setItem("6" , "");
    window.location.reload();
  })
  
  //A for loop to create the time display boxes, input boxes, and save click areas
  for (let timeOfDay = 8; timeOfDay < 19; timeOfDay++) {
    let displayHour;
    index = timeOfDay - 8;

    if (timeOfDay <= 12) {
      displayHour = timeOfDay;
    } else if (timeOfDay > 12) {
      displayHour = timeOfDay - 12;
    }

    //Create each row
    let $rowDiv = $('<div>');
    $rowDiv.addClass("row diary-row");
    $rowDiv.attr('hour-index', timeOfDay);

    //Create the time display boxes
    let $colDiv1 = $('<div>');
    $colDiv1.addClass("col-2 time-div");
    
    //Create the time display area
    let $timeDiv = $('<div>');
    $timeDiv.addClass("time-div");
    $timeDiv.text(`${displayHour} o'clock`);

    //Create the input boxes
    let $colDiv2 = $('<input>');
    $colDiv2.addClass("col-6");
    //Change the color depending on whether it is before, during, or after the current hour
    if (moment().format("H") < timeOfDay) {
      $colDiv2.addClass("time-before");
    } else if (moment().format("H") === `${timeOfDay}`) {
      $colDiv2.addClass("time-now");
    } else if (moment().format("H") > timeOfDay) {
      $colDiv2.addClass("time-ahead");
    }
    $colDiv2.attr("type" , "text");
    $colDiv2.attr("id" , `input-${timeOfDay}`);
    $colDiv2.attr("value" , localStorage.getItem(`${displayHour}`));

    //Create the save click area
    let $colDiv3 = $('<img>');
    $colDiv3.addClass("col-1 p-0 go-button");
    $colDiv3.attr('id',`saveid-${index}`);
    $colDiv3.attr('save-id', index);
    $colDiv3.attr('value' , index);
    $colDiv3.attr("src" , "Assets/Save4.jpg")
    
    //Create an event listener for the save click area
    $colDiv3.on("click" , function (event) {
      event.preventDefault();
       setPlannerEntry();
    })

    //Append the rows, time display boxes, input areas, and save click areas
    $("#plannerContainer").append($rowDiv);
    $rowDiv.append($colDiv1, $colDiv2, $colDiv3);
    $colDiv1.append($timeDiv);
    }

    //A function to set the values of the input boxes into local storage
    function setPlannerEntry() {      
      localStorage.setItem(`8` , $("#input-8").val());
      localStorage.setItem(`9` , $("#input-9").val());
      localStorage.setItem(`10` , $("#input-10").val());
      localStorage.setItem(`11` , $("#input-11").val());
      localStorage.setItem(`12` , $("#input-12").val());
      localStorage.setItem(`1` , $("#input-13").val());
      localStorage.setItem(`2` , $("#input-14").val());
      localStorage.setItem(`3` , $("#input-15").val());
      localStorage.setItem(`4` , $("#input-16").val());
      localStorage.setItem(`5` , $("#input-17").val());
      localStorage.setItem(`6` , $("#input-18").val());
    }

});

