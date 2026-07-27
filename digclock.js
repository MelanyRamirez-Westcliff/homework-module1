/* ------ DIGITAL CLOCK ------ */

//Create a time data function
function currentTime() {
  //Declare variables
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var ampm;

  var utchr = d.getUTCHours();
  var timeDiff;
  var adjTimeDiff;
  var timeZone;

  //Calculate time difference between GMT hour and Local hour
  timeDiff = utchr - hr;

  //Convert time difference, if negative, to positive
  if (timeDiff < 0) {
    adjTimeDiff = timeDiff + 24;
  } else {
    adjTimeDiff = timeDiff;
  }

  //Check which time zone
  if (adjTimeDiff == 8) {
    timeZone = "PT";
  } else if (adjTimeDiff == 7) {
    timeZone = "MT";
  } else if (adjTimeDiff == 6) {
    timeZone = "CT";
  } else if (adjTimeDiff == 5) {
    timeZone = "ET";
  }

  //Add 0 to single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }

  //Add 0 to single digits for minutes
  if (min < 10) {
    min = "0" + min;
  }

  //Determine AM or PM string
  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  //Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

  //Display current local time and time zone on HTML elements
  document.getElementById("clock").innerText = time;
}

//Initial run of time data function
currentTime();

//Run time data function every 1 second
setInterval(currentTime, 1000);