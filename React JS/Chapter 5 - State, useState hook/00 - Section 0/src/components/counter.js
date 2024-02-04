import './counter.css'

function Counter(){
    let number = 0

    function handleClick(e){
        e.stopPropagation()
        console.log(number)
        number++;
    }

    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>   
    );
}

export default Counter;