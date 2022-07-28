import React from "react"
import Agent from "./Agent/Agent"

const Agents = ({ agents, onClick, selected }) => {
  return (
    <div className="absolute top-14 md:h-[33rem] h-48 overflow-scroll no-scrollbar z-10 md:my-10 my-12">
      {agents.map((agent, i) => (
        <Agent
          key={i}
          i={i}
          agent={agent}
          onClick={onClick}
          selected={selected}
        />
      ))}
    </div>
  )
}

export default Agents
