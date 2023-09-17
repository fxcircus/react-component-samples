import React from "react";
import { useState, useEffect  } from "react";
import './pomodoroTimer.css'

export default function PomodoroTimer () {
    const [ time, setTime ] = useState(1500)
    const [ isCounting, setIsCounting ] = useState(false)

    const secondsToMinutes = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    const resetTimer = (interval) => {
        setIsCounting(false)
        setTime(interval)
        return interval
    }

    const toggleCountdown = () => {
        setIsCounting(!isCounting); // Toggle the countdown
    };
    
    useEffect(() => {
        let intervalId;
    
        if (isCounting) {
          intervalId = setInterval(() => {
            if (time <= 0) {
              clearInterval(intervalId);
              setIsCounting(false);
            } else {
              setTime(time - 1);
            }
          }, 1000);
        } else {
          clearInterval(intervalId);
        }
    
        return () => clearInterval(intervalId);
      }, [isCounting, time]);



    return (
        <div className="pomodoro-timer-class">

            <div className="pomodoro-clock">{secondsToMinutes(time)}</div>
            
            <div className="pomodoro-button-area">
                <button className="pomodoro-backward-button" onClick={(e) => {resetTimer(1500)}} >
                    <i className="fa fa-backward"></i>
                </button>
                <button className="pomodoro-play-pause-button" onClick={toggleCountdown}>
                    { isCounting ? (
                        <i className="fa fa-pause"></i>
                    ): (
                        <i className="fa fa-play"></i>
                    )}
                </button>
                <button className="pomodoro-forward-button">
                    <i className="fa fa-forward"></i>
                </button>
            </div>

        </div>
    )
}
