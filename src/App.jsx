import SpreadScanner from "./components/SpreadScanner";
import Heatmap from "./components/Heatmap";
import OrderbookView from "./components/OrderbookView";
import SignalsPanel from "./components/SignalsPanel";
import MarketOverview from "./components/MarketOverview";

export default function App() {
  return (
    <div className="container">
      <h1 className="header">Polymarket Daily Dashboard</h1>

      <MarketOverview />
      <SpreadScanner />
      <Heatmap />
      <OrderbookView />
      <SignalsPanel />
    </div>
  );
}
