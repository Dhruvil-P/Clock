function clock(){
    var Hours = document.querySelector("#hour");
    var Minutes = document.querySelector("#minute");
    var Seconds = document.querySelector("#seconds");
    var AM_PM = document.querySelector("#ampm");

    var h = new Date(). getHours();
    var m = new Date(). getMinutes();
    var s = new Date(). getSeconds();
    var am = new Date(). getHours();

    if (h > 12){
        h -= 12;
        var am = "PM";
    }else{
        var am = "AM";
    }

    h = ( h < 10 ) ? "0" + h : h;
    m = ( m < 10 ) ? "0" + m : m;
    s = ( s < 10 ) ? "0" + s : s;

    if (h < 1 && am === 'AM'){
        h = 12;
    } 

    Hours.innerHTML = h;
    Minutes.innerHTML = m;
    Seconds.innerHTML = s;
    AM_PM.innerHTML = am;
}

var interval = setInterval(clock, 1000);