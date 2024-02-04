import { useState } from "react";
import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import Counter from './components/counter';
import videosDB from "./data/data";

function App() {

  const [videos, setVideos] = useState(videosDB);

  return (
    <div className="App">
      <div>
      <button style={{marginTop: '10px'}} onClick={() => {
        const newVideos = Array.from({ length: 10 }, (_, index) => ({
          id: videos.length + index + 1,
          verifiedChannel: false,
          title: "Demo tutorial",
          views: "3M",
          time: "7 months ago",
          channel: "CodeByFaiz",
        }));
        setVideos(prevVideos => [...prevVideos, ...newVideos]);
      }}>Add Video</button>
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
        <Counter/>
      </div>

    </div>
  );
}

export default App;
