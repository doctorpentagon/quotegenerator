// https://type.fit/api/quotes 

import { offlinequote } from "./quote";

// while fetching something, it is best to use async function and await for 
// asynchronous processing of fetch and await for fetch response(important to wait for the fetch to give a response to be gotten before function is effected
// and using try catch for general error not to make api fetching errors affect the app function
let QuoteList = [];

function RandomAPI() {
    // we are chooseing random API instead of random numbers
    // the basis/brain of this function is 
    //QuoteList[number] = QuoteList[random API]
    // note that the API amount of quote is 1843, just use API.LENGTH
    //we are randomizing between 1 - 1644 quotes
    // all random API number = Math.random();
    // turn the range of number gotten through random to whole number with Math.floor
    const realAPI = Math.floor(Math.random() * QuoteList.length);
    console.log(realAPI) 
                // if offline through js object in quote.js;
                //         const realAPI = Math.floor(Math.random() * QuoteList.length);
                //          console.log(offlinequote)       

                
    //realAPI is the random number between 1 and 1643 that will be in QuoteList[any random number]
    //note that this quote has 2 things
        // the text-quote and author  
}
// 1. ASYNC Getting Quotes from API
async function GetQuote() {
    const QuoteAPI = 'https://type.fit/api/quotes'
    //2. try{} catch (){}
    try{
        // where what we want to fetch will be fetch(QuoteAPI) 
        // AWAIT is to make sure the API is fetched(response) before the function is run
        response = await fetch(QuoteAPI)
              
        // the response must after then be turn the response to json through a variable
        // an AWAIT must also be used
        const QuoteList = await response.json();
       // to ouput all the API
            // console.log(QuoteList)
        // to output eache one of theAPI, use array method
            // console.log(QuoteList[1]) to any specific number
        // to make the API output at random and also one by one use math function
        // setting a math function upward RandomQuote

    } 
    catch (error){
        // where error of fetch will be
        alert('Not able to fetch Quote')
    }
}

// Loading the function
GetQuote()
