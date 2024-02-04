import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import Counter from "./components/counter";
import videos from "./data/data";

function App() {
  return (
    <div className="App" onClick={()=>console.log("App Called")}>
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

      <div style={{clear: 'both'}}>
        <Counter></Counter>
      </div>

    </div>
  );
}

export default App;
