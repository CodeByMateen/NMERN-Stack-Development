import "./App.css";

function App() {
  let name = "Hello, World!";
  let className = "App";
  return (
    <div className={className}>
      <div className="App-header">
        {name}
        <Demo></Demo>
      </div>
    </div> // Here, we're putting Demo in App-Header due to css done in by default react setup, if you include it outside the App-Header, it'll be attached but the msg: This is Demo will not be shown

    // <div>
    //   <div>
    //     Hi
    //   </div>
    //   <Demo></Demo>
    // </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className="App-header">This is Demo!</div>
    </div>
  );
}

export default App;
