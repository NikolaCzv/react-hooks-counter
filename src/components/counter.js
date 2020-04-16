import React, {useState} from 'react';

function Counter(){
    let initialState = 0

    const [count, setCount] = useState(initialState);

    const addThree = () => {
        for(let i = 0; i < 3; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return(
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={addThree}>+ 3</button>
        </div>
    );
} 

export default Counter;