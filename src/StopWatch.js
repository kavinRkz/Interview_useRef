const StopWatch =()=>{

    const myRef = useRef(null);


    return(<><div>
        <p> {timmer}</p>
        <button onClick={StartTimer}> Start Time</button>
        <button onClick={StopTimer}> Stop Time</button>
        <button onClick={ResetTimer}> Reset Time</button>
        </div></>)
}

export default StopWatch;