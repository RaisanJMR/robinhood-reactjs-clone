import React, { useState, useEffect } from 'react';
import StatsRow from './StatsRow/StatsRow';
import axios from 'axios';
import './Stats.css';
import { db } from '../Firebase/Firebase';

const TOKEN = 'c133ap748v6vkcj175r0';
const BASE_URL = 'https://finnhub.io/api/v1/quote';
function Stats() {
  const [stockData, setstockData] = useState([]);
  const [myStocks, setmyStocks] = useState([]);
  const getMyStocks = () => {
    db.collection('myStocks').onSnapshot((snapshot) => {
      console.log(snapshot.docs);
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        console.log(doc.data());
        return promises.push(
          getStocksData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        console.log(tempData);
        setmyStocks(tempData);
      });
    });
  };
  function getStocksData(stock) {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error('Error', error.message);
      });
  }
  useEffect(() => {
    let tempStocksData = [];
    getMyStocks();
    const stocksList = [
      'AAPL',
      'MSFT',
      'TSLA',
      'FB',
      'BABA',
      'UBER',
      'DIS',
      'SBUX',
    ];

    // getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      return promises.push(
        getStocksData(stock).then((res) => {
          console.log(res);
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      console.log(tempStocksData);
      setstockData(tempStocksData);
    });
  }, []);
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {/* for current stocks */}
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats__lists">
          <p>List</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {/* stocks we can buy */}
            {stockData.map((stock) => {
              return (
                <StatsRow
                  key={stock.name}
                  name={stock.name}
                  openPrice={stock.o}
                  shares={stock.shares}
                  price={stock.c}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
