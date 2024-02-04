import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "cyan", color: "black", width: "54%" }}>
        Videos
      </div>

      <div>
        {videos.map((iterator) => (
          <Video
            key={iterator.id}
            channel={iterator.channel}
            title={iterator.title}
            views={iterator.views}
            time={iterator.time}
            verifiedChannel={iterator.verifiedChannel}
          ></Video>
        ))}
      </div>

      <div style={{ clear: "both", marginTop: "14em" }}>
        <PlayButton
          onPlay={() => console.log("Playy 😁")}
          onPause={() => console.log("Pause 😌")}>
          Click Me Bro
        </PlayButton>
        {/*<PlayButton message="Pause-Btn MSG" onClick={() => alert("Pausee 😐")}>
          Pause
        </PlayButton>*/}
      </div>
    </div>
  );
}

export default App;
