// src/components/SpreadScanner.jsx
import { useEffect, useState } from "react";
import markets from "../../mock-data/mock_data.json";

export default function SpreadScanner(){
  const [spreads, setSpreads] = useState([]);

  useEffect(()=>{
    if(!markets) return;
    const s = markets.map(m => {
      const spread = Math.abs((m.yes || 0) - (m.no || 0));
      return {...m, spread};
    });
    setSpreads(s);
  },[]);

  return (
    <div className="card fade-in">
      <div className="title">🧭 Spread Scanner</div>
      <div className="subtitle">Mock Data — YES/NO Market Spreads</div>

      <table className="table">
        <thead>
          <tr><th>Market</th><th>YES Price</th><th>NO Price</th><th>Spread</th></tr>
        </thead>
        <tbody>
          {spreads.map((item, idx) => {
            const colorClass = item.spread > 0.35 ? "value-orange" : item.spread > 0.2 ? "value-success" : "value-success";
            return (
              <tr key={idx}>
                <td>{item.market}</td>
                <td>{(item.yes || 0).toFixed(2)}</td>
                <td>{(item.no || 0).toFixed(2)}</td>
                <td className={colorClass} style={{fontWeight:700}}>
                  {item.spread.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
