import { useEffect, useState } from "react";
import mock from "../../mock-data/mock_data.json";

export default function Heatmap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mock);
  }, []);

  return (
    <div className="card">
      <h2 className="title">🔥 Liquidity & Spread Heatmap</h2>
      <p className="subtitle">Mock UI Preview — Market Liquidity</p>

      <div className="heatmap-grid">
        {data.map((mkt, i) => (
          <div
            key={i}
            className="heatbox"
            style={{
              background: `rgba(255, 0, 0, ${mkt.spread})`,
            }}
          >
            <span>{mkt.name}</span>
            <span className="small">Spread: {mkt.spread.toFixed(2)}</span>
            <span className="small">Vol: {mkt.volume}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
