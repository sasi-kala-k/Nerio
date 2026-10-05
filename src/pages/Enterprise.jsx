import React from 'react'
import Reviews from '../components/HomeComponents/Reviews'
import Ent_Pros from "../components/Enterprise/Ent_Pros"
import Ent_Features from "../components/Enterprise/Scheduling"
import ConnectTeam from "../components/Enterprise/ConnectTeam"
import Ent_Implementation from "../components/Enterprise/Ent_Implementation"
import IndustryLeaders from "../components/Enterprise/IndustryLeaders"
import Implementation from "../components/Enterprise/Implementation"
import Features from "../components/Enterprise/Features"
import ConnectWithExpert from "../components/Enterprise/ConnectWithExpert"

function Enterprise() {
  return (
    <div>
      <div className="ent-bg d-flex flex-column align-items-center justify-content-center gap-3">
        <h1 className="  text-white display-5 fw-semibold text-center" style={{ maxWidth: '900px' }}>Enterprise Scheduling Built for <span className="text-warning">Large-Scale Operations</span></h1>
        <p className="text-center  text-white " style={{ maxWidth: '700px' }}>Nerio’s enterprise scheduling solutions simplify booking, resource management, and client engagement for growing organizations.</p>
        <button className="btn rounded-pill btn-primary px-4 py-2">TALK TO OUR SALES EXPERTS</button>
      </div>

      <Reviews />
      <Ent_Pros />
      <Ent_Features />
      <ConnectTeam />
      {/* <Ent_Implementation /> */}
      <Implementation />
      <IndustryLeaders />
      <Features />
      <ConnectWithExpert />

    </div>
  )
}

export default Enterprise
