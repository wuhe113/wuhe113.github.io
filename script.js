let cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

const works = document.getElementById('work');
const worksDescription = document.getElementById('description');

works.onclick = function (e) {
    if (e.target && (e.target.tagName === 'DIV' || e.target.tagName === 'SPAN')) {
        let clickedElement = e.target.closest('div');

        let content = clickedElement.id;

        video.innerHTML = '';


        let newVideo = document.createElement('source');
        video.appendChild(newVideo);


        worksDescription.innerHTML = '';



        if (content === 'cd-player') {
            newVideo.setAttribute('src', 'assets/videos/CD Player/CD Player video3.mp4');
            video.load();

            worksDescription.innerHTML = 
            `<div>
            ■&lt;T-SQUARE&gt; CD Player is a web-based project that transforms real-time data uploaded to Google Spreadsheets into visualizations, evolving these into CD packaging designs. At the same time, the website itself functions as a CD player.
            <br>
            <br>■All music by T-SQUARE, a Japanese jazz-fusion band.
            <br>
            <br><div id="visit"><a href="https://helen-wu.online/2024-sites/project_4/">■Link to website↗︎</a></div>
        </div>`;
        }

        if (content === 'sound-projection') {
            newVideo.setAttribute('src', 'assets/videos/Sound Interaction/Sound Interaction.mp4');
            video.load();

        }
    }
};




const video = document.getElementById('works-video');
const videoControls = document.getElementById('video-controls');
const playPauseButton = document.getElementById('play-pause');
const fullscreenButton = document.getElementById('fs');

const checkVideoContent = () => {
    const hasSource = video.querySelector('source') !== null;
    const sourceLoaded = hasSource && video.querySelector('source').getAttribute('src') !== '';
    
    if (hasSource && sourceLoaded) {
        videoControls.setAttribute('data-state', 'visible');
    } else {
        videoControls.setAttribute('data-state', 'hidden');
    }
};

checkVideoContent();

const observer = new MutationObserver(checkVideoContent);
observer.observe(video, { childList: true, attributes: true, subtree: true });


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