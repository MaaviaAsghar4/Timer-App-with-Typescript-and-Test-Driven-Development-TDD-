import React, { useState } from "react";
import "./Timer.css";
import TimerButton from "./TimerButton";

const Timer: React.FC<{}> = () => {
  let [isOn, setOn] = useState<boolean>(false);
  let [seconds, setSeconds] = useState<number>(0);
  let [minutes, setminutes] = useState<number>(0);
  let [interval, setIntervention] = useState<any>();

  const timer = () => {
    setSeconds(++seconds);
    if (seconds > 59) {
      setminutes(++minutes);
      setSeconds(0);
    }
  };
  const startTimer = () => {
    setOn(true);
    setIntervention((interval = setInterval(timer, 1000)));
  };

  const stopTimer = () => {
    setIntervention(clearInterval(interval));
    setOn(false);
  };

  const resetTimer = () => {
    setOn(false);
    setIntervention(clearInterval(interval));
    setSeconds(0);
    setminutes(0);
  };
  return (
    <div className="timer-container">
      <div className="time-display">
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span> {seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="timerButton-container">
        <TimerButton
          buttonAction={startTimer}
          buttonValue={"Start"}
          isOn={isOn}
        />
        <TimerButton
          buttonAction={stopTimer}
          buttonValue={"Stop"}
          isOn={false}
        />
        <TimerButton
          buttonAction={resetTimer}
          buttonValue={"Reset"}
          isOn={false}
        />
      </div>
    </div>
  );
};

export default Timer;
