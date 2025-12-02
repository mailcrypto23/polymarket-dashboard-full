import { useEffect, useState } from "react";
import markets from "../../mock-data/mock_data.json";

export default function MarketOverview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(markets);
  }, []);

  return (
    <div className="card">
      <h2 className="title">📈 Market Overview</h2>
      <p className="subtitle">Mock market snapshot — overview of top markets</p>

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
              <td>{m.yes.toFixed(2)}</td>
              <td>{m.no.toFixed(2)}</td>
              <td>${m.volume.toLocaleString()}</td>
              <td
                style={{
                  color:
                    m.trend === "up"
                      ? "green"
                      : m.trend === "down"
                      ? "red"
                      : "orange",
                  fontWeight: "bold",
                }}
              >
                {m.trend.toUpperCase()}
              </td>
              <td>{m.liquidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
