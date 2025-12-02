import SpreadScanner from "./components/SpreadScanner";
import Heatmap from "./components/Heatmap";
import OrderbookView from "./components/OrderbookView";
import SignalsPanel from "./components/SignalsPanel";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="header">Polymarket Daily Dashboard</h1>

      <SpreadScanner />
      <Heatmap />
      <OrderbookView />
      <SignalsPanel />
    </div>
  );
}
