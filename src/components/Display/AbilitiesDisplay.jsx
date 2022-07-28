import React from "react"
import { motion } from "framer-motion"

const AbilitiesDisplay = ({ agent, showVideo, video, ability }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-40 my-8">
        <div className="grid md:grid-cols-5 grid-cols-3 gap-3">
          <h1 className="md:col-span-5 col-span-3 md:text-5xl text-2xl font-extrabold uppercase">
            Abliities
          </h1>
          {agent.length !== 0 &&
            agent.abilities.map((ability, i) => (
              <div key={i}>
                <div
                  onClick={() => showVideo(i, ability)}
                  className="flex justify-center items-center w-20 h-20 border border-black hover:bg-red-500 group duration-300 cursor-pointer"
                >
                  <img
                    src={`${ability.displayIcon}`}
                    alt="Ability"
                    width={50}
                    className="invert-[50%] group-hover:invert-0 group-hover:rotate-[360deg] duration-300"
                  />
                </div>
              </div>
            ))}
          {ability !== null && (
            <motion.div
              key={ability.slot}
              className="col-span-3"
              initial={{ y: "-100" }}
              animate={{ y: 0 }}
            >
              <h1 className="text-2xl font-semibold uppercase">
                {ability.displayName}
              </h1>
              <p className="mt-1">{ability.description}</p>
            </motion.div>
          )}
        </div>

        {!video ? (
          ""
        ) : (
          <div>
            <motion.video
              key={video.id}
              autoPlay
              loop
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <source src={video.video} type="video/mp4" />
            </motion.video>
            <div className="bg-gray-500 md:h-6 h-4 md:max-w-[34rem] max-w-[16rem] ml-auto opacity-50" />
          </div>
        )}
      </div>
    </>
  )
}

export default AbilitiesDisplay
