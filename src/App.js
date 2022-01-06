import './App.css';

// in the future put in a custom hook 
import { useEffect, useState } from 'react'
import axios from 'axios';
import Tablecoin from './components/TableCoin/TableCoin';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      console.log(res.data);
      setCoins(res.data);
    }
  )}

  useEffect(() => {
      getData();
    }, [])

  return (
    <div className="container">
      <div className="row">
        <h1>Coin Market</h1>
        
        <input
          type="text"
          placeholder='Search a Coin'
          className='form-control bg-dark text-light border-0 mt-4 text-center'
          onChange={e => setSearch(e.target.value)}
        />

        <Tablecoin coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
