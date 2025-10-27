function detectedUA() {
const ua = navigator.userAgent;
const chromeWeb = /Chrome/.test(ua) && !/Edge|OPR/.test(ua);
const device = /iPhone|Android|iPod|iPad/.test(ua);
return chromeWeb && device;
}

if (detectedUA()) {
alert("⚠️ This tool might function incorrectly on your device and browser! Please switch to a different browser"); 
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


                            
