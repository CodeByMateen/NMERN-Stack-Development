import './PlayButton.css'

function PlayButton({children, message, onPlay, onPause}){

    let isPlaying=false; // not preferred way, instead we'll use useState

    function handleClick(e){
        e.stopPropagation();

        if (isPlaying) onPause();
        else onPlay();

        isPlaying=!isPlaying
    }

    return(
        <button onClick={handleClick}>{isPlaying ? 'Play ▶' : 'Pause ||'}</button>
    );
}

export default PlayButton;