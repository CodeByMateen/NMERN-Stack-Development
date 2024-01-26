import './Video.css';

function Video({title,channel="CodeByMateen",views,time}) {

  const imageUrl = `https://source.unsplash.com/160x90/?programming?random=${Math.random() * 1000}`;

  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src={imageUrl} alt="Img Placeholder"/>
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;
