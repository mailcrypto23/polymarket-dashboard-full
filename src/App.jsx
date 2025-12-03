import SpreadScanner from "./components/SpreadScanner";
import Heatmap from "./components/Heatmap";
import OrderbookView from "./components/OrderbookView";
import SignalsPanel from "./components/SignalsPanel";
import "./styles.css?v=7";

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
/* vercel css purge */
.vercel-refresh { display:none; }
