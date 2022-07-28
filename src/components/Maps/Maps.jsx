import axios from "axios"
import React, { useState, useEffect } from "react"

const Maps = () => {
  const [maps, setMaps] = useState([])

  useEffect(() => {
    getMaps()
  }, [])

  const getMaps = async () => {
    const response = await axios.get("https://valorant-api.com/v1/maps")

    setMaps(response.data.data)
    console.log(response.data.data)
  }
  return (
    <div className="container mx-auto px-10 my-5">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {maps.map((map, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden group">
            <img
              src={map.splash}
              alt="Map"
              className="hover:scale-150 hover:rotate-12 hover:brightness-75 duration-300"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-80 text-2xl text-stone-300 group-hover:text-stone-200 group-hover:opacity-100 duration-300">
              {map.displayName}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Maps
