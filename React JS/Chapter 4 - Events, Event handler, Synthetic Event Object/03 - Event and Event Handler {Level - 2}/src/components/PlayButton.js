import './PlayButton.css'

function PlayButton({children, message, onClick}){

    function handleClick(){
        onClick();
        // console.log(message)
    }

    return(
        <button onClick={handleClick}>{children}</button>
    );
}

export default PlayButton;