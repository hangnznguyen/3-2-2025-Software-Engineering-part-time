import { useEffect, useState } from 'react';

export default function BitcoinRates() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => setRate(data.bpi.USD.rate));
  }, []);

  return (
    <div>
      <h1>Bitcoin Rate</h1>
      <p>Current USD Rate: {rate ? `$${rate}` : "Loading..."}</p>
    </div>
  );
}
