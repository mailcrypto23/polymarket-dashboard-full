// src/components/Heatmap.jsx
import { useEffect, useState } from "react";
import spreads from "../mock-data/mock_spread_history.json"; 
// IMPORTANT: Correct path (../mock-data)

export default function Heatmap() {
  const [spreadData, setSpreadData] = useState([]);

  useEffect(() => {
    setSpreadData(spreads || []);
  }, []);

  // function to color cells
  const colorFor = (val = 0) => {
    if (val >= 0.4) return "linear-gradient(180deg,#ffb86b,#ff9b5c)";
    if (val >= 0.25) return "linear-gradient(180deg,#ffd98a,#ffc07a)";
    return "linear-gradient(180deg,#7fe3ff,#6ee7ff)";
  };

  return (
    <div className="card fade-in">
      <div className="title">🔥 Spread & Liquidity Heatmap</div>
      <div className="subtitle">Mock Data — Spread Volatility</div>

      <div className="heat-grid" style={{ marginTop: "12px" }}>
        {spreadData.map((m, i) => (
          <div
            className="heat-cell"
            key={i}
            style={{
              background: colorFor(m.spread),
              boxShadow: "inset 0 -6px 18px rgba(0,0,0,0.25)",
              padding: "4px",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 700, opacity: 0.95 }}>
              {m.market}
            </div>
            <div style={{ fontSize: "12px", opacity: 0.9 }}>
              {(m.spread || 0).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
