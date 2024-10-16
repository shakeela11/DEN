const quotes = [
    { quote: "The good life is a process, not a state of being. It is a direction, not a destination." , author: "Carl Rogers" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { quote: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    // Corrected this line by removing the template literal syntax for 'quote'
    document.getElementById('quote').innerText = '"' + selectedQuote.quote + '"';
    
    // Corrected this line by adding string concatenation for 'author'
    document.getElementById('author').innerText = "- " + selectedQuote.author;
}
