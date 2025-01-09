let cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

// const shootingStars = document.getElementById("about");

//     for (let i = 0; i < 10; i++){

//         let stars = document.createElement('div');
//         stars.setAttribute('class', 'star');
//         stars.innerHTML= `<span></span>`;

//         shootingStars.appendChild(stars);
//     }


const works = document.getElementById("work");
const worksDescription = document.getElementById("description");

const image = document.getElementById("works-image");

const loader = document.getElementById("loader");

const dots = document.getElementById("dots");

let dotCount = 0;
let typingInterval;

const next = document.getElementById("nextButton");
const prev = document.getElementById("prevButton");
const enlarge = document.getElementById("enlargeButton");

const startTypingAnimation = () => {
    typingInterval = setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    dots.textContent = '.'.repeat(dotCount);
    }, 300);
}

const stopTypingAnimation = () => {
    clearInterval(typingInterval);
    dots.textContent = '';
};

let isEnlarged = false;

enlarge.onclick = function(e) {
    event.stopPropagation(); // Prevent the click on the enlarge button from propagating to the document
    if (isEnlarged) {
        resetImageStyle();
    } else {
        enlargeImage();
    }
    isEnlarged = !isEnlarged;
};

const enlargeImage = () => {
    image.style.transform = "translate(-50%, -50%) scale(0.9)";
    image.style.position = "fixed";
    image.style.left = "50%";
    image.style.top = "50%";
    image.style.zIndex = "100";
};

const resetImageStyle = () => {
    image.style.transform = "";
    image.style.position = "";
    image.style.left = "";
    image.style.top = "";
    image.style.zIndex = "";
    isEnlarged = false;
};

document.onclick = function (e) {
    if (isEnlarged && !image.contains(event.target)) {
        resetImageStyle();
    }
};




// const updateButtonVisibility = () => {
//     const imageLoaded = image && image.getAttribute('src') && image.getAttribute('src').trim() !== '';

//     if (imageLoaded) {
//         prev.style.display = "block";
//         next.style.display = "block";
//         enlarge.style.display = "block";
//     } else {
//         prev.style.display = "none";
//         next.style.display = "none";
//         enlarge.style.display = "none";
//     }
// };


const updateButtonVisibility = () => {
    const isImageVisible = image.style.display !== "none";
    prev.style.display = isImageVisible ? "block" : "none";
    next.style.display = isImageVisible ? "block" : "none";
    enlarge.style.display = isImageVisible ? "block" : "none";
};

// const toggleImageVisibility = () => {
//     if (image.style.display === "none") {
//         image.style.display = "block"; // Show the image
//     } else {
//         image.style.display = "none"; // Hide the image
//     }
//     updateButtonVisibility(); // Update button visibility
// };

