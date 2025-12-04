import signals from "../mock-data/mock_trades.json";

export default function SignalsPanel(){
  // Simple signals preview built from mock_trades.json
  return (
    <div className="card fade-in card-compact">
      <div className="title">📡 Signals Panel</div>
      <div className="subtitle">Mock trade signals (recent)</div>

      <div className="signal-list">
        {signals.map((s, i) => (
          <div className="signal" key={i}>
            <div>
              <div style={{fontWeight:700}}>{s.market}</div>
              <div className="kv">{s.type} • {s.timestamp}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontWeight:800}}>{s.price.toFixed(2)}</div>
              <div className="kv">{s.size} qty</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
