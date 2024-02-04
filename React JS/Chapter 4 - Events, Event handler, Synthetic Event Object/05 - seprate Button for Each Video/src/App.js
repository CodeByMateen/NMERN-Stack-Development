import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "cyan", color: "black", width: "740px" }}>
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
          >

            <PlayButton
              onPlay={() => console.log("Playing", iterator.title)}
              onPause={() => console.log("Paused", iterator.title)}>
              Click Me Bro
            </PlayButton>

          </Video>
        ))}
      </div>
    </div>
  );
}

export default App;