works.onclick = function (e) {
    if (e.target && (e.target.tagName === 'DIV' || e.target.tagName === 'SPAN')) {
        let clickedElement = e.target.closest('div');

        let content = clickedElement.id;

        loader.style.display = "none";

        if (video) {
            video.style.display = "none";
            video.innerHTML = "";
        };

        if (image) {
            image.style.display = "none";
        };

        let mediaData = {}; 
        let currentIndex = 0;

        const loadMedia = (index) => {
            if (index < 0 || index >= mediaData.sources.length) {
                loader.style.display = "none";
                return;
            }

            const { type, src } = mediaData.sources[index];
            loader.style.display = "block";
            startTypingAnimation();

            if (type === 'image') {
                video.style.display = "none";
                image.setAttribute('src', src);

                image.onload = () => {
                    stopTypingAnimation();
                    loader.style.display = "none";
                    image.style.display = "block";
                    updateButtonVisibility('image');
                };

                image.onerror = () => {
                    stopTypingAnimation();
                    loader.style.display = "none";
                    alert("Failed to load image.");
                };
            } else if (type === 'video') {
                image.style.display = "none";
                let newVideoSource = document.createElement('source');
                newVideoSource.setAttribute('src', src);
                video.appendChild(newVideoSource);

                video.load();
                video.onloadeddata = () => {
                    stopTypingAnimation();
                    loader.style.display = "none";
                    video.style.display = "block";
                    updateButtonVisibility('video');
                };

                video.onerror = () => {
                    stopTypingAnimation();
                    loader.style.display = "none";
                    alert("Failed to load video.");
                };
            }
        };


        // if (video) {
        //     video.innerHTML = '';
        //     video.pause();
        // }


        // let newVideo = document.createElement('source');
        // video.appendChild(newVideo);


        // worksDescription.innerHTML = '';

        if (content === 'the-wishlist') {
            mediaData = {
                type: "video",
                sources: [
                    { type: "video", src: ""}
                ],
            };

            loadMedia(currentIndex);

            // if (video) {
            //     video.innerHTML = '';
            //     video.style.display = 'none';
            // }


            // if(image){
            //     image.style.display = 'none';
            // }

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

            mediaData = {
                type: "video",
                sources: [
                    { type: "video", src: "assets/videos/CD Player/CD Player video3.mp4"}
                ],
            };

            loadMedia(currentIndex);

            // if (video) {
            //     video.innerHTML = '';
            //     let newVideo = document.createElement('source');

            //     loader.style.display = "block";
            //     video.style.display = "none";

            //     startTypingAnimation();

            //     newVideo.setAttribute('src', 'assets/videos/CD Player/CD Player video3.mp4');
            //     video.appendChild(newVideo);
            //     video.load();
            //     // video.style.display = 'block';
            // }

            // video.addEventListener('loadeddata', () => {
            //     stopTypingAnimation(); 
            //     loader.style.display = "none";
            //     video.style.display = "block";
            //     updateButtonVisibility();
            // });

            // video.onerror = () => {
            //     loader.style.display = "none";
            //     alert("Failed to load video.");
            // };

            // if(image){
            //     image.style.display = 'none';
            // }

            worksDescription.innerHTML = 
            `<div>
            ■&lt;T-SQUARE&gt; CD Player is a web-based project that transforms real-time data uploaded to Google Spreadsheets into visualizations, evolving these into CD packaging designs. At the same time, the website itself functions as a CD player.
            <br>
            <br>■All music by T-SQUARE, a Japanese jazz-fusion band.
            <br>
            <br><div id="visit"><a href="https://helen-wu.online/2024-sites/cd-player/">■Link to website↗︎</a></div>
        </div>`;
        }

        if (content === 'sound-projection') {

            mediaData = {
                type: "video",
                sources: [
                    { type: "video", src: "assets/videos/Sound Interaction/Sound Interaction.mp4"}
                ],
            };

            loadMedia(currentIndex);

            // if (video) {
            //     video.innerHTML = '';
            //     let newVideo = document.createElement('source');

            //     loader.style.display = "block";
            //     video.style.display = "none";

            //     startTypingAnimation();

            //     newVideo.setAttribute('src', 'assets/videos/Sound Interaction/Sound Interaction.mp4');
            //     video.appendChild(newVideo);
            //     video.load();
            //     // video.style.display = 'block';
            // }

            // video.addEventListener('loadeddata', () => {
            //     stopTypingAnimation(); 
            //     loader.style.display = "none";
            //     video.style.display = "block";
            //     updateButtonVisibility();
            // });

            // video.onerror = () => {
            //     loader.style.display = "none";
            //     alert("Failed to load video.");
            // };

            // if(image){
            //     image.style.display = 'none';
            // };

            worksDescription.innerHTML = 
            `<div>
            ■This is a projection mapping project utilizing p5.js programming for sound visualization. The concept is an expansion on Stan VanDerBeek's 1966 Manifesto for Expanded Cinema. The goal is to capture all the sounds within a space, treating them as a cohesive whole, and visually represent the frequency of interactions between sounds.
            <br>
        </div>`;


        }

        if (content === 'spreadsheet') {

            mediaData = {
                type: "image",
                sources: [
                    { type: "image", src: "assets/images/Spreadsheet/Spreadsheet.png"}
                ],
            };

            loadMedia(currentIndex);



            // if (video) {
            //     video.innerHTML = '';
            //     video.style.display = 'none';
            // }

            // loader.style.display = "block";
            // image.style.display = "none";
            // image.setAttribute('src', 'assets/images/Spreadsheet/Spreadsheet.png');

            // startTypingAnimation();

            // image.onload = () => {
            //     stopTypingAnimation(); 
            //     loader.style.display = "none";
            //     image.style.display = "block";
            //     updateButtonVisibility();
            // };

            // image.onerror = () => {
            //     loader.style.display = "none";
            //     alert("Failed to load image.");
            // };

            // if(image){
            //     image.setAttribute('src', 'assets/images/Spreadsheet/Spreadsheet.png');
            //     image.style.display = 'block';
            // }

            worksDescription.innerHTML = 
            `<div>
            ■ON SPREADSHEET, ART, DESIGN is an open online archive on spreadsheet, dedicated to new media art uniquely mediated  through spreadsheets. 
            <br>
            <br>■This archive showcases the power of spreadsheets not merely as organizational or calculation tools but as an innovative and unexpected medium for artistic creation. 
            <br>
            <br>■Based on this, it also explores the relationship between spreadsheets and the development of net art and new media art. It reflects on related questions, such as - what does the transformation of spreadsheets from accounting tool to art medium reveal? why do designers or artists choose to use this tool?
            <br>
            <br>■This is an ongoing project.
            <br><div id="visit"><a href="https://docs.google.com/spreadsheets/d/163V3ZQcCfLt4502UdJ1pVUUQFgBnExE63K3QKJHOy6w/edit?usp=sharing">■Link to spreadsheet↗︎</a></div>
        </div>`;

        }

        if (content === 'self-introduction') {

            mediaData = {
                type: "video",
                sources: [
                    { type: "video", src: "assets/videos/Self-Introduction/Self-Introduction.mp4"}
                ],
            };

            loadMedia(currentIndex);

            // if (video) {
            //     video.innerHTML = '';
            //     let newVideo = document.createElement('source');

            //     loader.style.display = "block";
            //     video.style.display = "none";

            //     startTypingAnimation();

            //     newVideo.setAttribute('src', 'assets/videos/Self-Introduction/Self-Introduction.mp4');
            //     video.appendChild(newVideo);
            //     video.load();

            //     // video.style.display = 'block';
            // }

            // video.addEventListener('loadeddata', () => {
            //     stopTypingAnimation(); 
            //     loader.style.display = "none";
            //     video.style.display = "block";
            //     updateButtonVisibility();
            // });

            // video.onerror = () => {
            //     loader.style.display = "none";
            //     alert("Failed to load video.");
            // };

            // if(image){
            //     image.style.display = 'none';
            // };

            worksDescription.innerHTML = 
            `<div>
            <div id="visit"><a href="https://helen-wu.online/2024-sites/introductory/">■Link to website↗︎</a></div>
            <br>
        </div>`;


        }

        if (content === 'twofivesix-images') {

            mediaData = {
                type: 'image',
                sources: [
                    { type: 'image', src: 'assets/images/256 Images/image1.jpg' },
                    { type: 'image', src: 'assets/images/256 Images/image2.jpg' },
                    { type: 'image', src: 'assets/images/256 Images/image3.jpg' },
                    { type: 'image', src: 'assets/images/256 Images/image4.jpg' },
                    { type: 'image', src: 'assets/images/256 Images/image5.jpg' },
                ],
            };

            loadMedia(currentIndex);

            // if (video) {
            //     video.innerHTML = '';
            //     video.style.display = 'none';
            // }
        
            // loader.style.display = "block";
            // image.style.display = "none";

            // enlarge.style.display = "block";
        

            // const images = [
            //     'assets/images/256 Images/image1.jpg',
            //     'assets/images/256 Images/image2.jpg',
            //     'assets/images/256 Images/image3.jpg',
            //     'assets/images/256 Images/image4.jpg',
            //     'assets/images/256 Images/image5.jpg',
            // ];
        

            // let currentIndex = 0;
        

            // const loadImage = (index) => {
            //     if (index < 0 || index >= images.length) {
            //         // alert("Invalid image index");
            //         loader.style.display = "none";
            //         return;
            //     }
        
            //     image.setAttribute('src', images[index]);
        
            //     startTypingAnimation();
        
            //     image.onload = () => {
            //         stopTypingAnimation();
            //         loader.style.display = "none";
            //         image.style.display = "block";
            //         updateButtonVisibility();
            //     };
        
            //     image.onerror = () => {
            //         loader.style.display = "none";
            //         alert("Failed to load image.");
            //     };
            // };
        

            // loadImage(currentIndex);
        

        
            // if (next && prev) {
        
            //     next.onclick = () => {
            //         currentIndex = (currentIndex - 1) % mediaData.sources.length;
            //         loadMedia(currentIndex);
            //     };
        
            //     prev.onclick = () => {
            //         currentIndex = (currentIndex + 1 + mediaData.sources.length) % mediaData.sources.length;
            //         loadMedia(currentIndex);
            //     };
            // }
        
            worksDescription.innerHTML = 
            `<div>
                ■&lt;256 Images&gt; Untitled is an experimental book crafted using various materials. It categorizes 256 images into ten distinct “sensations” based on the feelings each image conveys: Static, Wild, Bloody, Blue, Flowing, Floating, Glowing, Glittering, Metallic and Fictional. These ten sensations are physically embodied in the cover of the book through corresponding materials. 
                <br><br>
                ■When engaging with this experimental object, readers not only perceive the sensations through the images but also physically experience them by touching the materials. This approach transforms abstract associations into tangible experiences. The content is printed on individual tabloid-sized sheets, allowing readers the freedom to rearrange the pages as they see fit, creating a personalized interaction with the material.
            </div>`;
        }

        if (content === 'laika') {

            mediaData = {
                sources: [
                    { type: 'image', src: 'assets/images/Laika/Laika 1.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 2.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 3.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 4.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 5.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 6.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 7.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 8.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 9.jpg' },
                    { type: 'image', src: 'assets/images/Laika/Laika 10.jpg' },
                    { type: 'video', src: 'assets/videos/Laika/Laika video.mp4' },
                ],
            };

            loadMedia(currentIndex);


            worksDescription.innerHTML = 
            `<div>
                ■Laika, Space is a project that intends to utilize multiple mediums to create an immersive space connecting the audience to the story of the space dog Laika. The space presents a variety of fragmented information about this historical archive, which are like scattered jigsaw puzzles waiting to be put together by the audience who enters the space.
            </div>`;
        }

        if (content === 'sunset-sunrise') {

            mediaData = {
                type: "video",
                sources: [
                    { type: "video", src: "assets/videos/Sunset Sunrise/Sunset Sunrise.mp4"}
                ],
            };

            loadMedia(currentIndex);

            worksDescription.innerHTML = 
            `<div>
            <div id="visit"><a href="https://helen-wu.online/2024-sites/sunset-sunrise/">■Link to website↗︎</a></div>
            <br>
        </div>`;
        }

        if (content === 'flipping') {

            mediaData = {
                type: "video",
                sources: [
                    { type: "video", src: "assets/videos/Flipping/Flipping.mp4"}
                ],
            };

            loadMedia(currentIndex);

            worksDescription.innerHTML = 
            `<div>
            <div id="visit"><a href="https://helen-wu.online/2024-sites/flipping/">■Link to website↗︎</a></div>
            <br>
        </div>`;
        }

        if (content === 'wishes') {

            mediaData = {
                type: 'image',
                sources: [
                    { type: 'image', src: 'assets/images/Wishes/wishes1.gif' },
                    { type: 'image', src: 'assets/images/Wishes/wishes2.gif' },
                    { type: 'image', src: 'assets/images/Wishes/wishes3.gif' },
                    { type: 'image', src: 'assets/images/Wishes/wishes4.gif' },
                    { type: 'image', src: 'assets/images/Wishes/wishes5.gif' },
                    { type: 'image', src: 'assets/images/Wishes/wishes6.jpg' },
                    { type: 'image', src: 'assets/images/Wishes/wishes7.jpg' },
                ],
            };

            loadMedia(currentIndex);

        
            worksDescription.innerHTML = 
            `<div>
                ■All Your Wishes Come True is a zine project composed of two booklets, a collection of posters, and motion graphics derived from the physical outputs. Centered around the theme of "wishes," the project explores the methodology of wish fulfillment, meanwhile, demonstrates human desire to make wishes come true across time, cultures, and methodologies. 
                <br><br>
                ■The two booklets delve into the methodologies of wish fulfillment, drawing connections between Freud's Interpretation of Dreams, the myth of Pygmalion, the phenomenon of chain letters spread through the internet, and witches' spells. These narratives reveal humanity's timeless fascination with manifesting desires into reality.
                <br><br>
                ■The poster collection highlights renowned locations worldwide that are believed to grant wishes, accompanied by their corresponding folklore or stories. By weaving together these diverse narratives, the zine serves as a curated anthology, inviting readers to immerse themselves in the magic of wish-making.
                <br><br>
                ■Designed with both visual and narrative appeal, All Your Wishes Come True is intentionally crafted as a bedtime storybook for all kinds of people—evoking a sense of wonder and introspection.
            </div>`;
        }

        if (content === 'litter-trace') {

            mediaData = {
                sources: [
                    { type: 'image', src: 'assets/images/Litter/litter1.gif' },
                    { type: 'image', src: 'assets/images/Litter/litter2.jpg' },
                    { type: 'image', src: 'assets/images/Litter/litter3.jpg' },
                    { type: 'image', src: 'assets/images/Litter/litter4.gif' },
                    { type: 'video', src: 'assets/images/Litter/litter5.mp4' },

                ],
            };

            loadMedia(currentIndex);

        
            worksDescription.innerHTML = 
            `<div>
                ■LITTER & TRACE is a design publication project that includes a physical book, a motion graphic animation, and a complementary website design derived from the book's content. It explores the issue of urban littering, examining its psychological and societal roots while addressing questions such as why and where people litter. The project also investigates the connections between littering, criminal behavior, and its broader impact on urban communities and individual lives.
                <br><br>
                ■The physical book provides a foundation of research, data visualization, and storytelling, while the motion graphics and website expand the narrative through dynamic and interactive mediums. All of the elements from the project encourage audiences to reflect on the traces we leave in our environment and the role of individual actions in shaping public spaces.
            </div>`;
        }

        if (next && prev) {
        
            next.onclick = () => {
                currentIndex = (currentIndex - 1) % mediaData.sources.length;
                loadMedia(currentIndex);
            };
    
            prev.onclick = () => {
                currentIndex = (currentIndex + 1 + mediaData.sources.length) % mediaData.sources.length;
                loadMedia(currentIndex);
            };
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