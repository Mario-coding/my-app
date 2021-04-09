import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createIncrementalProgram } from 'typescript';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const increment: any = useRef(null);


const handleStart = () => {
  setIsActive(true)
  increment.current = setInterval(() => {
  setTimer((timer) => timer + 1)
  }, 10)
}

const handlePause = () => {
  setIsActive(false)
  clearInterval(increment.current)
}

const handleResume = () => {
  setIsActive(true)
  increment.current = setInterval(() => {
  setTimer((timer) => timer + 1)
  }, 10)
}

const handleReset = () => {
  clearInterval(increment.current);
  setIsActive(true)
  setTimer(0);
}

const formatTime = () => {
  const centiSeconds = `0${timer % 100}`.slice(-2)
  const seconds = `0${Math.floor(timer / 100) % 60}`.slice(-2)
  const minutes = `0${Math.floor(timer / 6000) % 60}`.slice(-2)

  return `${minutes} : ${seconds} : ${centiSeconds}`
}

const renderingBtn = () => {
  if (!isActive && timer === 0) {
    return (
      <button onClick={handleStart}>Start</button>
    )
  } else if (!isActive && timer > 0) {
    return (
      <>
      <button onClick={handleResume}>Resume</button>
      <button onClick={handleReset}>Reset</button>
      </>
    )
  }
  return (
    <>
    <button onClick={handlePause}>Pause</button>
    </>
  )
}

return (
  <div className="App">
    <div className="Stopwatch">
      <div className="Stopwatch-header">Stopwatch</div>
      <div className="Stopwatch-display">
        {formatTime()}
      </div>
      {renderingBtn()}
    </div>
  </div>
)

}

export default App;
