import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "./particlesConfig";

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles" 
          options={particlesConfig}
        />
      )}
    </>
  );
}
