import { useEffect, useState } from 'react';

export function useBitcoinRates(currency) {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(res => res.json())
      .then(data => {
        setRate(data.bitcoin[currency.toLowerCase()]);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching rate:", error);
        setLoading(false);
      });
  }, [currency]);

  return { rate, loading };
}