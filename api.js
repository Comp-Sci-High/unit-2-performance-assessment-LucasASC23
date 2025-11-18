const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc
console.log("Welcome to Hazdad Joke Bot!");
console.log("Pick a joke category from the list below:");
console.log("Any", "Programming", "Misc", "Pun", "Spooky", "Christmas");


const choice = prompt("What type of joke do you want?: ");


let count = prompt("How many jokes do you want(1-5)? ");


console.log(`Fetching ${count} ${choice} joke(s)...`);


const url = `https://icanhazdadjoke.com/search?term=${choice}&limit=${count}`;


async function fetchJoke() {
      
    const response = await fetch(url, {
  headers: { 'Accept': 'application/json' }
});


 const data = await response.json();
 if (data.results.length > 0) {
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i].joke);
        }
    } else {
        console.log("No jokes found for that category!");
    }
}





fetchJoke();