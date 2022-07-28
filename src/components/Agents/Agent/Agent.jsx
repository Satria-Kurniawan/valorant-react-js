import React from "react"

const Agent = ({ agent, onClick, i, selected }) => {
  return (
    <div
      onClick={() => onClick(agent.uuid)}
      className="flex text-stone-300 hover:scale-110 duration-300"
    >
      <h1
        className={`${
          selected.agentUuid === agent.uuid
            ? "text-red-500 md:text-sm text-xs font-semibold md:my-3 my-2 mr-3"
            : "md:text-sm text-xs font-semibold md:my-3 my-2 mr-3"
        }`}
      >
        {i < 9 && 0}
        {i + 1}
      </h1>
      <h1
        className={`${
          selected.agentUuid === agent.uuid
            ? "text-red-500 md:text-6xl text-2xl font-extrabold uppercase cursor-pointer"
            : "md:text-6xl text-2xl font-extrabold uppercase cursor-pointer"
        }`}
      >
        {agent.displayName}
      </h1>
    </div>
  )
}

export default Agent
