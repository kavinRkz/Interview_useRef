import { useRef, useState } from "react";
const StopWatch =()=>{
const [timmer,setTimmer] = useState(0);
    const myRef = useRef(null);

    const StartTimer=()=>{
       myRef.current = setInterval(()=>{
            setTimmer((prev)=> prev + 1)
        },1000)
        
    }
    const StopTimer =()=>{
        clearInterval(myRef.current)
    }
    const ResetTimer =() =>{
        StopTimer();
        setTimmer(0)
    }

    return(<><div>
        <p> {timmer}</p>
        <button onClick={StartTimer}> Start Time</button>
        <button onClick={StopTimer}> Stop Time</button>
        <button onClick={ResetTimer}> Reset Time</button>
        </div></>)
}

export default StopWatch;