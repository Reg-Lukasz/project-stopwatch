import { useState, useEffect } from "react";
import styles from "./Stopwatch.module.scss";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hours = (`0${Math.floor((time / 360000) % 24)}`).slice(-2);
    const minutes = (`0${Math.floor((time / 6000) % 60)}`).slice(-2);
    const seconds = (`0${Math.floor((time / 100) % 60)}`).slice(-2);
    const miliseconds = (`0${time % 100}`).slice(-2);

    return `${hours}:${minutes}:${seconds}.${miliseconds}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.stopwatch}>
      {formatTime()}
      </div>
      <div>
        <button className={styles.button} onClick={handleStart}>Start</button>
        <button className={styles.button} onClick={handleStop}>Stop</button>
        <button className={styles.button} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;