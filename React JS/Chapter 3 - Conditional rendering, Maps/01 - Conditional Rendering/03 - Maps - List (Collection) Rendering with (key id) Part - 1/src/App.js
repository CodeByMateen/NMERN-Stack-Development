import "./App.css";
import Video from "./components/Video";

function App() {
  let videos = [
    {
      id: 1,
      verifiedChannel: false,
      title: "React JS tutorial",
      views: "999K",
      time: "1 year ago",
      channel: "CodeByMateen",
    },
    {
      id: 2,
      verifiedChannel: true,
      title: "Node JS tutorial",
      views: "100K",
      time: "1 month ago",
      channel: "CodeByMateen",
    },
    {
      id: 3,
      verifiedChannel: false,
      title: "Mongo DB tutorial",
      views: "1M",
      time: "1 month ago",
      channel: "CodeByMateen",
    },
  ];

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
