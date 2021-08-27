const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote= data =>{
    console.log(data)
    const quoteElement= document.getElementById('quote')
    quoteElement.innerText = data.quote
} 


// const displayQuote2= data =>{
//     console.log(data)
//     const quoteElement= document.getElementsByClassName('quote')
//     quoteElement.innerText = data.quote
// } 
