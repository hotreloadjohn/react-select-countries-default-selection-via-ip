import CountrySelector from "./components/CountrySelector";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h2>Select Country list with default selection based on ip</h2>
      <div className="select-country">
        <CountrySelector />
      </div>
    </div>
  );
}

export default App;
