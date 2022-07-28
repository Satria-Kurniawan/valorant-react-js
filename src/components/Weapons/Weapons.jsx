import axios from "axios"
import React, { useState, useEffect } from "react"

const Weapons = () => {
  const [weapons, setWeapons] = useState([])

  useEffect(() => {
    getWeapons()
  }, [])

  const getWeapons = async () => {
    const response = await axios.get("https://valorant-api.com/v1/weapons")

    setWeapons(response.data.data)
  }
  return (
    <div className="container mx-auto px-10 my-5">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-3">
        {weapons.map((weapon, i) => (
          <div
            key={i}
            className="border border-black p-5 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white duration-300 group"
          >
            <img
              src={weapon.displayIcon}
              alt="weapon"
              className="group-hover:scale-110 duration-300"
            />
            <h1 className="text-center">{weapon.displayName}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Weapons
