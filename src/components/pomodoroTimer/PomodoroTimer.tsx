import React from "react";
import { useState } from "react";
import './pomodoroTimer.css'

export default function PomodoroTimer () {
    const [ time, setTime ] = useState(1500)

    function secondsToMinutes(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <div className="pomodoro-timer-class">

            <div className="pomodoro-clock">{secondsToMinutes(time)}</div>
            
            <div className="pomodoro-button-area">
                <div className="pomodoro-backward-button">
                    <i className="fa fa-backward"></i>
                </div>
                <div className="pomodoro-play-pause-button">
                    <i className="fa fa-play"></i>
                </div>
                <div className="pomodoro-forward-button">
                    <i className="fa fa-forward"></i>
                </div>
            </div>
            
        </div>
    )
}

