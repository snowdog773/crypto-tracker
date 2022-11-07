import React from "react";
import axios from "axios";
import Graph from "./Graph";
const Body = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const getData = () =>
    axios
      .get(
        `https://marketdata.tradermade.com/api/v1/live?currency=GBPBTC&api_key=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);

        console.log(response.data.quotes[0]);
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
        <li>BNB BNB</li>
        <li>USD Coin</li>
      </ol>
      <Graph />
    </>
  );
};

export default Body;
