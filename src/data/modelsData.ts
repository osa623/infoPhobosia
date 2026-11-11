export interface ModelShowcase {
  id: string;
  name: string;
  category: "Architecture" | "Operations" | "Science" | "Exterior" | "Aviation";
  image: string;
  tagline: string;
  description: string;
  role: string;
  dimensions: string;
  triangles: string;
  technicalHighlights: string[];
  associatedScreens: string[];
  inGameInteractions: string[];
  solRelevance: string;
}

export const modelsData: ModelShowcase[] = [
  {
    id: "mission-control",
    name: "Mission Control Command Center",
    category: "Operations",
    image: "/images/mission_control.png",
    tagline: "The central nervous system of PHOBOSIA Outpost",
    description: "The primary nerve center housing multi-display telemetry banks, global orbital tracking projections, atmospheric telemetry readers, and long-range communication relays. Operators coordinate all outpost functions, communications, and emergency protocols from this pressurized hub.",
    role: "Expedition coordination, telemetry monitoring, mission logging, and communications uplink.",
    dimensions: "12m x 8m octagonal command bay",
    triangles: "~85,000 tris (optimized for WebGL 60 FPS)",
    technicalHighlights: [
      "Custom emissive PBR screen shaders with dynamic telemetry feeds",
      "Modular command consoles with physical keyboard and interface switchboards",
      "Integrated emergency warning light relays connected to SOL 7 dust storm events",
      "Ergonomic circular operator pit with elevated supervisor monitoring consoles"
    ],
    associatedScreens: [
      "Orbital Trajectory & Satellite Tracker",
      "Outpost Power Distribution Grid Monitor",
      "Long-Range Dish Uplink Console",
      "Master Expedition Log & Telemetry Archive"
    ],
    inGameInteractions: [
      "Press 'E' to open Master Mission Terminal",
      "Inspect live power bus and environmental readings",
      "Acknowledge incoming transmission logs (SOL 11)"
    ],
    solRelevance: "Active across all SOLs (1–11); central to SOL 2 readiness, SOL 7 storm alert, and SOL 11 final log entry.",
  },
  {
    id: "habitat-zone",
    name: "Crew Habitat Quarters",
    category: "Architecture",
    image: "/images/habitat_zone.png",
    tagline: "Ergonomic pressurized living environment for Martian endurance",
    description: "The main residential sanctuary for the explorer, engineered to protect psychological well-being and physical health on Mars. Houses sleeping pods, nutrition dispensing systems, medical diagnostics, water recycling taps, and Carl's personal computing terminal.",
    role: "Crew habitation, rest cycles, nutrition/water provisioning, and personal expedition journal maintenance.",
    dimensions: "10m diameter double-deck cylinder",
    triangles: "~68,000 tris",
    technicalHighlights: [
      "Curved composite wall panels with acoustic damping and radiation shielding ribs",
      "Integrated circadian rhythm LED lighting strips simulating Earth day/night cycles",
      "Compact sleep bunk cubicles with individual climate controls and emergency oxygen taps"
    ],
    associatedScreens: [
      "Habitat Life-Support & Atmospheric Pressure Monitor",
      "Nutrition & Water Ration Dispenser Display",
      "Personal Laptop OS Terminal (Simulated Desktop Interface)"
    ],
    inGameInteractions: [
      "Interact with Personal Laptop OS to review files and audio notes",
      "Inspect hydration levels and food stores",
      "Rest cycle transition to advance expedition SOLs"
    ],
    solRelevance: "SOL 1 orientation spawn point, SOL 2 habitat verification, and daily expedition rest cycles.",
  },
  {
    id: "habitat-zone-interior",
    name: "Habitat Workstation & Galley",
    category: "Architecture",
    image: "/images/habitat_zone_2.png",
    tagline: "Dedicated workstation and crew preparation area",
    description: "An interior perspective of the Habitat module highlighting the crew desk, technical logbooks, nutrition distribution console, and environmental readouts.",
    role: "Personal study, daily routine logging, and crew nourishment preparation.",
    dimensions: "6m x 4m interior workstation bay",
    triangles: "~54,000 tris",
    technicalHighlights: [
      "Detailed hard-surface prop modeling for food cartridges, drink flasks, and data tablets",
      "Cable conduit routing and ventilation grilles modeled to industrial sci-fi specifications",
      "Ambient occlusion baked textures for realistic soft shadow grounding"
    ],
    associatedScreens: [
      "Caloric Intake & Water Balance Terminal",
      "Personal Data Slate Interface"
    ],
    inGameInteractions: [
      "Inspect nutrition packs and hydration canisters",
      "Read mission briefing documents at the desk"
    ],
    solRelevance: "SOL 1 base onboarding and SOL 9 life-support balance assessment.",
  },
  {
    id: "science-lab",
    name: "Research & Cultivation Science Lab",
    category: "Science",
    image: "/images/Science_lab.png",
    tagline: "Planetary geology analysis and dual hydroponic plant cultivation",
    description: "Equipped for rigorous planetary observation, geological sample analysis, and closed-loop biological cultivation. Contains twin pressurized botanical growth tubes, mass spectrometers, centrifuge equipment, and high-resolution microscopes for Martian regolith examination.",
    role: "Soil sample analysis, botanical growth monitoring, and geological target evaluation.",
    dimensions: "14m x 9m oblong pressurized lab",
    triangles: "~92,000 tris",
    technicalHighlights: [
      "Dual enclosed greenhouse cultivation cylinders with violet/cyan full-spectrum grow lights",
      "Detailed specimen racks, containment glove boxes, and microscope optical arrays",
      "Real-time plant growth status shaders displaying transpiration and moisture indices"
    ],
    associatedScreens: [
      "Spectrometry Chemical Composition Analyzer",
      "Hydroponic Nutrient Solution pH & Mineral Console",
      "Target Mineralogy & Stratigraphic Mapping Terminal"
    ],
    inGameInteractions: [
      "Place collected rock/soil samples into the analytical scanner (SOL 6)",
      "Adjust hydroponic nutrient solution and water pH balance (SOL 9)",
      "Select priority geological targets for drone survey (SOL 3)"
    ],
    solRelevance: "Core facility for SOL 3 target selection, SOL 6 EVA sample analysis, and SOL 9 cultivation recovery.",
  },
  {
    id: "science-lab-equipment",
    name: "Science Lab Diagnostics & Specimen Bay",
    category: "Science",
    image: "/images/science_lab_2.png",
    tagline: "High-precision instrumentation for Martian astrobiology and mineralogy",
    description: "A close-up view of the analytical benches, featuring automated pipetting machinery, sample vacuum chambers, chemical reagent containers, and computer diagnostic terminals.",
    role: "Secondary sample processing, mineral classification, and automated biological assays.",
    dimensions: "5m x 4m bench sector",
    triangles: "~48,000 tris",
    technicalHighlights: [
      "Accurate scientific equipment modeling inspired by modern cleanroom laboratories",
      "Glass transparency shaders with subtle surface scratches and chromatic dispersion",
      "High-density texture maps highlighting specimen test tubes and diagnostic monitors"
    ],
    associatedScreens: [
      "Automated Centrifuge Controller",
      "Regolith Element Breakdown Screen"
    ],
    inGameInteractions: [
      "Inspect specimen test tubes and regolith slides",
      "Review automated mineralogical spectrum graphs"
    ],
    solRelevance: "SOL 3, SOL 6, and SOL 9 research procedures.",
  },
  {
    id: "engineering-unit",
    name: "Engineering & Power Distribution Unit",
    category: "Operations",
    image: "/images/engineering_unit.png",
    tagline: "Heavy-duty power management, atmospheric scrubbing, and life support machinery",
    description: "The industrial powerhouse of PHOBOSIA. Contains the primary power transformers connected to external solar farms, CO2 scrubber banks, water reclamation pumps, electrical breaker arrays, and tool diagnostics benches.",
    role: "Power routing, life support maintenance, emergency bus switching, and hardware repair.",
    dimensions: "16m x 10m reinforced heavy machinery hall",
    triangles: "~98,000 tris",
    technicalHighlights: [
      "Industrial cable trays, heavy copper busbars, and pressurized coolant pipes overhead",
      "Dynamic power load switches with visual circuit breakers and status indicators",
      "Life support oxygen generation electrolysis units modeled with authentic plumbing"
    ],
    associatedScreens: [
      "Main Power Grid & Photovoltaic Inverter Bus",
      "Atmospheric Scrubbing & CO2 Level Telemetry",
      "Emergency Auxiliary Battery Bank Status"
    ],
    inGameInteractions: [
      "Reset tripped breakers following dust storm power surge (SOL 8)",
      "Configure drone charging cycle and battery firmware (SOL 4)",
      "Test emergency oxygen scrubbers (SOL 2)"
    ],
    solRelevance: "Vital in SOL 2 readiness, SOL 4 drone prep, SOL 7 storm emergency, and SOL 8 power restoration.",
  },
  {
    id: "engineering-unit-diagnostics",
    name: "Engineering Diagnostics Workbench",
    category: "Operations",
    image: "/images/Engineering_unit_1.png",
    tagline: "Hardware diagnostic terminal and spare parts repository",
    description: "An angled perspective showing the heavy-duty workbench, spare component drawers, oscilloscope terminals, and high-voltage conduit junctions.",
    role: "Component repair, avionics recalibration, and hardware troubleshooting.",
    dimensions: "7m x 4m workbench corner",
    triangles: "~51,000 tris",
    technicalHighlights: [
      "Weathered metallic textures with scratched paint and realistic dust accumulation",
      "Modular drawer units and tool shadow boards for immersive physical fidelity",
      "Circuit schematics and wiring diagrams displayed on benchtop screens"
    ],
    associatedScreens: [
      "Oscilloscope Signal Analyzer",
      "Component Diagnostics & Continuity Tester"
    ],
    inGameInteractions: [
      "Inspect replacement circuit boards and battery cells",
      "Run diagnostic tests on field equipment"
    ],
    solRelevance: "SOL 4 drone pre-flight preparation and SOL 8 electrical system repairs.",
  },
  {
    id: "airlock",
    name: "Airlock & Depressurization Chamber",
    category: "Architecture",
    image: "/images/airlock.png",
    tagline: "The gateway between human warmth and the vacuum-thin Martian atmosphere",
    description: "A dual-stage reinforced airlock chamber built to withstand the pressure delta between 101.3 kPa habitat pressure and Mars' ~0.6 kPa surface atmosphere. Features EVA suit docking ports, umbilicals, dust mitigation showers, and automated bulkhead doors.",
    role: "EVA suit donning/doffing, chamber depressurization, surface egress, and dust containment.",
    dimensions: "6m x 5m heavy reinforced chamber",
    triangles: "~62,000 tris",
    technicalHighlights: [
      "Double hydraulic interlocking bulkhead doors with fail-safe mechanical lock pins",
      "Integrated EVA suit docking gantries with helmet ring seals and oxygen umbilicals",
      "High-pressure carbon dioxide blast nozzles for removing clinging Martian dust on ingress"
    ],
    associatedScreens: [
      "Airlock Pressure Delta & Gas Reclamation Console",
      "EVA Suit Battery & Oxygen Charge Status Display",
      "External Atmospheric Weather & Pressure Gauge"
    ],
    inGameInteractions: [
      "Don pressurized EVA exploration suit (SOL 6, SOL 11)",
      "Initiate airlock depressurization sequence with audio pressure drop",
      "Cycle inner and outer airtight hatch doors"
    ],
    solRelevance: "Crucial for SOL 6 surface exploration, SOL 7 emergency lock-down, and SOL 11 departure.",
  },
  {
    id: "central-connector",
    name: "Central Hub & Corridor Array",
    category: "Architecture",
    image: "/images/central_connector.png",
    tagline: "The structural backbone linking all outpost modules",
    description: "An octagonal central junction connecting the Habitat, Science Lab, Engineering Unit, Airlock, and Mission Control. Features overhead navigation signage, emergency bulkhead isolation doors, and circular acoustic dampening floor panels.",
    role: "Internal circulation, wayfinding, structural stabilization, and emergency section compartmentalization.",
    dimensions: "8m diameter hub with 4x 10m connector tunnels",
    triangles: "~75,000 tris",
    technicalHighlights: [
      "Modular corridor tunnel segments designed for seamless alignment and collision bounds",
      "Directional color-coded floor striping and overhead signage guide explorer navigation",
      "Reinforced airtight emergency guillotine doors ready to seal damaged sectors instantly"
    ],
    associatedScreens: [
      "Base Master Layout & Sector Pressure Schematic",
      "Corridor Fire & Contamination Sensor Screen"
    ],
    inGameInteractions: [
      "Seamless walking traversal between all five main modules without loading screens",
      "Inspect sector navigation signage and door status indicators"
    ],
    solRelevance: "Traversed continuously during all SOLs.",
  },
  {
    id: "drone-section",
    name: "Aerial Reconnaissance Drone Bay",
    category: "Aviation",
    image: "/images/drone_Section.png",
    tagline: "Dedicated deployment platform for Mars aerial exploration",
    description: "The exterior-mounted drone hangar and maintenance gantry where the coaxial reconnaissance drone is stored, charged, and prepared for high-speed Martian atmospheric flights.",
    role: "Drone maintenance, telemetry uplink, pre-flight rotor calibration, and surface launch.",
    dimensions: "8m x 6m outdoor landing deck",
    triangles: "~58,000 tris",
    technicalHighlights: [
      "Motorized protective dome shell that retracts before automated vertical takeoff",
      "High-bandwidth directional antenna dedicated to low-latency video transmission",
      "Inductive charging landing pad designed to operate under Martian dust conditions"
    ],
    associatedScreens: [
      "Drone Flight Deck Avionics Terminal",
      "Rotor RPM & Battery Health Monitor"
    ],
    inGameInteractions: [
      "Initiate pre-flight drone self-test (SOL 4)",
      "Launch drone for high-altitude survey mission (SOL 5)"
    ],
    solRelevance: "Focal point of SOL 4 preparation and SOL 5 aerial reconnaissance flight.",
  },
  {
    id: "outpost-overview-1",
    name: "Mars_Outpost and Terrain",
    category: "Exterior",
    image: "/images/outpost_1.png",
    tagline: "A resilient scientific outpost nestled in Elysium Planitia",
    description: "A wide panoramic view showing the entire connected outpost complex set against the red Martian desert, rugged boulder fields, and distant crater rims under the dusty pink Martian sky.",
    role: "The complete habitat complex establishing human presence on the Red Planet.",
    dimensions: "400m x 400m engineered outpost pad",
    triangles: "Full scene budget ~350,000 tris",
    technicalHighlights: [
      "Interconnected pressurized geodesic domes and cylindrical modules",
      "Realistic Martian atmospheric scattering and volumetric reddish haze",
      "PBR materials utilizing roughness and metalness maps tuned to Mars sunlight"
    ],
    associatedScreens: ["Exterior Panoramic Camera Feeds in Mission Control"],
    inGameInteractions: ["Full first-person exterior exploration around the perimeter"],
    solRelevance: "Visible during all outdoor phases, drone flights, and EVA missions.",
  },
  {
    id: "outpost-overview-2",
    name: "Aerial Outpost Architecture",
    category: "Exterior",
    image: "/images/outpost_2.png",
    tagline: "Architectural layout showing modules, connectors, and solar farms",
    description: "An elevated high-angle perspective showcasing the geometric harmony of the five interconnected modules, external utility piping, antenna towers, and protective regolith berms.",
    role: "Architectural overview demonstrating modular outpost scalability.",
    dimensions: "Comprehensive site overview",
    triangles: "~320,000 tris",
    technicalHighlights: [
      "Accurate module footprint alignment ensuring logical internal-to-external scale",
      "Strategically placed exterior utility conduits and radiator heat rejection fins",
      "Multi-angle sunlight casting sharp, high-contrast shadows across Martian soil"
    ],
    associatedScreens: ["Orbital High-Resolution Satellite Map"],
    inGameInteractions: ["Observed from high-altitude drone perspective during SOL 5"],
    solRelevance: "SOL 5 aerial surveying and overall visual storytelling.",
  },
  {
    id: "outpost-with-vehicle",
    name: "Outpost Yard with Terrain Vehicle",
    category: "Exterior",
    image: "/images/outpost_with_terrain_Vehicle.png",
    tagline: "Surface exploration transport docked at the outpost yard",
    description: "The exterior logistics zone showing the rugged six-wheeled pressurized Mars Terrain Vehicle stationed near the airlock ramp, ready for scientific field traverses and final expedition departure.",
    role: "Long-range surface transportation, heavy equipment transport, and departure craft.",
    dimensions: "Vehicle: 6.5m length, 3.2m width, 2.8m height",
    triangles: "~110,000 tris combined",
    technicalHighlights: [
      "Six independent high-traction rocker-bogie wheels engineered for uneven terrain",
      "Pressurized crew cabin with forward panoramic observation canopy",
      "Integrated external sample storage lockers and emergency oxygen rechargers"
    ],
    associatedScreens: [
      "Vehicle Telemetry & Battery Level HUD",
      "GPS Surface Route Navigation Screen"
    ],
    inGameInteractions: [
      "Approach vehicle during EVA (SOL 6)",
      "Board vehicle, initiate ignition, and navigate the departure route (SOL 11)"
    ],
    solRelevance: "SOL 6 field mission context and SOL 11 final expedition departure.",
  },
  {
    id: "outpost-night-observation",
    name: "Outpost Night Observation & Terrain Investigation",
    category: "Exterior",
    image: "/images/outpost_night_observation.png",
    tagline: "Nocturnal scientific investigation across the frozen Elysium Planitia terrain",
    description: "A dramatic nocturnal visual and environmental simulation showing the Martian outpost under the starlit sky. High-intensity floodlight arrays illuminate the rugged regolith, basaltic boulders, and atmospheric dust haze during sub-zero Martian nights (-70°C to -100°C), supporting critical nocturnal scientific investigations, terrain temperature monitoring, and exterior maintenance sweeps.",
    role: "Nocturnal terrain investigation, perimeter illumination, thermal variance recording, and sub-zero EVA monitoring.",
    dimensions: "Wide-area 500m night-time exterior survey radius",
    triangles: "~360,000 tris with dynamic nocturnal lighting",
    technicalHighlights: [
      "Volumetric nocturnal atmospheric scattering tuned for Martian low-pressure night conditions",
      "Dynamic high-intensity exterior spot and floodlight shadows cast across jagged regolith",
      "Sub-zero mineral specular shaders highlighting nocturnal thermal frost accumulation",
      "Cinematic contrast grading balancing starry Martian void with warm pressurized outpost emissives"
    ],
    associatedScreens: [
      "Perimeter Night-Vision & Thermal Infrared Camera Array",
      "Nocturnal Barometric & Temperature Gradient Telemetry",
      "External Floodlight Bus & Power Storage Monitor"
    ],
    inGameInteractions: [
      "Engage high-power exterior floodlight arrays from Mission Control",
      "Conduct nocturnal EVA terrain traverses and surface regolith temperature sweeps",
      "Inspect airlock structural seals under severe cryogenic thermal contraction"
    ],
    solRelevance: "Central to SOL 6 nocturnal terrain analysis and SOL 7 pre-storm atmospheric pressure drop monitoring.",
  },
];
