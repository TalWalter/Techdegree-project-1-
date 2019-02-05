/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

let quotes = [
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    source: " –Steve Jobs"
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    source: " –Ralph Waldo Emerson"
  },
  {
    quote: "Start where you are. Use what you have.",
    source: "Do what you can. –Arthur Ashe"
  },
  {
    quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    source: " -Hellen Keller"
  },
  {
    quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    source: " –Maya Angelou"
  },
  {
    quote: "Happiness is not something readymade. It comes from your own actions.",
    source: " –Dalai Lama"
  },
  {
    quote: "Life is not so short but that there is always time enough for courtesy.",
    source: " -Ralph Waldo Emerson",
    citation: " 'Letters and Social Aims'",
    year: " 1876"
    
 },
 {
  quote: "I can accept failure. Everyone fails at something. But I can't accept not trying [no hard work].", 
  source: " -Michael Jordan",
  citation: " 'I Can't Accept Not Trying : Michael Jordan on the Pursuit of Excellence'",
  year: " 1994"
  
 }

];



/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * 7 ) + 1;
  for ( let i = 0; i < array.length; i++) {
    return array[randomNumber].quote + ", " + array[randomNumber].source + ", " + array[randomNumber].citation + ", " + array[randomNumber].year;
  }
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote () {
  let random= getRandomQuote(quotes);
  let result = "";
  result += '<p class="quote">' + random.quote + '</p>';
  result += '<p class="source">' + random.source + '</p>';
  if (random.citation === true) {
    result += '<span class="citation">' + quotes[i].citation + '</span>';
  } else if (random.year === true) {
    result += '<span class="year">' + random.year + '</span>';
  }
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.