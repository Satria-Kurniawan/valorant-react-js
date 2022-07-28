import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const AgentDisplay = ({ agent }) => {
  const { scrollY } = useScroll()
  const top = useTransform(scrollY, [0, 500], [50, 0])
  const bottom = useTransform(scrollY, [0, 500], [80, 120])

  return (
    <>
      {agent.length !== 0 ? (
        <div>
          <div>
            <motion.img
              src={agent.fullPortraitV2}
              alt="Agent"
              className="md:w-[52rem] absolute md:left-64 left-20"
              key={agent.uuid}
              initial={{ opacity: 0, y: "-100" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                top,
                transitionDuration: "0.2s",
              }}
            />
          </div>
          <motion.div
            className="md:absolute static md:w-72 h-72 text-justify md:text-stone-300 text-black md:mt-0 mt-10"
            key={agent.uuid}
            initial={{ opacity: 0, y: "200" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              right: "5rem",
              bottom,
              transitionDuration: "0.2s",
            }}
          >
            <h1 className="text-lg uppercase font-semibold">// Role</h1>
            <div className="inline-flex justify-center items-center mb-5">
              <h1 className="md:text-4xl text-2xl font-bold uppercase mr-5">
                {agent.role.displayName}
              </h1>
              <img
                src={agent.role.displayIcon}
                alt="Role"
                width={50}
                className="md:invert-0 invert"
              />
            </div>
            <h1 className="text-lg uppercase font-semibold mb-2">
              // Biography
            </h1>
            <p className="font-semibold">{agent.description}</p>
          </motion.div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default AgentDisplay
