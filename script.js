"use strict";

// Selecting elements
const quoteTxt = document.querySelector(".quote");
const btnQuote = document.querySelector(".btn-quote");
const authorEl = document.querySelector(".author");
const speechEl = document.querySelector(".speech");
const copyEl = document.querySelector(".copy");
const twitterEl = document.querySelector(".twitter");
const messageEl = document.querySelector(".message");

// Array of gratitude and mindfulness quotes
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "What we think, we become.",
        author: "Buddha"
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        text: "Gratitude is not only the greatest of virtues, but the parent of all others.",
        author: "Cicero"
    },
    {
        text: "The more grateful I am, the more beauty I see.",
        author: "Mary Davis"
    },
    {
        text: "Mindfulness is a way of befriending ourselves and our experience.",
        author: "Jon Kabat-Zinn"
    },
    {
        text: "Gratitude turns what we have into enough.",
        author: "Aesop"
    },
    {
        text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha"
    },
    {
        text: "The only way to live is to accept each minute as an unrepeatable miracle.",
        author: "Margaret Storm Jameson"
    },
    {
        text: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",
        author: "Marcus Aurelius"
    },
    {
        text: "Gratitude is the fairest blossom which springs from the soul.",
        author: "Henry Ward Beecher"
    }
];

// Random Quote Generator
function randomQuote() {
    btnQuote.textContent = "Loading...";
    // Selecting a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, author } = quotes[randomIndex];
    
    // Updating the UI with the selected quote
    quoteTxt.textContent = text;
    authorEl.textContent = author;
    btnQuote.textContent = "New Quote";
}

// Text-to-Speech Function
function speechText() {
    let speechText = new SpeechSynthesisUtterance();
    speechText.text = `${quoteTxt.textContent}`;
    speechText.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(speechText);
}

// Copy to Clipboard Function
copyEl.addEventListener("click", () => {
    // Copy the quote text to clipboard
    navigator.clipboard.writeText(quoteTxt.innerText);

    // Show the message
    messageEl.classList.add("active");

    // Remove the message after 2.5 seconds
    setTimeout(() => {
        messageEl.classList.remove("active");
    }, 2500);
});

// Twitter Share Function
twitterEl.addEventListener("click", () => {
    // Create a tweet link with the quote text
    let tweet = `https://twitter.com/intent/tweet?text=${quoteTxt.innerText}`;
    
    // Open a new window to share the tweet
    window.open(tweet, "_blank");
});

// Event Listeners
btnQuote.addEventListener("click", randomQuote);
speechEl.addEventListener("click", speechText);

// Generate a random quote on page load
randomQuote();
