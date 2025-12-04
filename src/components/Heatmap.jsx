import React from 'react'

const HM = [
  { title: 'BTC > $100k?', score: 0.32, color: 'gold' },
  { title: 'ETH Flip BTC?', score: 0.36, color: 'gold' },
  { title: 'Trump 2024?', score: 0.22, color: 'cyan' }
]

export default function Heatmap(){
  return (
    <div>
      <h3 className="sub-title">🔥 Spread & Liquidity Heatmap</h3>
      <p className="muted">Mock Data — Spread Volatility</p>

      <div className="heatmap-row">
        {HM.map((b, i) => (
          <div key={i} className={`heatbox ${b.color}`}>
            <div className="heatbox-title">{b.title}</div>
            <div className="heatbox-score">{b.score.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
