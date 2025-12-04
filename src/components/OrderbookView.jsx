import { useEffect, useState } from "react";
import data from "../mock-data/mock_orderbook.json";

export default function OrderbookView(){
  const [orderbook, setOrderbook] = useState(null);

  useEffect(()=>{
    setOrderbook(data || null);
  },[]);

  if(!orderbook) return <div className="card">Loading orderbook...</div>;

  return (
    <div className="card fade-in">
      <div className="title">📘 Orderbook Depth</div>
      <div className="subtitle">Mock CLOB Depth — L1–L5</div>

      <div className="orderbook">
        <div className="bids">
          <h4 style={{marginBottom:8}}>Bids (Buyers)</h4>
          {orderbook.bids.map((b,i)=>(
            <div className={`row green`} key={i}>
              <span>{(b.price).toFixed(2)}</span>
              <span>{b.size}</span>
            </div>
          ))}
        </div>

        <div className="asks">
          <h4 style={{marginBottom:8}}>Asks (Sellers)</h4>
          {orderbook.asks.map((a,i)=>(
            <div className={`row red`} key={i}>
              <span>{(a.price).toFixed(2)}</span>
              <span>{a.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
