function detectedUA() {
const ua = navigator.userAgent;
const chromeWeb = /Chrome|CriOS/.test(ua) && !/Edge|OPR/.test(ua);
const device = /iPhone|Android|iPod|iPad/.test(ua);
// const testPara = document.getElementById("test");
// testPara.textContent = ua;
  return chromeWeb || device;
}

if (detectedUA()) {
alert("⚠️ This tool might function incorrectly on your device and browser! Please switch to a different browser. You can still save your profile picture by taking a screenshot!"); 
}


const redS =    
  document.getElementById("RedSlider");
const blueS = 
  document.getElementById("BlueSlider");
const greenS = 
  document.getElementById("GreenSlider");

const redVal =
  document.getElementById("RedV");
const blueVal =
  document.getElementById("BlueV");
const greenVal =
  document.getElementById("GreenV");

const colorBox =
  document.getElementById("ColorBox");

function updateColor() {
const Red = 
  redS.value;
const Blue =
  blueS.value;
const Green =
  greenS.value;

const updatedColor =
  `rgb(${Red}, ${Green}, ${Blue})`;

colorBox.style.backgroundColor =
  updatedColor;

redVal.textContent = "Red: " + Red;
greenVal.textContent = "Green: " + Green;
blueVal.textContent = "Blue: " + Blue;

}

redS.addEventListener("input", updateColor);
greenS.addEventListener("input", updateColor);
blueS.addEventListener("input", updateColor);

updateColor();


const downloadB = document.getElementById("downloadBtn");

downloadB.addEventListener("click", function() {
const entireEle = document.querySelector(".container");

  
html2canvas(entireEle).then(canvas => {
canvas.toBlob(function(blob) {
const downloadLink =  document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "profilebyhlwn.png";
  downloadLink.click();
});
});
});

const openB = document.getElementById("openBtn");

openB.addEventListener("click", function() {
const entireEle = document.querySelector(".container");

 const newWindow = window.open('', "_blank");
  
html2canvas(entireEle).then(canvas => {
    const imgURL = canvas.toDataURL(); 
    newWindow.document.write(`<img src="${imgURL}">`);
    newWindow.document.title = "Profile Pic :)";
  });
});



let currentImg = 0;
let allImages = 6;
let highImages = 6;
let lowImages = 0;

const tophat =
  document.getElementById("1");
const bananahat =
  document.getElementById("2");
const chefshat =
  document.getElementById("3");
const cowboyhat =
  document.getElementById("4");
const headphones =
  document.getElementById("5");
const partyhat =
  document.getElementById("6");
const everyImage =
  document.getElementById("allCos");

const hats = [tophat, bananahat, chefshat, cowboyhat, headphones, partyhat];
  hats.forEach(hat => hat.style.opacity = 0);
  

function updateImage() {
  
  hats.forEach(hat => hat.style.opacity = 0);
  //const testPara = document.getElementById("test");
//testPara.textContent = currentImg;
everyImage.style.opacity = 0;
  
  switch (currentImg) {
case 0:
everyImage.style.opacity = 0;
  break;
case 1: 
tophat.style.opacity = 1;
  break;
case 2: 
bananahat.style.opacity = 1;
  break;
case 3: 
chefshat.style.opacity = 1;
  break;
case 4:
cowboyhat.style.opacity = 1;
  break;
case 5: 
headphones.style.opacity = 1;
break;
case 6:
partyhat.style.opacity = 1;
break;
}
}

function forward() {
currentImg++;
  if (currentImg > highImages) currentImg = 0;
updateImage();
}

function back() {
currentImg--;

if (currentImg < 0) currentImg = allImages;
  updateImage();
}
                          
