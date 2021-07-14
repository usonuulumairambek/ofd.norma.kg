import React from "react"
import "./ConnectToOfd.css"

const ConnectToOfd = () => {
  return (
    <div className="ofd-connect">
      <div className="ofd-connect__select-days">
        <div className="ofd-connect__date">6 месяцев</div>
        <div className="ofd-connect__price">
          3 200 <span>сом</span>
        </div>
        <div className="ofd-connect__price-in-day">17.5 сом/день</div>
      </div>
      <div className="ofd-connect__select-days">
        <div className="ofd-connect__date">12 месяцев</div>
        <div className="ofd-connect__price">
          6 700 <span>сом</span>
        </div>
        <div className="ofd-connect__price-in-day">18.4 сом/день</div>
      </div>
      <div className="ofd-connect__select-days">
        <div className="ofd-connect__date">36 месяцев</div>
        <div className="ofd-connect__price">
          15 000 <span>сом</span>
        </div>
        <div className="ofd-connect__price-in-day">13.7 сом/день</div>
      </div>
    </div>
  )
}

export default ConnectToOfd
