export interface ExternalAssetCredit {
  id: string;
  modelName: string;
  creator: string;
  platform: string;
  sourceUrl?: string;
  license?: string;
  licenseUrl?: string;
  category: "Vehicle" | "Equipment" | "Interior" | "Technology";
  inGameLocation: string;
  notes?: string;
}

export interface CustomAssetSummary {
  id: string;
  name: string;
  module: string;
  author: string;
  software: string;
  description: string;
  image: string;
}

/**
 * Centralized registry of externally sourced 3D assets used within PHOBOSIA.
 * Fully attributed according to Creative Commons Attribution licenses and source records.
 */
export const externalAssetCredits: ExternalAssetCredit[] = [
  {
    id: "drone",
    modelName: "Drone",
    creator: "Mateus Schwaab",
    platform: "Sketchfab",
    sourceUrl: "https://skfb.ly/6UGIq",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    category: "Vehicle",
    inGameLocation: "Drone Section & Aerial Reconnaissance Bay (SOL 5)",
    notes: "Utilized for aerial reconnaissance flight and geological terrain surveying over Elysium Planitia.",
  },
  {
    id: "mars-globe",
    modelName: "Mars",
    creator: "JanesBT",
    platform: "Sketchfab",
    sourceUrl: "https://skfb.ly/oyCyK",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    category: "Equipment",
    inGameLocation: "Mission Control & Orbital Telemetry Station",
    notes: "Detailed 3D planetary globe model used for holographic orbital tracking and coordinate verification.",
  },
  {
    id: "keyboard-lowpoly",
    modelName: "Keyboard low poly",
    creator: "KI NG",
    platform: "Sketchfab",
    sourceUrl: "https://skfb.ly/6WREv",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    category: "Technology",
    inGameLocation: "Mission Control & Habitat Terminal Workstations",
    notes: "Tactile operator input interface deployed across console decks and habitat workstations.",
  },
  {
    id: "ladder",
    modelName: "Ladder",
    creator: "FrodoUndead",
    platform: "Sketchfab",
    sourceUrl: "https://skfb.ly/o7XVN",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    category: "Interior",
    inGameLocation: "Habitat Multi-Deck & Maintenance Vertical Access",
    notes: "Vertical access ladder connecting multi-tier habitat bunks and engineering crawlways.",
  },
  {
    id: "ps1-microscope",
    modelName: "ps1 microscope",
    creator: "Arrangemonk",
    platform: "Sketchfab",
    sourceUrl: "https://skfb.ly/pF9YR",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    category: "Equipment",
    inGameLocation: "Research & Cultivation Lab (Geology & Sample Analysis)",
    notes: "Optical diagnostic microscope used during SOL 3 mineral sample examination and regolith spectroscopy.",
  },
  {
    id: "notebook-pen",
    modelName: "Notebook and Pen",
    creator: "Unavailable right now",
    platform: "Sketchfab",
    sourceUrl: "https://sketchfab.com/3d-models/notebook-and-pen-dc4c2866a51d4cb78011311dae2fdfa2",
    license: "Creative Commons Attribution",
    category: "Equipment",
    inGameLocation: "Crew Habitat Workstation & Mission Log Desk",
    notes: "Physical analog expedition logbook and stylus on the crew workstation.",
  },
  {
    id: "laptop",
    modelName: "Laptop",
    creator: "Aullwen",
    platform: "Sketchfab",
    sourceUrl: "https://skfb.ly/6RVFt",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    category: "Technology",
    inGameLocation: "Crew Habitat Workstation (Simulated Laptop OS)",
    notes: "Personal computing terminal housing Carl's personal OS, mission logs, and audio notes.",
  },
  {
    id: "photo-frame",
    modelName: "Photo Frame (Low Poly Speed Model)",
    creator: "TheoClarke",
    platform: "Sketchfab",
    sourceUrl: "https://skfb.ly/oNJUU",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    category: "Interior",
    inGameLocation: "Crew Habitat Bunks (Personal Quarters)",
    notes: "Personal crew memento frame situated in the living quarters near the sleep pod.",
  },
  {
    id: "papers-set",
    modelName: "Low-poly Papers Set",
    creator: "Hox_Lira",
    platform: "Sketchfab",
    sourceUrl: "",
    license: "Creative Commons Attribution (CC BY 4.0)",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    category: "Equipment",
    inGameLocation: "Mission Control & Science Lab Desks",
    notes: "Printed technical manifests, flight checklists, and scientific research documentation.",
  },
  {
    id: "terrain-vehicle",
    modelName: "Mars Terrain Vehicle",
    creator: "Unavailable right now",
    platform: "Sketchfab",
    sourceUrl: "",
    license: "Unavailable right now",
    category: "Vehicle",
    inGameLocation: "Surface Outpost Yard & Departure Route (SOL 6, 11)",
    notes: "Heavy pressurized rover used for extended EVA excursions and surface exploration.",
  },
  {
    id: "observation-chair",
    modelName: "Observation Chair",
    creator: "Unavailable right now",
    platform: "Sketchfab",
    sourceUrl: "",
    license: "Unavailable right now",
    category: "Interior",
    inGameLocation: "Mission Control & Science Lab Workstations",
    notes: "Ergonomic operator seating for extended telemetry review and console monitoring.",
  },
];

