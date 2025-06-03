import { useState } from 'react';
import {useBitcoinRates} from './useBitcoinRates';  // Import the custom hook


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, loading } = useBitcoinRates(currency);  // Use object destructuring

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
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>1 Bitcoin = {rate} {currency}</p>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;