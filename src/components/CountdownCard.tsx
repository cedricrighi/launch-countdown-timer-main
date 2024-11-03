import "../styles/CountdownCard.css";

interface countdownProps {
  number: number;
  flipCard: boolean;
  unit: string;
}

export default function CountdownCard({
  number,
  flipCard,
  unit,
}: countdownProps) {
  return (
    <div className="unit-card">
      <div className="number-card">
        <div className="left-dot dot" />
        <h2 className="number">{number >= 10 ? number : `0${number}`}</h2>
        <div className="right-dot dot" />
      </div>
      <div className="flip-card">
        <div className={`upper-card ${flipCard ? "upper-card-animation" : ""}`}>
          <div className="upper-left-dot dot" />
          <h2 className="upper-number">
            {number >= 10 ? number : `0${number}`}
          </h2>
          <div className="upper-right-dot dot" />
        </div>
        <div className={`lower-card ${flipCard ? "lower-card-animation" : ""}`}>
          <div className="lower-left-dot dot" />
          <h2 className="lower-number">
            {number >= 10 ? number : `0${number}`}
          </h2>
          <div className="lower-right-dot dot" />
        </div>
      </div>
      <p className="word">{unit}</p>
    </div>
  );
}
