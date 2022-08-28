const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
     const countryContainer = document.getElementById('countries-container')
     
     countries.forEach(country =>{
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
      
        `
        countryContainer.appendChild(countryDiv);
     })
     
}

const loadCountryDetail = (code) =>{
    // console.log('get country detail', code)

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country =>{
        // console.log(country)
        const countryDetail = document.getElementById('country-detail');
        const currencyArray = Object.values(country.currencies)
         console.log(currencyArray)
        // console.log(currencyArray[0].name)
        countryDetail.innerHTML =`
        <h2>Details: ${country.name.common}</h2>
        <img src="${country.flags.png}" alt="">
        <p>Currencies: ${currencyArray[0].name}</p>
        
        `
}
loadCountries();

{/* <img src="${country.flags.png}" alt="">
        <h4>Maps: ${country.maps.googleMaps} </h4> */}
        