import logo from "./logo.svg";
import "./App.css";
import items from "./items";
import Groceries from "./components/Groceries";

function App() {
  let app = "App";
  return (
    <div className={app}>
      {items.map((data, i) => (
        <Groceries
          key={i}
          item={data.item}
          brand={data.brand}
          units={data.units}
          quantity={data.quantity}
          purchased={data.isPurchased}
        />
      ))}
      {items.map((data, i) => (
        <Groceries
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
