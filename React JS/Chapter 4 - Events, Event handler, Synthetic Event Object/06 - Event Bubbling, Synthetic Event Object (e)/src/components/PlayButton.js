import './PlayButton.css'

function PlayButton({children, message, onPlay, onPause}){

    let status=false; // not preferred way, instead we'll use useState

    function handleClick(e){
        // console.log(e)
        // e.preventDefault();
        e.stopPropagation();

        if (status) onPause();
        else onPlay();

        status=!status
    }

    return(
        <button onClick={handleClick}>{children} {status ? '▶' : '||'}</button>
    );
}

export default PlayButton;