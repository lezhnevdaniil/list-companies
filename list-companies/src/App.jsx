import Tables from "./components/Tables/Tables";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Список компаний</h1>
      </header>
      <div className="content">
        <Tables />
      </div>
    </div>
  );
}

export default App;
