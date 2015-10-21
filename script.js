$(document).ready(function(){

  //change every second
  setInterval(changeColor, 1000)

  // 1. Get the current time every second (24 hour time)
    function changeColor() {
      var now = new Date(Date.now());
      var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      var color = "#" + now.getHours() + now.getMinutes() + now.getSeconds();

  // 2. Change the background color of the page to that color
      $("body").css("background-color", color);
  // 3. Change the text of the h1 to that color
      $("#color").text(formatted);
      $("#hex").text(color);

  // HINTS: setInterval, date(),
  };

});