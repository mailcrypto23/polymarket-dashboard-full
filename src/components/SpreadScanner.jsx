import React from "react";

const DATA = [
  { market: "BTC > $100k?", yes: 0.48, no: 0.52 },
  { market: "ETH Flip BTC?", yes: 0.32, no: 0.68 },
  { market: "Trump 2024?", yes: 0.54, no: 0.46 }
];

export default function SpreadScanner() {
  return (
    <div>
      <h2 className="sec-title"><span className="emoji">🧭</span> Spread Scanner</h2>
      <p className="muted">Mock Data — YES/NO Market Spreads</p>

      <div className="table-wrap">
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
            {DATA.map((r, i) => {
              const spread = Math.abs((r.no - r.yes)).toFixed(2);
              return (
                <tr key={i}>
                  <td className="market-cell">{r.market}</td>
                  <td>{r.yes.toFixed(2)}</td>
                  <td>{r.no.toFixed(2)}</td>
                  <td className={Number(spread) > 0.2 ? "spread-warning" : "spread-ok"}>{spread}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
