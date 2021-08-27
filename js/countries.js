const loadCountries = () =>{ 
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displaCountries(data))
}

loadCountries()
const displaCountries =  countries =>{

    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        
        const div = document.createElement('div');
        div.classList = 'conuntry';
        div.innerHTML =`       
         <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;

     


        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(h3);
        // div.appendChild(p);
        // countriesDiv.classList = 'conuntries'
        countriesDiv.appendChild(div);
    })
    // for(const country of countries){
        
    // }
    //  console.log(countries)
}


const loadCountryByName = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => conuntryDtails(data[0]))
}

const conuntryDtails = country => {
    const countrydiv = document.getElementById('country');
    countrydiv.innerHTML =`
    <h3>Name: ${country.name}</h3>
    <p>Capital: ${country.capital}<p>
    <img width="200px" src="${country.flag}">`
    console.log(country)
}
