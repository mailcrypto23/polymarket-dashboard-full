import { useEffect, useState } from "react";
import mockSpreads from "../mock-data/mock_spread_history.json";

export default function SpreadScanner() {
  const [spreads, setSpreads] = useState([]);

  useEffect(() => {
    setSpreads(mockSpreads);
  }, []);

  return (
    <div className="card">
      <h2 className="title">📊 Spread Scanner</h2>
      <p className="subtitle">Mock Data — YES/NO Market Spreads</p>

      <table className="table">
        <thead>
          <tr>
            <th>Market</th>
            <th>YES Price</th>
            <th>NO Price</th>
            <th>Spread</th>
          </tr>
        </thead>

        <tbody>
          {spreads.map((item, index) => (
            <tr key={index}>
              <td>{item.market}</td>
              <td>{item.yes.toFixed(2)}</td>
              <td>{item.no.toFixed(2)}</td>
              <td
                style={{
                  color: item.spread > 0.4 ? "red" : "green",
                  fontWeight: "bold",
                }}
              >
                {item.spread.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
