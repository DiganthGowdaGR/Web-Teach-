import React, {useState, useEffect} from 'react';

function Timer(){
    const [count, setCount]=useState(0);

    useEffect(()=>{
        const timer=setInterval(()=> setCount((prev)=>prev+1),1000);

            return () => clearInterval(timer);
    },[]);
    return <p>seconds:{count}</p>
}

export default Timer;

