//Let's get started
$(document).ready(function() {

  //Create a constant to rep
  const now = moment().format("MMM DD YYYY");
  let $todaysDate = $('#todays-date');
     $todaysDate.text(now);

  let plannerEntry8 
  let plannerEntry9
  let plannerEntry10
  let plannerEntry11
  let plannerEntry12 
  let plannerEntry1 
  let plannerEntry2 
  let plannerEntry3
  let plannerEntry4
  let plannerEntry5
  let plannerEntry6 
  

  let planTextArr = [plannerEntry8, plannerEntry9, plannerEntry10, plannerEntry11, plannerEntry12, 
    plannerEntry1, plannerEntry2, plannerEntry3, plannerEntry4, plannerEntry5, plannerEntry6];
  

  $(".clear-click").on("click" , function() {
    localStorage.setItem("plannerEntry8" , "");
    localStorage.setItem("plannerEntry9" , "");
    localStorage.setItem("plannerEntry10" , "");
    localStorage.setItem("plannerEntry11" , "");
    localStorage.setItem("plannerEntry12" , "");
    localStorage.setItem("plannerEntry1" , "");
    localStorage.setItem("plannerEntry2" , "");
    localStorage.setItem("plannerEntry3" , "");
    localStorage.setItem("plannerEntry4" , "");
    localStorage.setItem("plannerEntry5" , "");
    localStorage.setItem("plannerEntry6" , "");
    window.location.reload();
  })
  

  for (let timeOfDay = 8; timeOfDay <= 18; timeOfDay++) {
    let displayHour;
    index = timeOfDay - 8;

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
    $colDiv2.attr("id" , `input-${timeOfDay}`);
    $colDiv2.attr("value" , localStorage.getItem(`plannerEntry${timeOfDay}`));

    let $colDiv3 = $('<img>');
    $colDiv3.addClass("col-1 p-0 go-button");
    $colDiv3.attr('id',`saveid-${index}`);
    $colDiv3.attr('save-id', index);
    $colDiv3.attr('value' , index);
    $colDiv3.attr("src" , "Assets/Save4.jpg")
    
    $colDiv3.on("click" , function (event) {
      event.preventDefault();
       setPlannerEntry();
    })

   function setPlannerEntry () {
    var entryIndex = timeOfDay;
    var entry = $colDiv2.val();
    localStorage.setItem(`diaryEntry${timeOfDay}` , entryIndex);
    localStorage.setItem(`plannerEntry${timeOfDay}` , entry );
    //`"${entry}"`
    console.log(localStorage.getItem("plannerEntry8"));
    console.log(localStorage.getItem("plannerEntry9"));
    console.log(localStorage.getItem("plannerEntry10"));
    console.log(localStorage.getItem("plannerEntry11"));
    console.log(localStorage.getItem("plannerEntry12"));
    console.log(localStorage.getItem("plannerEntry1"));
    console.log(localStorage.getItem("plannerEntry2"));
    console.log(localStorage.getItem("plannerEntry3"));
    console.log(localStorage.getItem("plannerEntry4"));
    console.log(localStorage.getItem("plannerEntry5"));
    }

    $("#plannerContainer").append($rowDiv);
    $rowDiv.append($colDiv1, $colDiv2, $colDiv3);
    $colDiv1.append($timeDiv);
    
    }

  


  


});

