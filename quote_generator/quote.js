let quote = document.getElementById('quote');
let person = document.getElementById('person');
let newquotebtn = document.getElementById('newquote');

const quotes = [{
    quote:'"hello sam"',
    person:'cymo'
},
{
    quote:'"hello java"',
    person:'nevabroke'
},
{
    quote:'"hello css"',
    person:'bosslady'
},
{
    quote:'"hello php"',
    person:'natie'
},
{
    quote:'"papa react"',
    person:'julie'
},
];

newquotebtn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});