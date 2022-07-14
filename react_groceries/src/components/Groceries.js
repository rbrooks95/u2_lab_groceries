//import useState from "react";
import { useState } from "react";

const Groceries = ({ item, brand, units, quantity, purchased, name }) => {
  const [purchase, setPurchase] = useState(purchased);

  const change = () => {
    setPurchase(!purchase);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h2>{brand} </h2>
      <h3>{item}</h3>
      <h4>Units: {units}</h4>
      <h5>Quantity: {quantity}</h5>
      <input type="button" onClick={change} value="Remove" />
      {purchase ? <h3>Is Purchased</h3> : ""}
    </div>
  );
};

export default Groceries;
