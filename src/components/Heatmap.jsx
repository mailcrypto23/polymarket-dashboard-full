import { useEffect, useState } from "react";
import spreads from "../mock-data/mock_spread_history.json";

export default function Heatmap(){
  const [spreadData, setSpreadData] = useState([]);

  useEffect(()=> {
    setSpreadData(spreads || []);
  }, []);

  // pick last recorded spread per market (mock file structure assumed array of {market, spread, volatility})
  const last = spreadData.map(s => s);

  const colorFor = (val=0) => {
    if(val >= 0.4) return "linear-gradient(180deg,#ffb86b,#ff9b5c)";
    if(val >= 0.25) return "linear-gradient(180deg,#ffd98a,#ffc07a)";
    return "linear-gradient(180deg,#7fe3ff,#6ee7ff)";
  };

  return (
    <div className="card fade-in">
      <div className="title">🔥 Spread & Liquidity Heatmap</div>
      <div className="subtitle">Mock Data — Spread Volatility</div>

      <div style={{marginTop:12}}>
        <div className="heat-grid">
          {last.map((m,i)=>(
            <div className="heat-cell" key={i} style={{background: colorFor(m.spread), boxShadow: "inset 0 -6px 18px rgba(0,0,0,0.25)"}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:13,opacity:0.95,fontWeight:700}}>{m.market}</div>
                <div style={{fontSize:12, opacity:0.92}}>{(m.spread||0).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
