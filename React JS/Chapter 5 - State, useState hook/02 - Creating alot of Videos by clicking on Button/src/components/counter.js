import { useState } from 'react';
import './counter.css'

function Counter(){
    const [number, setNumber] = useState(0)

    function handleClick(e){
        e.stopPropagation()
        setNumber(number+1)
        
        // updater function

        // setTimeout(() => {
        //     setNumber(number=>number+1)
        //     setNumber(number=>number+1)
        //     setNumber(number=>number+1)
        // }, 2000);

        // setNumber(number=>number+1)
        // setNumber(number=>number+1)
        // setNumber(number=>number+1)
        // setNumber(number=>number+1)
        console.log(number)
    }

    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>   
    );
}

export default Counter;