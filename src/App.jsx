import SpreadScanner from "./components/SpreadScanner";
import Heatmap from "./components/Heatmap";
import OrderbookView from "./components/OrderbookView";
import SignalsPanel from "./components/SignalsPanel";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1>Polymarket Daily Dashboard</h1>
      <p className="subtitle">Live demo mode using mock data</p>

      <SpreadScanner />
      <Heatmap />
      <OrderbookView />
      <SignalsPanel />
    </div>
  );
}
