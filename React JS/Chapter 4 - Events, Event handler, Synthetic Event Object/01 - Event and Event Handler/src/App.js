import "./App.css";
import PlayButton from "./components/PlayButton";
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
      
      <div style={{clear: 'both', marginTop: '14em'}}>
      <PlayButton name='Play' message="Play-Btn MSG" />
      <PlayButton name='Pause' message="Pause-Btn MSG" />
      </div>

    </div>
  );
}

export default App;
