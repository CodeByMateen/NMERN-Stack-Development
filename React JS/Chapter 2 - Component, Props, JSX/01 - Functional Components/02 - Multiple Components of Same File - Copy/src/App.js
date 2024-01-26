// import {Video} from './components/Video' // to only use Video
import {Video, Thumbnail} from './components/Video' // to use both 
// here, Video is acting as key as well as value i.e. both key-value pair and same is Thumbnail

function App() {
  return (
    <div>
      <div>
        This is App
        <Video></Video>
        <Thumbnail></Thumbnail>
      </div>
    </div>
  );
}

export default App;
