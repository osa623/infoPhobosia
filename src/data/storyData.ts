export interface AstronautStory {
  characterName: string;
  callsign: string;
  role: string;
  age: number;
  gender: string;
  heritage: string;
  citizenship: string;
  heritageNotes: string;
  educationalPath: string;
  expeditionRole: string;
  characterBio: string[];
  departureNarrative: string;
  incomingTransmission: {
    sender: string;
    origin: string;
    destination: string;
    summary: string;
  };
  timelineVerificationNote: string;
}

export const storyData: AstronautStory = {
  characterName: "Carl Ashwindu",
  callsign: "Explorer-01",
  role: "Lead Expedition Astronaut & Field Observer",
  age: 35,
  gender: "Male",
  heritage: "Sri Lankan heritage / background",
  citizenship: "American citizen",
  heritageNotes: "Carl's background reflects proud Sri Lankan ancestry and roots (🇱🇰), paired with American citizenship. This heritage is personal character lore and does not imply official nation-state or agency mission affiliation.",
  educationalPath: "Raised and educated at an American school during his youth, Carl subsequently pursued higher university studies in aerospace engineering and planetary geological science before qualifying for the long-duration Mars surface expedition at age 35.",
  expeditionRole: "Sole initial occupant of PHOBOSIA Outpost across SOL 1 to SOL 11, tasked with conducting initial base activation, baseline habitat life-support verification, scientific geological target analysis, drone reconnaissance flights, and Martian surface soil sampling.",
  characterBio: [
    "Carl Ashwindu represents the solitary human observer stationed on the unforgiving red plains of Elysium Planitia. Standing within the pressurized corridors of PHOBOSIA Outpost, Carl embodies the balance between rigorous scientific discipline and the profound psychological isolation of interplanetary living.",
    "Across eleven critical SOLs, Carl maintains the outpost's systems: measuring atmospheric variations, inspecting hydroponic growth chambers, analyzing rock spectroscopy in the science lab, and suiting up for lone EVAs into ancient Martian channels.",
    "His thoughts and reflections are recorded in daily expedition audio logs and personal workstation journal entries, revealing a steadfast explorer deeply moved by the silent beauty and immense solitude of Mars."
  ],
  departureNarrative: "On SOL 11, Carl receives an incoming transmission from astronaut Selina, who has departed from Deimosian Outpost and is traveling towards PHOBOSIA Outpost across several hours. Following mission protocols, Carl does not await her arrival; instead, he files the final expedition log at Mission Control, dons his EVA suit, enters the assigned surface vehicle, and traverses the 200-meter departure route to begin his journey towards the next outpost.",
  incomingTransmission: {
    sender: "Selina",
    origin: "Deimosian Outpost",
    destination: "PHOBOSIA Outpost",
    summary: "In-transit dispatch alerting Carl that her transfer voyage is underway. Her transit will take several hours. This message sets the stage for Carl's scheduled departure and handover."
  },
  timelineVerificationNote: "Note: In-game calendar dates and specific orbital launch/arrival timecodes are subject to final project confirmation. Narrative events are presented in chronological SOL order (SOL 1 through SOL 11) reflecting the verified in-game mission architecture."
};
