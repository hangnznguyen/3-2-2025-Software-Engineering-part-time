import { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    // Fetch Bitcoin price when currency changes
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(response => response.json())
      .then(data => {
        setPrice(data.bitcoin[currency.toLowerCase()]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [currency]); // Run again when currency changes

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {price !== null && (
        <p>1 Bitcoin = {price} {currency}</p>
      )}
    </div>
  );
}

export default BitcoinRates;
