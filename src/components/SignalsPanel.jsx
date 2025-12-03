// src/components/SignalsPanel.jsx

import { useEffect, useState } from "react";
import signals from "../mock-data/mock_trades.json";   // ✅ Correct path

export default function SignalsPanel() {
  const [tradeSignals, setTradeSignals] = useState([]);

  useEffect(() => {
    setTradeSignals(signals || []);
  }, []);

  return (
    <div className="card fade-in">
      <div className="title">📡 Recent Trade Signals</div>
      <div className="subtitle">Mock Trades — Buy/Sell Activity</div>

      <div className="signal-list">
        {tradeSignals.map((s, i) => (
          <div key={i} className="signal">
            <span style={{ fontWeight: 600 }}>
              {s.market}
            </span>

            <span className={s.type === "buy" ? "value-success" : "value-danger"}>
              {s.type.toUpperCase()} @ {(s.price || 0).toFixed(2)}
            </span>

            <span className="kv">
              {s.size} units
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
