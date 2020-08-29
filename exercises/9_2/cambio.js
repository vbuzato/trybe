const urlAPI = 'https://api.ratesapi.io/api/latest';

const fetchRates = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => printValues(data.rates))
}

const printValues = (rates) => {
  const ulRates = document.querySelector('.rates');
  ulRates.innerHTML = '';

  const ratesList = Object.keys(rates).sort();
  ratesList.forEach((eachRate) => {
    const div = document.createElement('div');
    div.className = 'child_rate';
    div.innerHTML = `<b>${eachRate}:</b> ${rates[eachRate]}`;
    ulRates.appendChild(div);
  })
  
}

const concatURLS = () => {
  const baseValue = document.querySelector('#base-coin').value;
  const newURL = `${urlAPI}?base=${baseValue}`;
  fetchRates(newURL)
}

const btSearch = document.querySelector('#bt-search');
btSearch.addEventListener('click', concatURLS);

const inputSearch = document.querySelector('#base-coin');
inputSearch.addEventListener('keyup', concatURLS);

