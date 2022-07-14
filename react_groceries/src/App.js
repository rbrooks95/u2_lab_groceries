import logo from "./logo.svg";
import "./App.css";
import items from "./items";
import Groceries from "./components/Groceries";

function App() {
  return (
    <div className="App">
      {items.map((data, i) => (
        <Groceries
          className="App"
          key={i}
          item={data.item}
          brand={data.brand}
          units={data.units}
          quantity={data.quantity}
          purchased={data.isPurchased}
        />
      ))}
    </div>
  );
}

export default App;
