import React from "react";

const BIDS = [0.48,0.47,0.46,0.45,0.44];
const QTY = [1200,900,800,700,600];
const ASKS = [0.52,0.53,0.54,0.55,0.56];
const ASK_Q = [1100,950,870,790,680];

export default function OrderbookView() {
  return (
    <div>
      <h2 className="sec-title small"><span className="emoji">📘</span> Orderbook Depth</h2>
      <p className="muted">Mock CLOB Depth — L1–L5</p>

      <div className="orderbook-grid">
        <div className="column">
          <h4 className="col-title">Bids (Buyers)</h4>
          {BIDS.map((b,i) => <div key={i} className="depth-row"><span className="price green">{b.toFixed(2)}</span></div>)}
        </div>

        <div className="column center-col">
          {QTY.map((q,i) => <div key={i} className="depth-qty">{q}</div>)}
        </div>

        <div className="column">
          <h4 className="col-title">Asks (Sellers)</h4>
          {ASKS.map((a,i) => <div key={i} className="depth-row"><span className="price red">{a.toFixed(2)}</span></div>)}
        </div>

        <div className="column right-col">
          {ASK_Q.map((q,i) => <div key={i} className="depth-qty right">{q}</div>)}
        </div>
      </div>
    </div>
  );
}
