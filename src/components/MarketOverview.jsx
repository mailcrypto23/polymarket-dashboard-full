// src/components/MarketOverview.jsx
import { useEffect, useState } from "react";
import markets from "../mock-data/mock_data.json";

export default function MarketOverview(){
  const [data, setData] = useState([]);

  useEffect(()=> {
    // load mock snapshot
    setData(markets || []);
  }, []);

  return (
    <div className="card fade-in">
      <div className="title">📊 Market Overview</div>
      <div className="subtitle">Mock market snapshot — overview of top markets</div>

      <table className="table">
        <thead>
          <tr>
            <th>Market</th>
            <th>YES</th>
            <th>NO</th>
            <th>Volume</th>
            <th>Trend</th>
            <th>Liquidity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m, i) => (
            <tr key={i}>
              <td>{m.market}</td>
              <td>{m.yes?.toFixed(2)}</td>
              <td>{m.no?.toFixed(2)}</td>
              <td>{Number(m.volume).toLocaleString()}</td>
              <td style={{color: m.trend === "up" ? "var(--success)" : m.trend === "down" ? "var(--danger)" : "var(--muted)"}}>
                {m.trend}
              </td>
              <td>{m.liquidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
