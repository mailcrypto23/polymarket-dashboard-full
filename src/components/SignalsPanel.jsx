// src/components/SignalsPanel.jsx
import { useEffect, useState } from "react";
import signals from "../mock-data/mock_trades.json";

export default function SignalsPanel(){
  const [data, setData] = useState([]);

  useEffect(()=> {
    setData(trades || []);
  }, []);

  // top 4 signals (mock)
  const signals = data.slice(0,4).map((t, i) => ({
    title: t.note || `${t.side} ${t.price}`,
    side: t.side,
    size: t.size
  }));

  return (
    <div className="card fade-in">
      <div className="title">🛰️ Signals Panel</div>
      <div className="subtitle">Mock trade signals — top recent moves</div>

      <div className="signal-list">
        {signals.map((s,i)=>(
          <div key={i} className="signal">
            <div style={{display:"flex",flexDirection:"column"}}>
              <strong style={{color: s.side === "BUY" ? "var(--accent-1)" : "var(--accent-2)"}}>{s.title}</strong>
              <span className="kv">Size: {s.size}</span>
            </div>
            <div style={{alignSelf:"center"}}>
              <button style={{
                background: s.side==="BUY" ? "linear-gradient(90deg,var(--accent-1),var(--accent-2))" : "transparent",
                color: s.side==="BUY" ? "#07101a" : "var(--muted)",
                padding:"8px 12px",
                borderRadius:10,
                border:"none",
                cursor:"pointer",
                fontWeight:700
              }}>{s.side}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
