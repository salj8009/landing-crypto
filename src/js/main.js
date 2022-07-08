const API = 'https://api.coincap.io/v2/assets';

const btc = document.getElementById('btc');
const eth = document.getElementById('eth');
const dot = document.getElementById('dot');
const bnb = document.getElementById('bnb');

const btcPrice = document.getElementById('btc-price');
const ethPrice = document.getElementById('eth-price');
const dotPrice = document.getElementById('dot-price');
const bnbPrice = document.getElementById('bnb-price');

const requestOptions = {
    method: 'GET'
  };

async function fetchData(urlApi) {
    const response = await fetch(urlApi , requestOptions);
    const data = await response.json();
    return data;
}


(async () => {
    const dataReciv = await fetchData(API);
    try {   
        for(dato of dataReciv.data)  {
          if(dato.id === "bitcoin" ){
            btc.innerText = dato.symbol;
            let pricebtc =parseFloat(dato.priceUsd);
            btcPrice.innerText = `US$ ${pricebtc}`;        
          }if( dato.id === "ethereum"){
            eth.innerText = dato.symbol;
            ethPrice.innerText =`US$ ${dato.priceUsd}`;
          }if(dato.id === "polkadot"){
            dot.innerText = dato.symbol;
            const pricedot = parseFloat(dato.priceUsd);
            dotPrice.innerText = `US$ ${pricedot}`;
          }if(dato.id === "binance-coin"){
            bnb.innerText = dato.symbol;
            bnbPrice.innerText = `US$ ${dato.priceUsd}`;
          }
          console.log(`${dato.id} - ${dato.symbol} - ${dato.priceUsd}`);  
        } 
         
        
    } catch (Error) {
    console.log('error');
    }
})();