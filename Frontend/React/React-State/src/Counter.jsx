import { useState } from "react"

export default function Counter(){
    let [count, setCount] = useState(0);
    
    function IncCounte() {
        setCount(count +1);
        console.log(count);
        
    }
    function decCounte() {
        setCount(count -1);
        console.log(count);
        
    }
    
    return (
        <>
        <div>
            <h3>Count = {count}</h3>
            <button onClick={IncCounte}>Increase Count</button>
            <button onClick={decCounte}>decrease Count</button>
        </div>
        </>
    )
}