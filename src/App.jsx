import React from "react";
import MarketOverview from "./components/MarketOverview";
import SpreadScanner from "./components/SpreadScanner";
import Heatmap from "./components/Heatmap";
import OrderbookView from "./components/OrderbookView";
import SignalsPanel from "./components/SignalsPanel";
import "./styles.css";

export default function App() {
  return (
    <div className="app-root">
      <h1 className="app-title">Polymarket Daily Dashboard</h1>
      <p className="app-sub">Dark UI — Mock data preview for Builder Program</p>

      <main className="app-container">
        {/* LEFT SIDE */}
        <div className="left-col">
          <div className="card">
            <MarketOverview />
          </div>

          <div className="card">
            <SpreadScanner />
            <Heatmap />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-col">
          <div className="card">
            <OrderbookView />
          </div>

          <div className="card">
            <SignalsPanel />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        Built with Premium UI v3 • Polymarket Builder Program
      </footer>
    </div>
  );
}
