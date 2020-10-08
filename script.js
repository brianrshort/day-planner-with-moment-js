//Let's get started
$(document).ready(function() {

  //Create a constant to rep
  const now = moment().format("MMM DD YYYY");
  let $todaysDate = $('#todays-date');
     $todaysDate.text(now);

  let planTextArr;
  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
     if (storedPlans !== null) {
         planTextArr = storedPlans;
       } else {
         planTextArr = new Array(10);
         planTextArr[4] = "Picnic lunch outside";
  }

  for (let timeOfDay = 8; timeOfDay <= 18; timeOfDay++) {
    let displayHour;
    let index = timeOfDay - 8;

    if (timeOfDay <= 12) {
      displayHour = timeOfDay;
    } else if (timeOfDay > 12) {
      displayHour = timeOfDay - 12;
    }

    let $rowDiv = $('<div>');
    $rowDiv.addClass("row diary-row");
    $rowDiv.attr('hour-index', timeOfDay);

    let $colDiv1 = $('<div>');
    $colDiv1.addClass("col-2 time-div");
    
    let $timeDiv = $('<div>');
    $timeDiv.addClass("time-div");
    if (moment().format("H") < timeOfDay) {
      $timeDiv.addClass("time-before");
    } else if (moment().format("H") === `${timeOfDay}`) {
      $timeDiv.addClass("time-now");
    } else if (moment().format("H") > timeOfDay) {
      $timeDiv.addClass("time-ahead");
    }
    $timeDiv.text(`${displayHour} o'clock`);



    let $colDiv2 = $('<input>');
    $colDiv2.addClass("col-6");
    $colDiv2.attr("type" , "text");
    $colDiv2.attr("name" , "Have fun");


    let $colDiv3 = $('<img>');
    $colDiv3.addClass("col-1 p-0");
    $colDiv3.attr('id',`saveid-${index}`);
    $colDiv3.attr('save-id', index);
    $colDiv3.attr("src" , "Assets/Save4.jpg")
    



    $("#plannerContainer").append($rowDiv);
    $rowDiv.append($colDiv1, $colDiv2, $colDiv3);
    $colDiv1.append($timeDiv);
   

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

