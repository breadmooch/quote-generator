const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// let apiQuotes = [];

//Show New Quote
function newQuote(){
  //Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}

// Get Quotes from API
// async function getQuotes(){
//     const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//    try {
//        const response = await fetch(apiUrl);
//        apiQuotes = await response.json();
//        newQuote();
//    } catch(error){
//     // Catch Error Here
//    }
// }

// //On load
// getQuotes();
newQuote();
