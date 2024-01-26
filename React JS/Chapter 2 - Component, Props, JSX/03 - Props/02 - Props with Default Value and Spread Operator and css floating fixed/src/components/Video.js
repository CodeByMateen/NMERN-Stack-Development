import './Video.css'

function Video({title="Good Beard", bgColor}){
  return(
    <div style={{float: 'left', marginRight: '20px'}}>
    
    <img src="https://placebeard.it/320x160" alt="Random Img" />
    <div className="" style={{ backgroundColor: bgColor, color: "white", width: '320px'}}>{title}</div>
    
    </div>
  );
}

export default Video;