import React from 'react'
import MarketOverview from './components/MarketOverview'
import SpreadScanner from './components/SpreadScanner'
import Heatmap from './components/Heatmap'
import OrderbookView from './components/OrderbookView'
import SignalsPanel from './components/SignalsPanel'

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="app-title">Polymarket Daily Dashboard</h1>
        <p className="app-sub">Dark UI — Mock data preview for Builder Program</p>
      </header>

      <main className="app-container">
        <section className="col-1">
          <div className="card">
            <MarketOverview />
          </div>

          <div className="card">
            <SpreadScanner />
            <div style={{height: 18}} />
            <Heatmap />
          </div>
        </section>

        <section className="col-2">
          <div className="card">
            <OrderbookView />
          </div>

          <div className="card">
            <SignalsPanel />
          </div>
        </section>
      </main>

      <footer className="app-footer">
        Powered by mock datasets • Built for Polymarket Builder Program
      </footer>
    </div>
  )
}
