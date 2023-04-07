import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Agents from "./components/Agents/Agents";
import AgentDisplay from "./components/Display/AgentDisplay";
import AbilitiesDisplay from "./components/Display/AbilitiesDisplay";
import agentsPlus from "./assets/AgentsPlus";
import Navbar from "./components/Navbar/Navbar";
import CompetitiveTiers from "./components/Tiers/CompetitiveTiers";
import Weapons from "./components/Weapons/Weapons";
import Maps from "./components/Maps/Maps";

const App = () => {
  const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState([]);
  const [selected, setSelected] = useState({});
  const [video, setVideo] = useState({});
  const [ability, setAbility] = useState({});

  useEffect(() => {
    getAgents();
  }, []);

  const getAgents = async () => {
    const response = await axios.get("https://valorant-api.com/v1/agents");

    setAgents(
      response.data.data.filter((agent) => agent.isPlayableCharacter === true)
    );
  };

  const getAgent = async (uuid) => {
    const response = await axios.get(
      `https://valorant-api.com/v1/agents/${uuid}`
    );
    setAgent(response.data.data);
    setSelected({ agentUuid: uuid });
    setVideo(null);
    setAbility(null);
  };

  const showVideo = (i, ability) => {
    agentsPlus.filter(
      (agentPlus) =>
        agentPlus.name === agent.displayName && setVideo(agentPlus.videos[i])
    );
    setAbility(ability);
  };

  return (
    <div
    // style={{
    //   backgroundImage: `${
    //     agent.length === 0
    //       ? 'url("images/bg-valorant-2.jpg")'
    //       : 'url("images/bg-valorant.jpg")'
    //   }`,
    //   backgroundSize: "cover",
    // }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <video
                  autoPlay
                  loop
                  muted
                  className="relative md:h-screen md:-mt-12"
                >
                  <source
                    src="videos/agent-background-generic.mp4"
                    type="video/mp4"
                  />
                </video>
                <video
                  autoPlay
                  loop
                  muted
                  className="relative md:h-screen -mt-16 md:hidden"
                >
                  <source
                    src="videos/agent-background-generic.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="container mx-auto px-10">
                  <div className="md:flex">
                    <Agents
                      agents={agents}
                      onClick={getAgent}
                      selected={selected}
                    />
                    <AgentDisplay agent={agent} />
                  </div>
                  {agent.length !== 0 && (
                    <AbilitiesDisplay
                      agent={agent}
                      showVideo={showVideo}
                      video={video}
                      ability={ability}
                    />
                  )}
                </div>
              </>
            }
          />
          <Route path="/competitivetiers" element={<CompetitiveTiers />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
