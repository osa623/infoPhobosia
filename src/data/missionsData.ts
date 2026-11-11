// Authoritative SOL 1-11 Mission Data
// Sourced directly from PHOBOSIA mission specifications and JSON files

export interface SolMission {
  sol: number;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  purpose: string;
  primaryObjective: string;
  storyContext: string;
  tasks: string[];
  screens: string[];
  interactions: string[];
  whatYouLearn: string;
  expectedOutput: string;
}

export const missionsData: SolMission[] = [
  {
    "sol": 1,
    "title": "Base Orientation",
    "subtitle": "Base Familiarization & System Onboarding",
    "category": "Orientation & Setup",
    "location": "Central Hub & Living Modules",
    "purpose": "Introduce the player to the base, first-person controls and established connected modules without an overly long tutorial.",
    "primaryObjective": "Complete a basic base-orientation checklist by visiting/inspecting designated existing orientation points.",
    "storyContext": "The mission begins at the existing spawn point. The player receives an orientation briefing before beginning the first operational day.",
    "tasks": [
      "Review movement and interaction controls",
      "Explore the Central Hub",
      "Identify the main work areas",
      "Confirm base orientation"
    ],
    "screens": [
      "Life Support Display",
      "Crew Workstation",
      "Central Hub Status Monitor"
    ],
    "interactions": [
      "Press 'E' to inspect monitors",
      "Navigate corridors",
      "Acknowledge orientation briefing"
    ],
    "whatYouLearn": "How the outpost modules link together, how life-support telemetry is monitored, and how to operate the first-person control system.",
    "expectedOutput": "Completed orientation log and verified habitat operational clearance."
  },
  {
    "sol": 2,
    "title": "Outpost Readiness",
    "subtitle": "A systematic inspection of the Mars outpost.",
    "category": "Outpost Operations",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Inspect the Habitat and Engineering systems through their designated physical consoles. Review operational procedures, investigate detailed system logs, identify warnings, and submit an evidence-supported readiness report.",
    "primaryObjective": "Inspect the Habitat and Engineering systems through their designated physical consoles. Review operational procedures, investigate detailed system logs, identify warnings, and submit an evidence-supported readiness report.",
    "storyContext": "Inspect the Habitat and Engineering systems through their designated physical consoles. Review operational procedures, investigate detailed system logs, identify warnings, and submit an evidence-supported readiness report.",
    "tasks": [
      "Review Habitat Status, Life Support, and Emergency Information",
      "Inspect Water and Nutrition Systems",
      "Inspect Engineering Monitoring",
      "Investigate the Power Unit",
      "Inspect Engineering Life Support",
      "Review Engineering Diagnostics",
      "Submit Outpost Readiness Assessment"
    ],
    "screens": [
      "Habitat Main Monitor",
      "Engineering Power Relay",
      "Mission Control Status Console"
    ],
    "interactions": [
      "Power relay activation",
      "Habitat diagnostics check",
      "Console confirmation"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 2, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 3."
  },
  {
    "sol": 3,
    "title": "Scientific Target Selection",
    "subtitle": "Select a Mars observation target and establish a research objective.",
    "category": "Scientific Research",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Use Mission Control and Science Lab interfaces to review available Mars observation sites, examine operational constraints, select a scientific target, evaluate available datasets, and submit a justified observation proposal.",
    "primaryObjective": "Use Mission Control and Science Lab interfaces to review available Mars observation sites, examine operational constraints, select a scientific target, evaluate available datasets, and submit a justified observation proposal.",
    "storyContext": "Use Mission Control and Science Lab interfaces to review available Mars observation sites, examine operational constraints, select a scientific target, evaluate available datasets, and submit a justified observation proposal.",
    "tasks": [
      "Review Mission Objectives and Outpost Status",
      "Explore Mars Observation Sites",
      "Review Communications and Operational Constraints",
      "Select a Proposed Scientific Target",
      "Investigate and Select a Scientific Dataset",
      "Submit the Scientific Observation Proposal"
    ],
    "screens": [
      "Research Zone Target Selector",
      "Spectroscopy Analyzer",
      "Orbital Mapping Terminal"
    ],
    "interactions": [
      "Select geological target sites",
      "Spectroscopic data filtering",
      "Target coordinate tagging"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 3, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 4."
  },
  {
    "sol": 4,
    "title": "Selected Target Investigation and Drone Mission Preparation",
    "subtitle": "Investigate the selected Mars target and prepare the drone for the next observation mission.",
    "category": "Scientific Research",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Conduct a detailed scientific investigation of the target selected during Sol 3. Review available scientific records, historical observations, terrain information, operational constraints, and relevant mission logs through Mission Control and Science...",
    "primaryObjective": "Conduct a detailed scientific investigation of the target selected during Sol 3. Review available scientific records, historical observations, terrain information, operational constraints, and relevant mission logs through Mission Control and Science Lab interfaces. Physically visit the Drone Section to inspect the existing drone and verify its visible preparation state. Submit a preliminary terrain assessment and a preparation report for the Sol 5 aerial reconnaissance mission.",
    "storyContext": "Conduct a detailed scientific investigation of the target selected during Sol 3. Review available scientific records, historical observations, terrain information, operational constraints, and relevant mission logs through Mission Control and Science Lab interfaces. Physically visit the Drone Section to inspect the existing drone and verify its visible preparation state. Submit a preliminary terrain assessment and a preparation report for the Sol 5 aerial reconnaissance mission.",
    "tasks": [
      "Review Sol 4 Mission Objectives",
      "Investigate the Selected Observation Target",
      "Review Terrain and Scientific Dataset Evidence",
      "Visit and Inspect the Drone",
      "Prepare the Sol 5 Drone Observation Plan",
      "Submit the Preliminary Terrain Assessment and Mission Preparation Report"
    ],
    "screens": [
      "Engineering Drone Flight Config",
      "Target Telemetry Screen",
      "Diagnostic Bench"
    ],
    "interactions": [
      "Drone battery calibration",
      "Flight route waypoint programming",
      "Telemetry verification"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 4, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 5."
  },
  {
    "sol": 5,
    "title": "Aerial Reconnaissance",
    "subtitle": "Drone-Based Target and Route Investigation",
    "category": "Field Exploration & Recon",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Conduct an aerial reconnaissance mission over the previously selected observation target. Use the existing drone to inspect the target approach route, capture aerial evidence, and prepare observations for the ground investigation on Sol 6.",
    "primaryObjective": "Conduct an aerial reconnaissance mission over the previously selected observation target. Use the existing drone to inspect the target approach route, capture aerial evidence, and prepare observations for the ground investigation on Sol 6.",
    "storyContext": "Conduct an aerial reconnaissance mission over the previously selected observation target. Use the existing drone to inspect the target approach route, capture aerial evidence, and prepare observations for the ground investigation on Sol 6.",
    "tasks": [
      "Complete Drone Flight Operations Briefing",
      "Activate Drone Reconnaissance Simulation",
      "Inspect the Officially Selected Target",
      "Return and Safely Land the Drone",
      "Review Target-Specific Evidence",
      "Submit Sol 5 Aerial Reconnaissance Report"
    ],
    "screens": [
      "Drone Remote Flight HUD",
      "Live Aerial Downlink Screen",
      "Geological Waypoint Monitor"
    ],
    "interactions": [
      "Drone launch trigger",
      "Aerial camera pan/tilt controls",
      "Elevation contour scan"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 5, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 6."
  },
  {
    "sol": 6,
    "title": "Mars Surface Field Investigation",
    "subtitle": "Ground-Level Geological Observation, Soil Sampling and Laboratory Analysis",
    "category": "Field Exploration & Recon",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Continue investigating the exact target selected in Sol 3 and studied in Sols 4 and 5. Travel on foot to the target, record ground-level geological observations, collect and secure one soil/regolith sample, return through the existing Airlock, analys...",
    "primaryObjective": "Continue investigating the exact target selected in Sol 3 and studied in Sols 4 and 5. Travel on foot to the target, record ground-level geological observations, collect and secure one soil/regolith sample, return through the existing Airlock, analyse the sample in the Science Lab and start a cultivation experiment whose result remains pending until Sol 8.",
    "storyContext": "Continue investigating the exact target selected in Sol 3 and studied in Sols 4 and 5. Travel on foot to the target, record ground-level geological observations, collect and secure one soil/regolith sample, return through the existing Airlock, analyse the sample in the Science Lab and start a cultivation experiment whose result remains pending until Sol 8.",
    "tasks": [
      "Review Surface Investigation Briefing",
      "Prepare Geological Field Equipment",
      "Prepare for Mars Surface Exploration",
      "Reach the Selected Investigation Target",
      "Conduct Ground-Level Geological Observations",
      "Collect and Secure a Soil Sample",
      "Return to the Airlock",
      "Complete Airlock Entry and Remove EVA Suit",
      "Transfer Sample to the Science Lab",
      "Perform Preliminary Sample Analysis",
      "Initiate Soil Cultivation Experiment",
      "Submit Sol 6 Surface Investigation Report"
    ],
    "screens": [
      "Airlock Depressurization Console",
      "EVA Suit HUD",
      "Portable Soil Analyzer"
    ],
    "interactions": [
      "Don EVA suit in airlock",
      "Depressurize airlock cycle",
      "Surface traverse & sample collection"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 6, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 7."
  },
  {
    "sol": 7,
    "title": "Mars Outpost Dust Storm Emergency Assessment",
    "subtitle": "Emergency Monitoring, Power-System Assessment and Outpost Impact Report",
    "category": "Hazard Response & Recovery",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Respond to a Sol 7 dust storm by reviewing the alert and assessing each outpost section, power generation, reserves, distribution, communications, navigation, life-support and science availability. Preserve all prior Sol progress, target history, evi...",
    "primaryObjective": "Respond to a Sol 7 dust storm by reviewing the alert and assessing each outpost section, power generation, reserves, distribution, communications, navigation, life-support and science availability. Preserve all prior Sol progress, target history, evidence, sample and cultivation records. This is assessment only; do not implement the three reserved Sol 8 repair triggers.",
    "storyContext": "Respond to a Sol 7 dust storm by reviewing the alert and assessing each outpost section, power generation, reserves, distribution, communications, navigation, life-support and science availability. Preserve all prior Sol progress, target history, evidence, sample and cultivation records. This is assessment only; do not implement the three reserved Sol 8 repair triggers.",
    "tasks": [
      "Review Dust Storm Emergency Alert",
      "Assess Mission Control Systems",
      "Review Outpost-Wide Status and Power Distribution",
      "Verify Airlock and Surface Access Lockdown",
      "Assess Science and Cultivation Power Availability",
      "Assess Solar Generation and Outpost Power Systems",
      "Submit Final Dust Storm Impact Report"
    ],
    "screens": [
      "Severe Weather Alert System",
      "Structural Integrity Monitor",
      "Emergency Power Bus"
    ],
    "interactions": [
      "Emergency seal airlock doors",
      "Transfer non-critical loads to backup batteries",
      "Atmospheric pressure checks"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 7, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 8."
  },
  {
    "sol": 8,
    "title": "Mars Outpost Power and Communication Recovery",
    "subtitle": "Solar Array Restoration and Communication Network Repair",
    "category": "Hazard Response & Recovery",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Restore the outpost solar power system after the Sol 7 dust storm, recover the main power supply, and independently repair the external communication system. Use interactive electrical repair simulations at the existing outdoor repair triggers.",
    "primaryObjective": "Restore the outpost solar power system after the Sol 7 dust storm, recover the main power supply, and independently repair the external communication system. Use interactive electrical repair simulations at the existing outdoor repair triggers.",
    "storyContext": "Restore the outpost solar power system after the Sol 7 dust storm, recover the main power supply, and independently repair the external communication system. Use interactive electrical repair simulations at the existing outdoor repair triggers.",
    "tasks": [
      "Review Critical Power Failure",
      "Inspect Engineering Power Unit",
      "Inspect Communication Failure",
      "Prepare for External Repairs",
      "Restore Solar Panel A",
      "Restore Solar Panel B",
      "Repair Main Solar Power Connection",
      "Restore Main Outpost Power",
      "Restore External Communication",
      "Verify Recovery and Submit Report"
    ],
    "screens": [
      "External Solar Panel Bus",
      "High-Gain Communications Console",
      "Auxiliary Battery Monitor"
    ],
    "interactions": [
      "Clear solar array telemetry faults",
      "Realign high-gain dish",
      "Restore communications relay"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 8, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 9."
  },
  {
    "sol": 9,
    "title": "Cultivation Assessment & Water System Recovery",
    "subtitle": "Restoring the Outpost Water Supply and Verifying the Cultivation Experiment",
    "category": "Life Support & Ecology",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Investigate the water-system condition following the SOL 7 dust storm, restore the main water supply where required, inspect the two cultivation racks, verify irrigation and nutrient distribution, and review the cultivation experiment initiated durin...",
    "primaryObjective": "Investigate the water-system condition following the SOL 7 dust storm, restore the main water supply where required, inspect the two cultivation racks, verify irrigation and nutrient distribution, and review the cultivation experiment initiated during SOL 6.",
    "storyContext": "Investigate the water-system condition following the SOL 7 dust storm, restore the main water supply where required, inspect the two cultivation racks, verify irrigation and nutrient distribution, and review the cultivation experiment initiated during SOL 6.",
    "tasks": [
      "Inspect Habitat Water and Nutrient Reserves",
      "Review the Cultivation Experiment",
      "Inspect Cultivation Rack 01",
      "Inspect Cultivation Rack 02",
      "Diagnose the Main Water Supply",
      "Restore the Main Water Supply",
      "Verify Cultivation Irrigation",
      "Verify Nutrient Distribution",
      "Review Cultivation and Water-System Evidence",
      "Submit the SOL 9 Report"
    ],
    "screens": [
      "Cultivation Chamber A/B HUD",
      "Hydroponic Nutrient Console",
      "Greywater Filtration Monitor"
    ],
    "interactions": [
      "Inspect hydroponic biomass",
      "Calibrate nutrient solution pH",
      "Water filtration cycle restart"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 9, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 10."
  },
  {
    "sol": 10,
    "title": "Final Expedition Verification & Scientific Handover",
    "subtitle": "Verifying Phase One Records and Preparing the Outpost for the Next Crew",
    "category": "Mission Handover & Departure",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "Conduct the final verification of the Phase One Mars expedition. Review the existing records, evidence, observations and operational information collected during SOL 1 through SOL 9. Visit the relevant existing outpost sections and inspect their regi...",
    "primaryObjective": "Conduct the final verification of the Phase One Mars expedition. Review the existing records, evidence, observations and operational information collected during SOL 1 through SOL 9. Visit the relevant existing outpost sections and inspect their registered physical interaction points. Identify whether each applicable record is consistent, incomplete, inconsistent or requires further investigation. Review the individual SOL reports, compare related scientific records, preserve the relationships between scientific targets, soil samples, cultivation experiments, environmental and emission-control records, and equipment records. Finally, prepare and submit a comprehensive Phase One Final Expedition Report for the incoming astronaut and future expedition operations.",
    "storyContext": "Conduct the final verification of the Phase One Mars expedition. Review the existing records, evidence, observations and operational information collected during SOL 1 through SOL 9. Visit the relevant existing outpost sections and inspect their registered physical interaction points. Identify whether each applicable record is consistent, incomplete, inconsistent or requires further investigation. Review the individual SOL reports, compare related scientific records, preserve the relationships between scientific targets, soil samples, cultivation experiments, environmental and emission-control records, and equipment records. Finally, prepare and submit a comprehensive Phase One Final Expedition Report for the incoming astronaut and future expedition operations.",
    "tasks": [
      "Open the Phase One Expedition Archive",
      "Review Individual SOL Reports",
      "Verify Habitat Main Monitor Status",
      "Verify Water and Nutrition Status",
      "Verify Engineering Monitoring Status",
      "Verify Power Unit Status",
      "Verify Engineering Life Support Status",
      "Verify Diagnostics Workbench Status",
      "Verify Storage and Inventory Status",
      "Verify Research Monitoring Status",
      "Verify Scientific Analysis Status",
      "Verify Seed Storage Status",
      "Verify Water and Nutrition Mixing Status",
      "Verify Water Quality and Service Status",
      "Verify Cultivation Environment Status",
      "Verify Mission Control Main Section Status",
      "Verify Communications and Systems Status",
      "Verify Navigation and Observation Sites Status",
      "Verify Environment Status Status",
      "Verify Internal Communications Status",
      "Verify Module Status Status",
      "Verify Airlock Control Console Status",
      "Verify Solar Panel A Repair Status",
      "Verify Solar Panel B Repair Status",
      "Verify Main Solar Connection Repair Status",
      "Verify External Communication Repair Status",
      "Verify Existing Outpost Section Records",
      "Verify Scientific Targets and Observations",
      "Verify Soil Sample Provenance and Cultivation Records",
      "Verify Environmental, Emission-Control and Equipment Records",
      "Perform Cross-SOL Record Comparison",
      "Review Verification Results and Outstanding Issues",
      "Generate the Phase One Final Expedition Report",
      "Prepare the Incoming Crew Handover",
      "Submit the Phase One Final Expedition Report"
    ],
    "screens": [
      "Scientific Telemetry Archive",
      "Expedition Log Terminal",
      "Handover Cryptographic Uplink"
    ],
    "interactions": [
      "Compile 10-sol scientific dossier",
      "Encrypt telemetry archive",
      "Prepare outpost for next crew"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 10, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL 11."
  },
  {
    "sol": 11,
    "title": "SOL 11 - Final Farewell",
    "subtitle": "The Final Departure",
    "category": "Mission Handover & Departure",
    "location": "PHOBOSIA Outpost Complex",
    "purpose": "The final day at PHOBOSIA Outpost. The player receives an incoming message from Selina, an astronaut who has departed from Deimosian Outpost and is travelling towards PHOBOSIA Outpost. Her journey will take several hours. The player does not wait for...",
    "primaryObjective": "The final day at PHOBOSIA Outpost. The player receives an incoming message from Selina, an astronaut who has departed from Deimosian Outpost and is travelling towards PHOBOSIA Outpost. Her journey will take several hours. The player does not wait for her arrival. After acknowledging the message, the player writes the final expedition log at Mission Control, prepares for the final EVA, collects the existing EVA suit, enters the assigned vehicle and follows a visible 200-metre departure route towards an unnamed outpost. The final route ends the playable outpost scene and triggers the mandatory final cinematic.",
    "storyContext": "The final day at PHOBOSIA Outpost. The player receives an incoming message from Selina, an astronaut who has departed from Deimosian Outpost and is travelling towards PHOBOSIA Outpost. Her journey will take several hours. The player does not wait for her arrival. After acknowledging the message, the player writes the final expedition log at Mission Control, prepares for the final EVA, collects the existing EVA suit, enters the assigned vehicle and follows a visible 200-metre departure route towards an unnamed outpost. The final route ends the playable outpost scene and triggers the mandatory final cinematic.",
    "tasks": [
      "Receive Selina's Message",
      "Write the Final Mission Log",
      "Prepare for the Final EVA",
      "Enter Your Expedition Vehicle",
      "The Final 200 Metres",
      "Final Farewell"
    ],
    "screens": [
      "Mission Control Comm Terminal",
      "EVA Preparation Console",
      "Vehicle Ignition & Navigation HUD"
    ],
    "interactions": [
      "Acknowledge Selina's incoming dispatch",
      "Submit final expedition log",
      "Suit up, enter vehicle & traverse 200m"
    ],
    "whatYouLearn": "Planetary outpost operational procedures, scientific workflow principles for SOL 11, and practical telemetry validation.",
    "expectedOutput": "Verified mission checklist, validated telemetry records, and progression clearance for SOL Final Departure."
  }
];
