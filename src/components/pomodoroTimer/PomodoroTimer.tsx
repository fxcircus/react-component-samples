import React from "react";
import './pomodoroTimer.css'

export default function PomodoroTimer () {
  return (
    <div className="pomodoro-timer-class">
      <div className="pomodoro-clock">25:00</div>
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

