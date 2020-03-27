import React,{ useState, useEffect } from 'react'

function Example(props) {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title = `clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
        </div>
    );
}

export default Example;

