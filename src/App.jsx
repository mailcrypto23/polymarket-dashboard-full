import SpreadScanner from "./components/SpreadScanner";
import Heatmap from "./components/Heatmap";
import OrderbookView from "./components/OrderbookView";
import SignalsPanel from "./components/SignalsPanel";

export default function App() {
  return (
    <div>
      <SpreadScanner />
      <Heatmap />
      <OrderbookView />
      <SignalsPanel />
    </div>
  );
}
