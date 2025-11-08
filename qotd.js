	const quotes = ["1", "2", "3", "4", "5"];
	
	const date = document.getElementById("theDate");
	
	
function dailyQuote() {
	const currentDay = new Date();
    const day = currentDay.getDate();
	const dayQuote = day % quotes.length;
	const quote =  quotes[dayQuote];
	return quote;
	}


document.addEventListener("DOMContentLoaded", () => {
const quoteEle = document.getElementById("quoteEle");
quoteEle.textContent = dailyQuote();
});
