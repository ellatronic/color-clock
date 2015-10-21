$(document).ready(function(){

  //change every second
  setInterval(changeColor, 1000)

  // 1. Get the current time every second (24 hour time)
    function changeColor() {
      var now = new Date();
      var hours;
      var minutes;
      var seconds;

      if (parseInt(now.getHours()) < 10) {
        hours = "0" + now.getHours();
      }
      else {
        hours = now.getHours();
      }

      if (parseInt(now.getMinutes()) < 10) {
        minutes = "0" + now.getMinutes();
      }
      else {
        minutes = now.getMinutes();
      }

      if (parseInt(now.getSeconds()) < 10) {
        seconds = "0" + now.getSeconds();
      }
      else {
        seconds = now.getSeconds();
      }

      var formatted = hours + ":" + minutes + ":" + seconds;
      var color = "#" + hours + minutes + seconds;

  // 2. Change the background color of the page to that color
      $("body").css("background-color", color);
  // 3. Change the text of the h1 to that color
      $("#color").text(formatted);
      $("#hex").text(color);

  // HINTS: setInterval, date(),
  };

});