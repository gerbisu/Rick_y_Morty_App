import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
// aqui
import characters from "./data.js";

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
