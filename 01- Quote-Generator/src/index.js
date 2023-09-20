const FAMOUS_QUOTES = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        author: "Edmund Burke"
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        quote: "You can't connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.",
        author: "Steve Jobs"
    },
    {
        quote: "It always seems impossible until it is done.",
        author: "Nelson Mandela"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "To succeed in life, you need two things: ignorance and confidence.",
        author: "Mark Twain"
    }
];

const quoteHolder = document.querySelector('#quote-text');
const quotedFrom = document.querySelector('#quoted-from');
const quoteObject = getRandomQuote();

quoteHolder.innerText = quoteObject.quote;
quotedFrom.innerText = quoteObject.author;

const generateButton = document.querySelector('button');

generateButton.addEventListener('click', (e) => {

    let quoteObject = getRandomQuote();

    quoteHolder.innerText = quoteObject.quote;
    quotedFrom.innerText = quoteObject.author;

});

function getRandomQuote() {

    return FAMOUS_QUOTES[Math.floor(Math.random() * 20)];
}

