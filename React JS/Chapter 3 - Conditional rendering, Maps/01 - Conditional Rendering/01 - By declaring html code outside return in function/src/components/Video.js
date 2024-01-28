import './Video.css';

function Video({title, channel="CodeByMateen", views, time, verifiedChannel}) {

  let channelJSX;

  if(verifiedChannel===true){
    channelJSX = <div className="channel">{channel} ✅</div>
  }
  else{
    channelJSX = <div className="channel">{channel}</div>
  }

  
  
  const imageUrl = `https://source.unsplash.com/160x90/?programming?random=${Math.random() * 1000}`;

  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src={imageUrl} alt="Img Placeholder"/>
      </div>
      <div className="title">{title}</div>
      {channelJSX}
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;
