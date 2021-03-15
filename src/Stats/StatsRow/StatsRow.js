import React from 'react';
import './StatsRow.css';
import StockSVG from './Img/stock.svg';
import { db } from '../../Firebase/Firebase';

function StatsRow(props) {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;
  const buyStock = () => {
    console.log('BuyStock>>>>>', props.name);
    db.collection('myStocks')
      .where('ticker', '==', props.name)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);

        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            db.collection('myStocks')
              .doc(doc.id)
              .update({
                shares: (doc.data().shares += 1),
              });
            console.log(doc.id, '=>', doc.data());
          });
        } else {
          console.log('not available');
          db.collection('myStocks').add({
            ticker: props.name,
            shares: 1,
          });
        }
      });
  };
  return (
    <div className="row" onClick={buyStock}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.shares && props.shares + ' shares'}</p>
      </div>
      <div className="row__chart">
        <img src={StockSVG} height={16} alt="stock " />
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
