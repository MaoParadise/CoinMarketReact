import React from 'react';
import Coinrow from '../CoinRow/CoinRow';

const titles = ['#', 'Name', 'Price', 'Price Change', 'Market Cap'];

const Tablecoin = ({coins, search }) => {

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        titles.map((title) => {
                            return <td key={title}>{title}</td>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    filteredCoins.map((coin, index) => (
                       <Coinrow key={index} coin={coin} index={index + 1}/>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Tablecoin;
