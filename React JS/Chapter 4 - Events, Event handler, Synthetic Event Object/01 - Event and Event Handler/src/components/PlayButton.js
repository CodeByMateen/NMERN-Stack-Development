import './PlayButton.css'

function PlayButton({name, message}){

    function handleClick(){
        console.log(message)
    }

    return(
        <button onClick={handleClick}>{name}</button>
    );
}

export default PlayButton;