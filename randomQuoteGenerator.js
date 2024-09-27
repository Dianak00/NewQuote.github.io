const quotes = [
    
    {quote: '“All our dreams can come true, if we have the courage to pursue them.”',
    author: '— Walt Disney'},

    {quote: "“If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.”",
    author: '— Wayne Dyer'},
    {quote: '“Learn as if you will live forever, live like you will die tomorrow.” ',
    author: '— Mahatma Gandhi'},
    {quote: '“Be yourself; everyone else is already taken.”',
    author: '― Oscar Wilde'},
    {quote: '“So many books, so little time.”',
    author: '― Frank Zappa'},
    {quote:  " “You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.” ",
    author: '― William W. Purkey'}
]
const quoteText = document.getElementById('quoteText');
const authorQuote = document.querySelector('#authorQuote');
const generateBtn = document.querySelector('#generator');



function generateQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomNumber].quote;
    authorQuote.textContent = quotes[randomNumber].author;
    //return quotes[randomNumber];

}
generateBtn.addEventListener('click', generateQuote);

const copyBtn = document.querySelector('.copy');
const message = document.querySelector('#message');


copyBtn.addEventListener('click', () => {
    const textToCopy = quoteText.textContent + " " + authorQuote.textContent;
    navigator.clipboard.writeText(textToCopy);

});