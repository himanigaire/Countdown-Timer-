let countdownDate = new Date("November 10, 2024 23:59:59").getTime();
// sets the date to countdown.

let countdownFunction = setInterval(function () {

    let now = new Date().getTime();
    //current date and time.

    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //calculations.

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    //displays the countdown in html.

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
    //if the countdown is finished, it will display "EXPIRED".
}, 1000);
