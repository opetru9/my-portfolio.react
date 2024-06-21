const particlesConfig = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#5c62ec",
      //   value: "#bae6fd",
    },
    links: {
      color: "#5c62ec",
      //   color: "#e0f2fe",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.7,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
  
 
export default particlesConfig;