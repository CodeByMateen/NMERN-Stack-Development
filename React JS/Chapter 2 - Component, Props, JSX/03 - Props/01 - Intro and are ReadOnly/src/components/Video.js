import './Video.css'

// Old Way, not preferable
// function Video(props) {
//   let bg = "bgStyle";
//   return (
//     <>
//       <img src="https://placebeard.it/320x160" alt="Random Img" />
 
//       <div className={bg} style={{ backgroundColor: "red", color: "white" }}>
//       {props.title}
//       </div>

//     </>
//   );
// }

// New Preferable way
function Video({title, bgColor}){
  // let bg = "bgStyle";
  // bgColor="blue" // it will turn the bgColor value to blue and the effect will be shown on videos as well
  return(
    <>
    
    <img src="https://placebeard.it/320x160" alt="Random Img" />
    <div className="" style={{ backgroundColor: bgColor, color: "white" }}>{title}</div>
    
    </>
  );
}

export default Video;
