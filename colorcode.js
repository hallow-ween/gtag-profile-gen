const redCS =    
  document.getElementById("RColorSlider");
const blueCS = 
  document.getElementById("BColorSlider");
const greenCS = 
  document.getElementById("GColorSlider");

const redValC =
  document.getElementById("redC");
const blueValC =
  document.getElementById("blueC");
const greenValC =
  document.getElementById("greenC");
  
const rgb =
  document.getElementById("rgb");


function showColor() {
	
const r = redCS.value;
const b = blueCS.value;
const g = greenCS.value;

let rr = Math.round((r / 9 ) * 255);
let bb = Math.round((b / 9 )* 255);
let gg = Math.round((g / 9 )* 255);

const colorCode =
`rgb(${rr}, ${gg}, ${bb})`;
rgb.textContent = colorCode;

redValC.textContent = "Red: " + r;
greenValC.textContent = "Green: " + g;
blueValC.textContent = "Blue: " + b;

rgb.style.color = `rgb(${rr}, ${gg}, ${bb})`;

}

redCS.addEventListener("input", showColor);
greenCS.addEventListener("input", showColor);
blueCS.addEventListener("input", showColor);

showColor();
