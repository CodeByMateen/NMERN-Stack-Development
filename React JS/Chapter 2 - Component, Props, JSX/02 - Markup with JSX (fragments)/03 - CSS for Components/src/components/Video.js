import './Video.css'

function Video() {
  let name = "Beard";
  let bg = "bgStyle";
  return (
    <>
      <img src="https://placebeard.it/320x160" alt="Random Img" />

      {/* Inline Way */}      
      {/* <div className={bg} style={{ backgroundColor: "red", color: "white" }}>
        This is Title of {name}
      </div> */}

      {/* External Way */}      
      <div className={bg}>
        This is Title of {name}
      </div>
    </>
  );
}

export default Video;
