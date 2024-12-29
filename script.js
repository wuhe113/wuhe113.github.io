let cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

const works = document.getElementById('work');
const worksDescription = document.getElementById('description');

const image = document.getElementById('works-image');

works.onclick = function (e) {
    if (e.target && (e.target.tagName === 'DIV' || e.target.tagName === 'SPAN')) {
        let clickedElement = e.target.closest('div');

        let content = clickedElement.id;

        // if (video) {
        //     video.innerHTML = '';
        //     video.pause();
        // }


        // let newVideo = document.createElement('source');
        // video.appendChild(newVideo);


        // worksDescription.innerHTML = '';

        if (content === 'the-wishlist') {
            if (video) {
                video.innerHTML = '';
                video.style.display = 'none';
            }

            if(image){
                image.style.display = 'none';
            }

            worksDescription.innerHTML = 
            `<div>
            ■The Wishlist is a simulated e-commerce platform powered by Firebase.
            <br>
            <br>■It utilizes Realtime Database to store and retrieve data, embodying users' wishlist items and be publicly displayed on the webpage. This platform allows individuals to save their wishlist items while also exploring the wishlist items of others, creating a space designed for sharing.
            <br>
            <br><div id="visit"><a href="https://helen-wu.online/2024-sites/the-wishlist/">■Link to website↗︎</a></div>
        </div>`;
        }



        if (content === 'cd-player') {
            if (video) {
                video.innerHTML = '';
                let newVideo = document.createElement('source');
                newVideo.setAttribute('src', 'assets/videos/CD Player/CD Player video3.mp4');
                video.appendChild(newVideo);
                video.load();
                video.style.display = 'block';
            }

            if(image){
                image.style.display = 'none';
            }

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
            if (video) {
                video.innerHTML = '';
                let newVideo = document.createElement('source');
                newVideo.setAttribute('src', 'assets/videos/Sound Interaction/Sound Interaction.mp4');
                video.appendChild(newVideo);
                video.load();
                video.style.display = 'block';
            }

            if(image){
                image.style.display = 'none';
            }


        }

        if (content === 'spreadsheet') {
            if (video) {
                video.innerHTML = '';
                video.style.display = 'none';
            }

            if(image){
                image.setAttribute('src', 'assets/images/Spreadsheet/Spreadsheet.png');
                image.style.display = 'block';
            }

            worksDescription.innerHTML = 
            `<div>
            ■ON SPREADSHEET, ART, DESIGN is an open online archive on spreadsheet, dedicated to new media art uniquely mediated  through spreadsheets. 
            <br>
            <br>■This archive will showcase the power of spreadsheets not merely as organizational or calculation tools but as an innovative and unexpected medium for artistic creation. 
            <br>
            <br>■Based on this, this archive will also explore the relationship between spreadsheets and the development of net art and new media art. It reflects on related questions, such as - what does the transformation of spreadsheets from accounting tool to art medium reveal? why do designers or artists choose to use this tool?
            <br>
            <br>■This is an ongoing project
            <br><div id="visit"><a href="https://docs.google.com/spreadsheets/d/163V3ZQcCfLt4502UdJ1pVUUQFgBnExE63K3QKJHOy6w/edit?usp=sharing">■Link to spreadsheet↗︎</a></div>
        </div>`;

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