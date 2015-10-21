$(document).ready(function(){

  //change every second
  setInterval(changeColor, 1000)

  // 1. Get the current time every second (24 hour time)
    function changeColor() {
      var now = new Date();
      var hours = "0" + now.getHours();
      var minutes = "0" + now.getMinutes();
      var seconds = "0" + now.getSeconds();

      hours = hours.slice(-2);
      minutes = minutes.slice(-2);
      seconds = seconds.slice(-2);

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