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
          <p className="pm-sub">Luxury Gradient • Mock-data preview for Builder Program</p>
        </div>
      </header>

      <main className="pm-main">
        <section className="pm-col-left">
          <div className="pm-card">
            <MarketOverview />
          </div>

          <div className="pm-card">
            <SpreadScanner />
            <div style={{height: 18}} />
            <Heatmap />
          </div>
        </section>

        <aside className="pm-col-right">
          <div className="pm-card sticky">
            <OrderbookView />
          </div>

          <div className="pm-card">
            <SignalsPanel />
          </div>
        </aside>
      </main>

      <footer className="pm-footer">
        Built with Premium UI v4 — Polymarket Builder Program
      </footer>
    </div>
  );
}
