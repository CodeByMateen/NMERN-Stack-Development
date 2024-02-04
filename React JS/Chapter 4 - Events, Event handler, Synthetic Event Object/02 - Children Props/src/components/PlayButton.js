import './PlayButton.css'

function PlayButton({children, message}){

    function handleClick(){
        console.log(message)
    }

    return(
        <button onClick={handleClick}>{children}</button>
    );
}

export default PlayButton;