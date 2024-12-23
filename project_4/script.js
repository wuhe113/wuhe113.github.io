let quantity = 1200;
let max = 4;
let min = 1;

let stars = document.getElementById("stars");


function createStars(){
  
  for (let i=0;i<quantity;i++){
  let randomSize = makeRandomSize(min, max);
  let newDiv3 = document.createElement("div");
  
  newDiv3.classList.add("star");
  newDiv3.style.width = randomSize + "px";
  newDiv3.style.height = randomSize + "px";
  newDiv3.style.left = Math.random()*100 + "vw";
  newDiv3.style.top = Math.random()*100 + "vh";


  let randomDelay = Math.random() * 5; // Random delay up to 5 seconds
  newDiv3.style.animationDelay = `${randomDelay}s`;


  stars.appendChild(newDiv3);

  stars.style.visibility = "hidden";


}
}

createStars();



function detectNumber() {
  const NumContent = document.getElementById('durations').textContent;
  const match = NumContent.match(/\d+/);
  const NUM = match ? parseInt(match[0], 10) : 0;
  return NUM;
}


function addTimeLine(){


  let gridDiv = document.getElementById("data1");

    for (let i = 0; i < 150; i++){
        
        let newDiv = document.createElement("div");

        newDiv.classList.add("timeLine");

        gridDiv.appendChild(newDiv);


    }

}

addTimeLine();


function changeSpecificDiv() {
  const numberDiv = detectNumber();
  // const targetIndex = numberDiv * 10 - 1;
  const targetIndex =
    numberDiv >= 5 ? numberDiv * 10 - 1 : numberDiv == 4 ? numberDiv * 22 : numberDiv < 4 ? numberDiv * 28 : -1;

  let gridDiv = document.getElementById("data1");


  // if (targetIndex < gridDiv.children.length) {
  //   Array.from(gridDiv.children).forEach((div) =>
  //     div.classList.remove("changed-time")
  //   );
  if (targetIndex >= 0 && targetIndex < gridDiv.children.length) {
    Array.from(gridDiv.children).forEach((div) =>
      div.classList.remove("changed-time")
    );

    gridDiv.children[targetIndex].classList.add("changed-time");
  }
}

// function addTimeLine2(){

//   let durationNum = detectNumber();
//   let targetIndex = durationNum * 10 - 1;

//   let gridDiv3 = document.getElementById("data1copy");

//     for (let i = 0; i < 150; i++){
        
//         let newDiv4 = document.createElement("div");

//         newDiv4.classList.add("timeLine");
//         newDiv4.classList.remove("changed-time");
//         newDiv4.style.visibility = "hidden";



//         if (i === targetIndex) {
//           newDiv4.style.visibility = "visible";
//           newDiv4.classList.add("changed-time");
//         } 

//         gridDiv3.appendChild(newDiv4);


//     }

// }


function addBPM(){
  for (let i = 0; i < 66; i++){
    let gridDiv2 = document.getElementById("data2");
  let newDiv3 = document.createElement("div");

  newDiv3.classList.add("bpmBlock");

  gridDiv2.appendChild(newDiv3);
  }
}

addBPM();

let container = document.getElementById("radial");
let container2 = document.getElementById("radial2");

function radialLines(){
for (let i = 0; i < 12; i++) {
  let line = document.createElement("div");
  line.classList.add("line");

  const angle = (360 / 12) * i;
  line.style.transform = `rotate(${angle + 15}deg) translateY(-50%)`;

  container.appendChild(line);
}
}

radialLines();


function check() {
  let textContainer = document.getElementById("keys");
  let keyContainer = document.getElementById("data3");
  let moodContainer = document.getElementById("mood");

  let moodChange = document.getElementById("m1");



  let text = textContainer.textContent;
  let moodText = moodContainer.textContent;

  if (text.includes('C')) {
    keyContainer.classList.add('key1');
  } else {
    keyContainer.classList.remove('key1');
  }

  if (text.includes('G')) {
    keyContainer.classList.add('key2');
  } else {
    keyContainer.classList.remove('key2');
  }

  if (text.includes('D')) {
    keyContainer.classList.add('key3');
  } else {
    keyContainer.classList.remove('key3');
  }

  if (text.includes('A')) {
    keyContainer.classList.add('key4');
  } else {
    keyContainer.classList.remove('key4');
  }
  
  if (text.includes('E')) {
    keyContainer.classList.add('key5');
  } else {
    keyContainer.classList.remove('key5');
  }

  if (text.includes('B')) {
    keyContainer.classList.add('key6');
  } else {
    keyContainer.classList.remove('key6');
  }

  if (text.includes('G♭') && text.includes('F')) {
    keyContainer.classList.add('key7');
  } else {
    keyContainer.classList.remove('key7');
  }

  if (text.includes('D♭')) {
    keyContainer.classList.add('key8');
  } else {
    keyContainer.classList.remove('key8');
  }

  if (text.includes('A♭')) {
    keyContainer.classList.add('key9');
  } else {
    keyContainer.classList.remove('key9');
  }

  if (text.includes('E♭')) {
    keyContainer.classList.add('key10');
  } else {
    keyContainer.classList.remove('key10');
  }

  if (text.includes('B♭')) {
    keyContainer.classList.add('key11');
  } else {
    keyContainer.classList.remove('key11');
  }

  if (text.includes('F')) {
    keyContainer.classList.add('key12');
  } else {
    keyContainer.classList.remove('key12');
  }

  const moodWords = [
    "Melancholic",
    "Nostalgic",
    "Sentimental",
    "Mellow",
    "Romantic",
    "Emotional",
    "Gentle"
  ];

  let cdRotate = document.getElementById("cd2");
  
  if (moodWords.some(word => moodText.includes(word))) {
    cdRotate.style.animation = "rotate360 8s linear infinite";
  } else {
    cdRotate.style.animation = "rotate360 2s linear infinite";
  }
  


}



