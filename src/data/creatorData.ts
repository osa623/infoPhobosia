export interface DeveloperProfile {
  name: string;
  fullName: string;
  role: string;
  discipline: string;
  email: string;
  githubUrl: string;
  githubUsername: string;
  repoUrl: string;
  linkedinUrl: string;
  linkedinUsername: string;
  location: string;
  portraitImage: string;
  bio: string[];
  developmentTimeline: string;
  technicalCapabilities: {
    category: string;
    skills: string[];
  }[];
  keyAchievements: string[];
}

export const creatorData: DeveloperProfile = {
  name: "Osanda Hirushaka",
  fullName: "Osanda Muthukumarana",
  role: "Software Engineer & 3D Technical Artist",
  discipline: "Software Engineering & Computer Graphics",
  email: "osandam23@gmail.com",
  githubUrl: "https://github.com/osa623",
  githubUsername: "osa623",
  repoUrl: "https://github.com/osa623/Phobosia-Martian-exploration-experience-powered-by-NASA-Data",
  linkedinUrl: "https://www.linkedin.com/in/osanda623",
  linkedinUsername: "osanda623",
  location: "Sri Lanka",
  portraitImage: "/images/creator_portrait.jpg",
  bio: [
    "Osanda Hirushaka is a software engineer and 3D technical artist from Sri Lanka specializing in interactive 3D web applications, real-time computer graphics, and full-stack software architecture.",
    "Driven by a fascination with aerospace engineering, planetary sciences, and real-time WebGL graphics, Osanda conceived, engineered, and modeled PHOBOSIA from Sri Lanka as an ambitious demonstration of what modern browser-based 3D engines can achieve when powered by authentic planetary data.",
    "Over an intensive ~2.5 month development timeframe, Osanda single-handedly authored all primary 3D architectural modules in Blender from scratch, engineered the Python DEM geospatial data pipeline, implemented the First-Person controller and collision physics, and structured the comprehensive SOL 1–11 mission progression system.",
    "His technical focus bridges modern web engineering (Next.js, TypeScript, React) with high-performance real-time 3D graphics (Three.js, GLSL shaders, Blender 3D, GPU instancing) to build immersive interactive digital worlds."
  ],
  developmentTimeline: "Approximately 2.5 months of dedicated design, 3D modeling, coding, and optimization.",
  technicalCapabilities: [
    {
      category: "Real-time 3D & Graphics",
      skills: ["Three.js", "WebGL", "GLSL Shaders", "GPU Instancing", "Blender 3D Modeling", "PBR Texture Baking", "Draco Geometry Compression"]
    },
    {
      category: "Frontend & Architecture",
      skills: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "State Machine Architecture", "Web Audio API"]
    },
    {
      category: "Geospatial & Scientific Data",
      skills: ["Python GDAL & Rasterio", "NumPy", "NASA PDS IMG/JP2 Processing", "DEM Elevation Analysis", "Slope Gradient Mapping"]
    },
    {
      category: "Engineering & Tooling",
      skills: ["Git / GitHub LFS", "Vite", "Node.js", "UI/UX System Design", "Performance Profiling (Chrome DevTools / Spector.js)"]
    }
  ],
  keyAchievements: [
    "Modeled five comprehensive, interconnected sci-fi outpost modules and the airlock system from scratch in Blender without off-the-shelf architectural kits.",
    "Created an automated geospatial pipeline that transforms multi-hundred-megabyte NASA HiRISE terrain models into lightweight, responsive WebGL geometry.",
    "Engineered a scalable mission system featuring 11 distinct SOL narratives, authentic interactive consoles, and real-time screen rendering.",
    "Optimized complex 3D scenes with 100,000+ procedural rocks and dynamic PBR materials to run smoothly at 60 FPS on modest NVIDIA MX350 mobile GPUs."
  ]
};
