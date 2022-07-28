import React, { useState, useEffect } from "react"
import axios from "axios"

const CompetitiveTiers = () => {
  const [tiers, setTiers] = useState([])

  useEffect(() => {
    getCompetitiveTiers()
  }, [])

  const getCompetitiveTiers = async () => {
    const response = await axios.get(
      "https://valorant-api.com/v1/competitivetiers"
    )
    setTiers(
      response.data.data[0].tiers.filter((tier) => tier.smallIcon !== null)
    )
  }
  return (
    <div className="container mx-auto px-10 my-5">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-3">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className="border border-black p-5 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white duration-300 group"
          >
            <img
              src={tier.largeIcon}
              alt="Tier"
              className="group-hover:scale-110 duration-300"
            />
            <h1 className="text-center">{tier.divisionName}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompetitiveTiers
