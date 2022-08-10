import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/primera-pagina">Primera pagina</Link> |{" "}
      <Link to="/segunda-pagina">Segunda pagina</Link>
    </div>
  );
}

export default App;
