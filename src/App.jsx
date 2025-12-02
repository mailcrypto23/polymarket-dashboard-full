import { useState } from "react";
import Heatmap from "./components/Heatmap";
import OrderbookView from "./components/OrderbookView";
import SpreadScanner from "./components/SpreadScanner";
import SignalsPanel from "./components/SignalsPanel";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <h1>Polymarket Daily Dashboard</h1>

      <SpreadScanner />
      <Heatmap />
      <OrderbookView />
      <SignalsPanel />
    </div>
  );
}

export default App;
