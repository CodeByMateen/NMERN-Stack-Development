import "./App.css";
import Video from "./components/Video";
import videos from './data/data'

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
    </div>
  );
}

export default App;
