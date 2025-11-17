const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc
let requestURL="https://api.openai.com/v1/responses"
let question=prompt("What would you like?")
async function chatgpt(promptData){
    const options={
    
    method:'Post',
    headers:{
        Authorization:'Bearer '+apiKey,
        "Content-Type":'application/json'
    },
    body:JSON.stringify(promptData),
    model:"gpt-4.1",
    input:question
}

const response= await fetch("https://api.openai.com/v1/responses", options)
const data=await response.json()
console.log(data.output[0].content[0].text)
return data
}
chatgpt({
    model:"gpt-4.1",
    input:question
})
