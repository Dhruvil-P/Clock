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

// Analog Clock

const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

// Toggle

$(".Slider").on('click', function(){
    $(".Slider").toggleClass("Slider-Toggle")
    $(".Toggle").toggleClass("Switch-Toggle")
    $(".Ana").toggleClass("Hidden")
    $(".Digi").toggleClass("Visible")
    $(".Clock_D").toggleClass("Block")
    $(".Clock_A").toggleClass("None")
    $(".Left").toggleClass("Block")
    $(".Right").toggleClass("Block")
})
