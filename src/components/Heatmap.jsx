import { useEffect, useState } from "react";
import mockSpreads from "../../mock-data/mock_spread_history.json";

export default function Heatmap() {
  const [spreadData, setSpreadData] = useState([]);

  useEffect(() => {
    // Load mock spread history dataset
    setSpreadData(mockSpreads);
  }, []);

  return (
    <div className="card">
      <h2 className="title">🔥 Spread & Liquidity Heatmap</h2>
      <p className="subtitle">Mock Data — Spread Volatility History</p>

      <table className="table">
        <thead>
          <tr>
            <th>Market</th>
            <th>YES Price</th>
            <th>NO Price</th>
            <th>Spread</th>
            <th>Volatility</th>
          </tr>
        </thead>

        <tbody>
          {spreadData.map((item, index) => {
            const spreadColor =
              item.spread > 0.4
                ? "red"
                : item.spread > 0.25
                ? "orange"
                : "green";

            return (
              <tr key={index}>
                <td>{item.market}</td>
                <td>{item.yes.toFixed(2)}</td>
                <td>{item.no.toFixed(2)}</td>
                <td style={{ color: spreadColor }}>
                  {item.spread.toFixed(2)}
                </td>
                <td>{item.volatility}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
