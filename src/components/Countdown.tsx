import { useState, useEffect } from "react";
import CountdownCard from "./CountdownCard";
import "../styles/Countdown.css";

export default function Countdown() {
  //const [countdown, setCountdown] = useState<number>(1209600);
  const [countdown, setCountdown] = useState<number>(1209543);
  const [prevCountdown, setPrevCountdown] = useState<number>(1209542);
  const [flipMinutes, setFlipMinutes] = useState<boolean>(false);
  //const [flipHours, setFlipHours] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.floor(countdown / 60) !== Math.floor(prevCountdown / 60)) {
        setFlipMinutes(true);
      } else {
        setFlipMinutes(false);
      }
      setPrevCountdown((prevSeconds) => prevSeconds - 1);
      setCountdown((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, prevCountdown]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(countdown);

  return (
    <article className="countdown">
      <CountdownCard
        number={days}
        flipCard={false}
        unit={days >= 2 ? "days" : "day"}
      />
      <CountdownCard
        number={hours}
        flipCard={false}
        unit={hours >= 2 ? "hours" : "hour"}
      />
      <CountdownCard
        number={minutes}
        flipCard={flipMinutes}
        unit={minutes >= 2 ? "minutes" : "minute"}
      />
      <CountdownCard
        number={seconds}
        flipCard={true}
        unit={seconds >= 2 ? "seconds" : "second"}
      />
    </article>
  );
}
