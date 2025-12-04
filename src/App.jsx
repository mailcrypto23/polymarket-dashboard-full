import React from "react";
import MarketOverview from "./components/MarketOverview";
import SpreadScanner from "./components/SpreadScanner";
import Heatmap from "./components/Heatmap";
import OrderbookView from "./components/OrderbookView";
import SignalsPanel from "./components/SignalsPanel";
import "./styles.css";

export default function App() {
  return (
    <div className="pm-root">
      <header className="pm-header">
        <div className="pm-header-inner">
          <h1 className="pm-title">Polymarket Daily Dashboard</h1>
          <p className="pm-sub">Luxury Gradient · Mock-data preview for Builder Program</p>
        </div>
      </header>

      <div className="pm-layout">
        {/* Left Column */}
        <div className="pm-column">
          <div className="pm-card">
            <MarketOverview />
          </div>

          <div className="pm-card">
            <SpreadScanner />
          </div>

          <div className="pm-card">
            <Heatmap />
          </div>
        </div>

        {/* Right Column */}
        <div className="pm-column pm-sticky">
          <div className="pm-card">
            <OrderbookView />
          </div>

          <div className="pm-card">
            <SignalsPanel />
          </div>
        </div>
      </div>

      <footer className="pm-footer">
        Built with Premium UI v4 · Polymarket Builder Program
      </footer>
    </div>
  );
}
