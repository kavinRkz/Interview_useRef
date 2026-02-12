import React, { useRef } from 'react';
import './style.css';
import StopWatch from './StopWatch';

export default function App() {
  const myRef = useRef('');
  const handleAdd = () => {
    console.log(myRef.current);
    if (myRef.current.value.length > 4) {
      // myRef.current.style.color = 'red';
      myRef.current.style.backgroundColor = 'blue';
      myRef.current.focus();
    }
  };
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleAdd}>Add</button>

      <div>
      <StopWatch/>
      </div>
    </div>
  );
}
