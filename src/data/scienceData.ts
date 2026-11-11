export interface DatasetReference {
  id: string;
  name: string;
  instrument: string;
  mission: string;
  resolution: string;
  productId: string;
  targetRegion: string;
  coordinates: string;
  roleInProject: string;
  sourceUrl?: string;
  notes: string;
}

export interface TerrainPipelineStep {
  stepNumber: number;
  title: string;
  technology: string;
  description: string;
  input: string;
  output: string;
}

export const scienceData = {
  region: {
    name: "Elysium Planitia",
    context: "Near InSight Lander landing region",
    coordinates: "4.5° N, 135.9° E",
    elevationBaseline: "~ -2,600 m relative to Martian datum",
    geologicalFeatures: [
      "Vast volcanic plains formed by low-viscosity basaltic lava flows",
      "Network of ancient shallow sinuous channels and tectonic wrinkle ridges",
      "Low-slope, smooth expanses optimal for simulated surface outpost placement",
      "Scattered impact craters with exposed subsurface regolith ejecta blankets"
    ]
  },
  datasets: [
    {
      id: "hirise-elysium-channel",
      name: "HiRISE DTM — Small Channel in Elysium Planitia",
      instrument: "HiRISE (High Resolution Imaging Science Experiment)",
      mission: "Mars Reconnaissance Orbiter (MRO) / NASA / JPL / Univ. of Arizona",
      resolution: "1.0 m / pixel elevation grid, 0.25 m / pixel ortho-image",
      productId: "DTEEC_017983_1865_017838_1865_A01 / ESP_017983_1865",
      targetRegion: "Elysium Planitia",
      coordinates: "Near 6.5° N, 150.2° E",
      roleInProject: "Primary elevation model source for local terrain micro-relief, channel slopes, and rock hazard distribution in SOL 1–2.",
      sourceUrl: "https://hirise.lpl.arizona.edu",
      notes: "Verified against actual project raw data file: DTEEC_017983_1865_017838_1865_A01.IMG (694 MB) in D:\\Mars_Project."
    },
    {
      id: "hirise-crater",
      name: "HiRISE DTM — Breached Impact Crater",
      instrument: "HiRISE (High Resolution Imaging Science Experiment)",
      mission: "Mars Reconnaissance Orbiter (MRO) / NASA / JPL / Univ. of Arizona",
      resolution: "1.0 m / pixel DTM, 0.25 m / pixel Ortho image",
      productId: "DTEEC_004151_1810_020963_1810_U01 / PSP_004151_1810",
      targetRegion: "Cerberus Fossae / Elysium Border",
      coordinates: "Near 1.0° N, 159.0° E",
      roleInProject: "Elevation and slope model for crater wall traverse, boulder scatter, and geological sampling in SOL 6 EVA.",
      sourceUrl: "https://hirise.lpl.arizona.edu",
      notes: "Verified against actual project raw data file: DTEEC_004151_1810_020963_1810_U01.IMG (561 MB) in D:\\Mars_Project."
    },
    {
      id: "mola-dem",
      name: "MOLA Global Topographic Elevation Model",
      instrument: "MOLA (Mars Orbiter Laser Altimeter)",
      mission: "Mars Global Surveyor (MGS) / NASA / USGS Astrogeology",
      resolution: "128 pixels / degree (~463 m / pixel)",
      productId: "MOLA MEGDR Global Topography",
      targetRegion: "Global Martian Surface & Elysium Basin",
      coordinates: "Global coverage",
      roleInProject: "Broad topographic context, baseline regional gradient, and distant horizon mountain silhouette profiling.",
      sourceUrl: "https://astrogeology.usgs.gov",
      notes: "Used as large-scale contextual boundary to ensure regional slopes reflect genuine Martian macro-geography."
    }
  ] as DatasetReference[],
  pipelineSteps: [
    {
      stepNumber: 1,
      title: "Raw Data Ingestion & Clipping",
      technology: "Python / Rasterio / GDAL",
      description: "NASA PDS IMG/JP2 raster elevation products (DTEEC) are ingested. A 4 km x 4 km bounding box centered on a smooth landing terrace is extracted to prevent unnecessary memory bloat.",
      input: "Multi-hundred megabyte NASA HiRISE PDS IMG file",
      output: "Cropped 32-bit floating point GeoTIFF elevation array"
    },
    {
      stepNumber: 2,
      title: "Slope & Hazard Classification",
      technology: "Python / NumPy / SciPy",
      description: "Calculates local terrain gradients (degrees of incline). Flags zones exceeding 15° as traverse hazards, and isolates a ~400 m x 400 m low-slope pad (<3° incline) suitable for base placement.",
      input: "GeoTIFF elevation raster",
      output: "Slope gradient map and base suitability mask"
    },
    {
      stepNumber: 3,
      title: "Procedural Scripted Mesh Synthesis",
      technology: "Blender Python API (bpy)",
      description: "Generates high-precision terrain geometry programmatically via Python script rather than manual sculpting. Natural erosion terraces, micro-dunes, and bedrock fissures are synthesized based on actual elevation deltas.",
      input: "Resampled height matrix + slope mask",
      output: "Optimized multi-resolution quad mesh in Blender"
    },
    {
      stepNumber: 4,
      title: "Procedural Rock Scatter & Map Generation",
      technology: "Python NumPy Array (.npz)",
      description: "Distributes thousands of rocks across the terrain adhering to power-law size-frequency distributions observed by Viking and InSight missions. Data saved as fast binary npz matrices (verified: PHOBOSIA_2km_rocks.npz, PHOBOSIA_10k_rocks.npz).",
      input: "Elevation heightfield & InSight rock-frequency curve",
      output: "Compressed 10k–100k rock coordinate & scale arrays"
    },
    {
      stepNumber: 5,
      title: "GPU Instancing & WebGL Optimization",
      technology: "Three.js / InstancedMesh / Draco Compression",
      description: "Exports terrain as Draco-compressed GLB chunks (~100 MB total compressed to lean streaming chunks). Thousands of rocks are rendered using hardware GPU instancing with zero CPU per-instance overhead, maintaining smooth 60 FPS on modest MX350 GPUs.",
      input: "Blender mesh + npz transform matrices",
      output: "Interactive, real-time 3D Mars terrain in the browser"
    }
  ] as TerrainPipelineStep[],
  transparencyPrinciples: [
    {
      title: "Empirical NASA Data",
      description: "Elevation matrices, crater contours, regional slope gradients, and orbital reference coordinates derived from published NASA/JPL/HiRISE/MOLA data products.",
      badge: "Scientific Baseline"
    },
    {
      title: "Scripted Geological Synthesis",
      description: "Micro-scale surface textures, sub-meter sand ripple waves, and rock scatter density synthesized algorithmically to reflect Martian regolith studies without inflating file sizes.",
      badge: "Procedural Generation"
    },
    {
      title: "Fictional Narrative Setting",
      description: "The PHOBOSIA Outpost structure, expedition storylines, Carl Ashwindu's character journey, and console interactive games are creative narrative elements designed to provide context for exploration.",
      badge: "Fictional Creative Work"
    },
    {
      title: "Simulated Telemetry",
      description: "Atmospheric pressure (0.61 kPa), oxygen levels, battery charge watt-hours, and greenhouse transpiration numbers are interactive gameplay simulations, not live Martian telemetry.",
      badge: "Telemetry Simulation"
    }
  ]
};
