var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var time = document.getElementById("time");
var dates = document.getElementById("date");
var clock = document.getElementById("clock");
function updateClock() {
    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    console.log(m);
    if(h === 0){
        clock.innerText = "AM"
    }
    if(h > 12){
        h = h - 12
        clock.innerText = "PM"
    }

    if(h < 10){
       h = "0" + h;
    }
    if(m < 10){
      m = "0"  + m ;
    }
    if(s < 10){
      s =  "0" + s;
    }
    time.innerText =  h + " : " + m + " : "+ s;
    var day = days[now.getDay()];
    var date = now.getDate();

    dates.innerText = day + " : " + date + " " + " " + months[now.getMonth()] + " " + now.getFullYear()
}
setInterval(updateClock,1000);
