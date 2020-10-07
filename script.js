console.log(moment().format("h"));

$(document).ready(function() {

  const now = moment().format("MMM DD YYYY");
  let $todaysDate = $('#todays-date');
     $todaysDate.text(now);


  for (let timeOfDay = 8; timeOfDay <= 18; timeOfDay++) {
    let displayHour;
    let rowIndex = timeOfDay - 8;

    if (timeOfDay <= 12) {
      displayHour = timeOfDay;
    } else if (timeOfDay > 12) {
      displayHour = timeOfDay - 12;
    }

    let $rowDiv = $('<div>');
    $rowDiv.addClass("row diary-row");

    let $colDiv1 = $('<div>');
    $colDiv1.addClass("col-2 time-div");
    if (moment().format("H") < timeOfDay) {
      $colDiv1.addClass("time-before");
    } else if (moment().format("H") === `${timeOfDay}`) {
      $colDiv1.addClass("time-now");
    } else if (moment().format("H") > timeOfDay) {
      $colDiv1.addClass("time-ahead");
    }
    $colDiv1.text(`${displayHour} o'clock`);



    let $colDiv2 = $('<input>');
    $colDiv2.addClass("col-6");
    $colDiv2.attr("type" , "text");
    $colDiv2.attr("name" , "Have fun");


    let $colDiv3 = $('<div>');
    $colDiv3.addClass("col-1 submit-div");
    let saveIcon = '<i class="far fa-save fa-5x"></i>';
    $colDiv3.html(saveIcon);

    $("#plannerContainer").append($rowDiv);
    $rowDiv.append($colDiv1, $colDiv2, $colDiv3);

  }

   $(".go-button").on("click" , function (event) {
     event.preventDefault();
      console.log(event.currentTarget.value);
    //   let inputField = $("textarea").value;
  //   localStorage.setItem("diary-entry", inputField);
  //   console.log(inputField);
  //   console.log(localStorage.getItem("diary-entry"));
   })


});

