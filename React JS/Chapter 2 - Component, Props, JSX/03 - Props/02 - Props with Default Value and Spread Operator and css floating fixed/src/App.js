import Video from "./components/Video";
function App() {
  const spreadObject = { // Taking common code aside and it'll be used as spread operator
    bgColor: "violet",
    title: "Beard Special 25",
  };

  return (
    <div>
      <div>
        <b>This is App</b>
      </div>
      <Video bgColor="red" />
      <Video {...spreadObject} /> {/* This is spread operator and we can use it to to destructure object */}
      <Video bgColor="cyan" title="Beard 2" />
      <Video bgColor="green" title="Beard 3" />
    </div>
  );
}

export default App;
