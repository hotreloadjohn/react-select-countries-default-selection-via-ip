import CountrySelector from "./components/CountrySelector";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h2>Select Country list with default selection</h2>
      <h3>Testing Github Action with Github Pages</h3>
      <div className="select-country">
        <CountrySelector />
      </div>
    </div>
  );
}

export default App;
