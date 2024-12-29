let cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}


const video = document.getElementById('works-video');
const playPauseButton = document.getElementById('play-pause');
const fullscreenButton = document.getElementById('fs');


playPauseButton.onclick = function(e){
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.textContent = '■';
        playPauseButton.setAttribute('data-state', 'pause');
    } else {
        video.pause();
        playPauseButton.textContent = '▶';
        playPauseButton.setAttribute('data-state', 'play');
    }
};


fullscreenButton.onclick = function(e){
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
};

function startTime() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = weekday[today.getDay()];
    let mon = month[today.getMonth()];
    let date = today.getDate();
    let year = today.getFullYear();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = "■" + h + ":" + m + ":" + s +  "&nbsp" + day +  "&nbsp" + mon + "&nbsp" + date + "&nbsp" + year;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  


function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}