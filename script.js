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
  //Check id Author field is blank, replaces it with quote unknown
  if(!quote.author){
    authorText.textContent="unknown";
  } else {
    authorText.textContent = quote.author;
  }
   //Check quote length to determine the styling
  if(quote.text.length>50){
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
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
