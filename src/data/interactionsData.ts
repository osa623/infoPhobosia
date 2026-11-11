export interface InteractionSystemDoc {
  id: string;
  systemName: string;
  triggerKey: string;
  primaryLocation: string;
  mechanism: string;
  userExperience: string;
  missionSignificance: string;
  features: string[];
}

export const interactionsData: InteractionSystemDoc[] = [
  {
    id: "first-person-navigation",
    systemName: "First-Person Free Navigation & Collision",
    triggerKey: "WASD + Mouse Look + Shift (Sprint)",
    primaryLocation: "All Outpost Modules, Corridors & Exterior Yard",
    mechanism: "Custom Three.js First-Person PointerLock camera controller coupled with bounding box and raycast height queries on terrain meshes.",
    userExperience: "Seamless, grounded movement at eye-level (1.7m camera height) with realistic head bobbing, step audio feedback, and physical wall collision preventing clipping through airlocks or module hulls.",
    missionSignificance: "Fundamental mode of exploration that immerses the player directly into Carl's viewpoint without a detached third-person camera.",
    features: [
      "Pointer Lock API for precise 360° mouse orientation",
      "Dynamic ground slope friction and gravity raycasting",
      "Surface-specific footstep audio (metallic grating indoors vs sandy crunch on Martian regolith)"
    ]
  },
  {
    id: "e-key-interaction",
    systemName: "Physical Console Inspection & Trigger System",
    triggerKey: "E Key / Proximity Prompt",
    primaryLocation: "Monitors, Terminals, Airlock Buttons & Workstations",
    mechanism: "Sphere-cast proximity detection identifies interactive nodes within a 2.5-meter radius, highlighting the object with a subtle HUD reticle prompt.",
    userExperience: "Pressing 'E' smoothly locks camera focus or opens dedicated high-resolution screen UI overlays displaying authentic telemetry, schematics, and interactive controls.",
    missionSignificance: "The primary gateway for interacting with all 20+ functional outpost screens, toggling switches, acknowledging dispatches, and submitting mission logs.",
    features: [
      "Dynamic UI prompt ('PRESS [E] TO INSPECT')",
      "Audio click and pneumatic feedback on activation",
      "Smooth camera alignment tweening to ensure readable screen angles"
    ]
  },
  {
    id: "personal-laptop-os",
    systemName: "Personal Laptop OS & Crew Terminal",
    triggerKey: "E Key at Habitat Desk",
    primaryLocation: "Crew Habitat Quarters",
    mechanism: "Dedicated simulated desktop operating system featuring custom window management, file browser, text editor, and audio player components.",
    userExperience: "Players explore Carl's personal files, read mission directives, inspect planetary maps, and listen to archived audio dispatches through a stylized sci-fi computer interface.",
    missionSignificance: "Enriches the narrative atmosphere of SOL 1 and provides intimate story context regarding Carl's thoughts during the expedition.",
    features: [
      "Window drag, maximize, and minimize operations",
      "Interactive audio log playback with waveform visualizers",
      "Confidential mission briefing documents and technical schematics"
    ]
  },
  {
    id: "science-spectrometry",
    systemName: "Geological Spectrometer & Cultivation Consoles",
    triggerKey: "E Key in Science Lab",
    primaryLocation: "Research Zone / Science Lab",
    mechanism: "Interactive analytical software rendering spectral emission graphs, mineralogical breakdown pie charts, and biological sensor streams.",
    userExperience: "Players input target coordinates, trigger sample centrifuges, analyze elemental peaks (Iron, Silicon, Magnesium), and balance nutrient pH for the hydroponic plants.",
    missionSignificance: "Directly fulfills the scientific objectives of SOL 3 (Target Selection), SOL 6 (Regolith Analysis), and SOL 9 (Cultivation Assessment).",
    features: [
      "Simulated absorption spectra matching real Martian basaltic data",
      "Dual chamber hydroponic monitoring (Biomass, CO2 uptake, Transpiration)",
      "Target coordinate tagging for subsequent drone exploration"
    ]
  },
  {
    id: "engineering-power-grid",
    systemName: "Electrical Grid Relays & Diagnostics Workbench",
    triggerKey: "E Key in Engineering Unit",
    primaryLocation: "Engineering & Machinery Hall",
    mechanism: "Interactive circuit breaker panels and multi-bus electrical routing diagrams simulating kilowatt-hour draw and solar panel input.",
    userExperience: "Players diagnose electrical faults, flip high-capacity breakers, route power between life-support scrubbers and drone charging pads, and clear short-circuits.",
    missionSignificance: "Essential during SOL 2 baseline checks, SOL 7 dust storm emergency shutdowns, and SOL 8 solar array grid recovery.",
    features: [
      "Real-time simulated watt-hour load balance readouts",
      "Audible industrial hum and relay trip sound effects",
      "Step-by-step diagnostic workflow validation"
    ]
  },
  {
    id: "airlock-depressurization",
    systemName: "Dual-Stage Airlock Cycling & EVA Suiting",
    triggerKey: "E Key at Airlock Console",
    primaryLocation: "Airlock Module",
    mechanism: "State machine orchestrating inner door sealing, pressure venting from 101.3 kPa to 0.6 kPa, atmospheric hiss audio, and outer door unlocking.",
    userExperience: "Before stepping onto the surface, players must don the EVA pressure suit from the wall gantry and initiate the automated depressurization cycle.",
    missionSignificance: "Mandatory safety sequence preceding all outdoor EVAs (SOL 6) and the final departure journey (SOL 11).",
    features: [
      "Physical pressure gauge dropping in real time with dramatic atmospheric venting audio",
      "Suit HUD transition overlay introducing oxygen remaining, radiation levels, and external temperature",
      "Interlocking door protocol preventing decompression blowouts"
    ]
  },
  {
    id: "drone-reconnaissance",
    systemName: "Coaxial Drone Aerial Flight Simulation",
    triggerKey: "E Key at Drone Bay Terminal (SOL 5)",
    primaryLocation: "Drone Section & Martian Sky",
    mechanism: "Specialized flight physics model simulating flight in Mars' low-density atmosphere (0.020 kg/m³ air density) with high-speed counter-rotating coaxial rotors.",
    userExperience: "The player takes remote manual control of the aerial drone, soaring hundreds of meters above the terrain to capture aerial orthophotos of geological targets.",
    missionSignificance: "The centerpiece of SOL 5, enabling high-altitude reconnaissance that identifies optimal ground traverse routes.",
    features: [
      "Vertical lift, bank, roll, and elevation controls",
      "Downlink video distortion effects simulating radio latency",
      "Waypoint targeting reticle and topographic contour overlay"
    ]
  },
  {
    id: "rover-departure",
    systemName: "Mars Terrain Vehicle Driving System",
    triggerKey: "E Key at Vehicle Ramp (SOL 11)",
    primaryLocation: "Exterior Outpost Yard & Departure Trail",
    mechanism: "Physics-driven six-wheel surface vehicle system with terrain conformity, suspension spring simulation, and steering kinematics.",
    userExperience: "Players board the pressurized vehicle, engage the electric powertrain, and navigate a marked 200-meter departure trail across Martian sands towards the horizon.",
    missionSignificance: "Concludes the playable outpost campaign on SOL 11, transitioning seamlessly into the final cinematic sequence.",
    features: [
      "Six independent suspension dampers conforming to uneven rocks",
      "Cockpit HUD displaying compass heading, speed, and distance to destination",
      "Dynamic wheel dust particle effects"
    ]
  }
];