/**
 * Custom-built architectural modules and environments created specifically for PHOBOSIA.
 * Fully modeled in Blender by Osanda Hirushaka (PHOBOSIA Team).
 */
export const customBuiltAssets: CustomAssetSummary[] = [
  {
    id: "mars-outpost-terrain",
    name: "Mars_Outpost and Terrain",
    module: "Exterior Outpost & Planetary Terrain",
    author: "Osanda Hirushaka (PHOBOSIA Team)",
    software: "Blender 3D & Python DEM Pipeline",
    description: "The complete interconnected Martian surface outpost complex and synthesized 4km x 4km Elysium Planitia terrain mesh, featuring volcanic plains, boulder fields, and modular base architecture.",
    image: "/images/outpost_1.png",
  },
  {
    id: "habitat-zone",
    name: "Crew Habitat Zone",
    module: "Living Quarters",
    author: "Osanda Hirushaka (PHOBOSIA Team)",
    software: "Blender 3D",
    description: "Multi-level cylindrical crew living quarters featuring sleep bunks, hygiene compartments, water/nutrition stations, and personal laptop workstation.",
    image: "/images/habitat_zone.png",
  },
  {
    id: "mission-control",
    name: "Mission Control Center",
    module: "Command & Telemetry",
    author: "Osanda Hirushaka (PHOBOSIA Team)",
    software: "Blender 3D",
    description: "Central command hub housing multi-panel telemetry monitoring banks, communications arrays, orbital tracking consoles, and emergency protocols.",
    image: "/images/mission_control.png",
  },
  {
    id: "science-lab",
    name: "Research & Cultivation Lab",
    module: "Scientific Observation",
    author: "Osanda Hirushaka (PHOBOSIA Team)",
    software: "Blender 3D",
    description: "Specialized planetary geology laboratory, soil spectroscopy station, and dual hydroponic plant cultivation chambers.",
    image: "/images/Science_lab.png",
  },
  {
    id: "engineering-unit",
    name: "Engineering & Power Unit",
    module: "Power & Life Support",
    author: "Osanda Hirushaka (PHOBOSIA Team)",
    software: "Blender 3D",
    description: "Heavy engineering compartment with power distribution grids, life-support machinery, diagnostic workbenches, and spare parts cabinets.",
    image: "/images/engineering_unit.png",
  },
  {
    id: "central-connector",
    name: "Central Hub & Corridor Connectors",
    module: "Structural Circulation",
    author: "Osanda Hirushaka (PHOBOSIA Team)",
    software: "Blender 3D",
    description: "Interconnected pressurized airlock tunnels and octagonal circulation hub uniting all outpost sectors.",
    image: "/images/central_connector.png",
  },
  {
    id: "airlock",
    name: "Airlock & Depressurization Chamber",
    module: "EVA Operations",
    author: "Osanda Hirushaka (PHOBOSIA Team)",
    software: "Blender 3D",
    description: "Industrial double-door airlock system featuring equipment lockers, EVA suit staging racks, and cycling control screens.",
    image: "/images/airlock.png",
  },
  {
    id: "outpost-night-observation",
    name: "Outpost Night Observation & Terrain Investigation",
    module: "Exterior Nocturnal Environment",
    author: "Osanda Hirushaka (PHOBOSIA Team)",
    software: "Blender 3D & WebGL Shaders",
    description: "Atmospheric nocturnal Martian environment and terrain investigation system showcasing high-intensity outpost floodlight banks, sub-zero regolith specular reflection, and night-time planetary observation.",
    image: "/images/outpost_night_observation.png",
  },
];
