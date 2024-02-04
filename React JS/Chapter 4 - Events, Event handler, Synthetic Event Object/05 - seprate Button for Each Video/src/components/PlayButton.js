import './PlayButton.css'

function PlayButton({children, message, onPlay, onPause}){

    let status=false; // not preferred way

    function handleClick(){
        if (status) onPause();
        else onPlay();

        status=!status
    }

    return(
        <button onClick={handleClick}>{children} {status ? '▶' : '||'}</button>
    );
}

export default PlayButton;