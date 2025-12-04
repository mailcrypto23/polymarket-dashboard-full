import React from 'react'

const SIGS = [
  { title: 'BTC > $100k?', side: 'buy', time: '2025-12-01T10:15:00Z', price: 0.48, qty: 150 },
  { title: 'ETH Flip BTC?', side: 'sell', time: '2025-12-01T11:20:00Z', price: 0.32, qty: 200 }
]

export default function SignalsPanel(){
  return (
    <div>
      <h2 className="section-title">📡 Signals Panel</h2>
      <p className="muted">Mock trade signals (recent)</p>

      <div className="signals-list">
        {SIGS.map((s,i) => (
          <div className="signal-card" key={i}>
            <div className="signal-left">
              <div className="signal-title">{s.title}</div>
              <div className="signal-sub muted">{s.side} • {s.time}</div>
            </div>
            <div className="signal-right">
              <div className="signal-price">{s.price.toFixed(2)}</div>
              <div className="muted small">{s.qty} qty</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
