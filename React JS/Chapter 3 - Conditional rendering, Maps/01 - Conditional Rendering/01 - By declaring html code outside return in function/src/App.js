import './App.css';
import Video from './components/Video';

function App() {
  let obj = {
    verifiedChannel: false,
    title: 'React JS tutorial',
    views: '999K',
    time: '1 year ago',
    channel: 'CodeByMateen',
  };
  return (
    <div className="App">
      <div style={{ backgroundColor: "cyan", color: "black", width: "54%"}}>Videos</div>
      <Video {...obj}/>
      <Video
       title="Node JS tutorial" 
       views="100K" 
       time="1 month ago"
       verifiedChannel={true}>
      </Video>
      <Video
        title="Mongo DB tutorial"
        views="1M"
        time="1 month ago"
        channel="CodeByMateen"
        verifiedChannel={false}>
       </Video>
    </div>
  );
}

export default App;
