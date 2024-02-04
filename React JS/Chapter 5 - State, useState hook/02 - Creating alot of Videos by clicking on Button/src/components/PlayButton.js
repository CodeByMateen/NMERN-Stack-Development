import { useState } from 'react';
import './PlayButton.css'

function PlayButton({children, message, onPlay, onPause}){

    const [isPlaying, setPlaying]=useState(true) // not preferred way, instead we'll use useState

    function handleClick(e){
        e.stopPropagation();

        if (isPlaying) onPlay();
        else onPause();

        setPlaying(!isPlaying)
    }

    return(
        <button onClick={handleClick}>{isPlaying ? 'Play ▶' : 'Pause ||'}</button>
    );
}

export default PlayButton;