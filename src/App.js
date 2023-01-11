/* eslint-disable react/react-in-jsx-scope */
import logo from "./logo.svg";
import "./App.css";

const url = "http://dr.dk";
function App() {
  return (
    <div className="App">
      <div
        dangerouslySetInnerHTML={{
          __html: "<script>alert('evil')</script>hello world",
        }}
      ></div>
      ;
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
