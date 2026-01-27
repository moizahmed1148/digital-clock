var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var time = document.getElementById("time");
var dates = document.getElementById("date");
function updateClock() {
    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    console.log(m);
    
   if(m < 10){
    time.innerText = + "0" + h + " : " + "0" + m + " : " + "0"  + s;
    }
    else{
        time.innerText = h + " : " +  m + " : " + s;
    }

    var day = days[now.getDay()];
    var date = now.getDate();

    dates.innerText = day + " : " + date + " "
}
setInterval(updateClock,1000);