// function radialKeys(){
//   for (let i = 0; i < 12; i++) {
//     let keyBlock = document.createElement("div");
//     keyBlock.id = 'div-${i}';
//     keyBlock.classList.add("keyBlock");
  
//     const angle = (360 / 12) * i;
//     keyBlock.style.transform = `rotate(${angle + 15}deg)`;
//     keyBlock.style.display = 'none';
  
//     container2.appendChild(keyBlock);
//   }
// }

// radialKeys();

// function showDiv(divId) {
//   let keys = document.querySelectorAll('.keyBlock');
//   keys.forEach(box => box.style.display = 'none');
//   const specificDiv = document.getElementById(divId);
//   if (specificDiv) specificDiv.style.display = 'block';
// }




let songDiv = document.getElementById("songs");
let titleDiv = document.getElementById("title");
let moodDiv = document.getElementById("mood");
let keyDiv = document.getElementById("keys");
let durationDiv = document.getElementById("durations");
let listeningDiv = document.getElementById("listening");

let audioPlayer = document.getElementById("audioPlayer");

let sheetID = "1eAH9DMUyqK7w9UeGloszZTbSucD-TmKSmfhR5CD_TCc";
let tabName = "Sheet1";
let myURL = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

async function getData() {

  try {
  
    let response = await fetch(myURL);
    let data = await response.json();
    
    // Loop through each row
    for(let dataPoint of data){
    console.log(dataPoint)
    
    // Do something with each dataPoint here
    let newDiv2 = document.createElement("div");
    songDiv.appendChild(newDiv2);
    newDiv2.classList.add("songName");

    newDiv2.innerHTML = dataPoint.song;

    newDiv2.onclick = function(e) {
      titleDiv.innerHTML = dataPoint.song;
      moodDiv.innerHTML = dataPoint.mood;
      keyDiv.innerHTML = dataPoint.key;
      durationDiv.innerHTML = dataPoint.min;
      listeningDiv.innerHTML = dataPoint.time;

      button.style.backgroundColor = "rgb(77, 77, 77)";
      cd.style.animationPlayState = 'running';

      isToggled = true;

      toggleButton();

      audioPlayer.src = dataPoint.audio;
      audioPlayer.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });

      let mappedBPM = map(dataPoint.bpm, 90, 180, 3, 0.3);
      let bpmChange = document.getElementById("data2");

      bpmChange.style.gridTemplateColumns = `repeat(11, ${mappedBPM}vw)`;




      check();
      // addTimeLine2();
      changeSpecificDiv();
      animateGradient();

      resetGradient();
      // setInitialGradient();

    };

    
    }
  
  } catch(error) {
    console.error(error);
  }
  
}

getData();

let button = document.getElementById("b1");
let cd = document.getElementById("cd2");

let isToggled = true;

function toggleButton(){

    if (isToggled) {
      button.style.backgroundColor = "rgb(77, 77, 77)";
      cd.style.animationPlayState = 'running';
    } else{
      button.style.backgroundColor = 'transparent';
      cd.style.animationPlayState = 'paused';
    }
    isToggled = !isToggled;

}

button.onclick = toggleButton;


let percentage = 0;
let percentage2 = 50;
let isAnimating = false;

let clouds = document.getElementById("clouds");

let sun = document.getElementById("sun");


function animateGradient() {
  if (!isAnimating) return;

  let timeText = listeningDiv.textContent;


  if(timeText.includes("Day")){
    clouds.style.visibility = "visible";
  } else{
    clouds.style.visibility = "hidden";
  }

  if(timeText.includes("Night")){
    stars.style.visibility = "visible";
  } else{
    stars.style.visibility = "hidden";
  }

  if(timeText.includes("Golden")){
    sun.style.visibility = "visible";
  } else{
    sun.style.visibility = "hidden";
  }

  


  percentage += 0.001;
  percentage2 += 0.001;

  if (percentage > 100) {
    percentage = 100;
    percentage2 = 100;

  }

  let firstColor = timeText.includes("Day") ? "rgba(41,166,221,1)" : timeText.includes("Night") ? "rgba(29,35,71,1)": timeText.includes("Golden") ? "rgba(255,146,75,1)": "rgba(248,248,248,1)" ;
  // let secondColor = timeText.includes("Day") ? "rgba(255,255,255,1)" : "rgba(41,166,221,1)";

  cd.style.background = `linear-gradient(180deg, ${firstColor} ${percentage}%, rgba(255,255,255) ${percentage2}%)`;
  


    requestAnimationFrame(animateGradient);
}

function resetGradient() {
  percentage = 0;
  percentage2 = 50;

  if (!isAnimating) {
    isAnimating = true;
    requestAnimationFrame(animateGradient);
  }
}




function makeRandomSize(minSize, maxSize){
  return minSize + Math.random()*(maxSize-minSize);
}






function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}