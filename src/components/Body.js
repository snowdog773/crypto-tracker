import React, { useState } from "react";
import axios from "axios";
import Graph from "./Graph";
const Body = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [loadedCurrencies, setLoadedCurrencies] = useState("BTCGBP");
  const [startTimestamp, setStartTimestamp] = useState(0);
  const [endTimestamp, setEndTimestamp] = useState(0);
  const getData = () =>
    axios
      .get(
        `http://127.0.0.1:6001/getData?currency=${loadedCurrencies}&start=${startTimestamp}&end=${endTimestamp}`
      )
      .then((response) => {
        setCurrencyData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  return (
    <>
      <p>The Body</p>
      <button onClick={() => getData()}>Get Data</button>
      <p>Currencies I am charting are 5 biggest by market capitalisation</p>
      <ol>
        <li>Bitcoin BTC</li>
        <li>Ethereum ETH</li>
        <li>Tether USDT</li>
        <li>Binance Coin BNB</li>
        <li>Ripple XRP</li>
      </ol>
      <p>The graph will be 1 unit of crypto vs value in GBP, USD or EUR</p>
      <p>{JSON.stringify(currencyData)}</p>
      <Graph />
    </>
  );
};

export default Body;
