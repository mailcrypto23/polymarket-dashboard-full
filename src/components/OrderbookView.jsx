import { useEffect, useState } from "react";
import data from "../../mock-data/mock_orderbook.json";

export default function OrderbookView() {
  const [orderbook, setOrderbook] = useState(null);

  useEffect(() => {
    setOrderbook(data);
  }, []);

  if (!orderbook) return <p>Loading orderbook...</p>;

  return (
    <div className="card">
      <h2 className="title">📉 Orderbook Depth</h2>
      <p className="subtitle">Mock CLOB Preview (L1–L5)</p>

      <div className="orderbook">
        <div>
          <h3>Bids</h3>
          {orderbook.bids.map((b, i) => (
            <div key={i} className="row green">
              <span>{b.price.toFixed(2)}</span>
              <span>{b.size}</span>
            </div>
          ))}
        </div>

        <div>
          <h3>Asks</h3>
          {orderbook.asks.map((a, i) => (
            <div key={i} className="row red">
              <span>{a.price.toFixed(2)}</span>
              <span>{a.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
