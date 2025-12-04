import React from 'react'

const MOCK = [
  { market: 'BTC > $100k?', yes: 0.48, no: 0.52, volume: '1,528,200', trend: 'up' },
  { market: 'ETH Flip BTC?', yes: 0.32, no: 0.68, volume: '723,000', trend: 'down' },
  { market: 'Trump 2024?', yes: 0.54, no: 0.46, volume: '2,598,000', trend: 'flat' }
]

export default function MarketOverview(){
  return (
    <div>
      <h2 className="section-title">📊 Market Overview</h2>
      <p className="muted">Mock market snapshot — overview of top markets</p>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Market</th>
              <th>YES</th>
              <th>NO</th>
              <th>Volume</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {MOCK.map((r,i) => (
              <tr key={i}>
                <td className="market-cell">{r.market}</td>
                <td>{r.yes.toFixed(2)}</td>
                <td>{r.no.toFixed(2)}</td>
                <td>{r.volume}</td>
                <td><span className={`tag ${r.trend}`}>{r.trend}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
