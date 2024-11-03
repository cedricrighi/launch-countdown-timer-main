import Countdown from "./components/Countdown";
import "./styles/App.css";

function App() {
  return (
    <section className="card">
      <h3 className="launch-title">WE'RE LAUNCHING SOON</h3>
      <Countdown />
    </section>
  );
}

export default App;
