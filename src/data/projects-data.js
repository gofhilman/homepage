import shadcnIcon from "../assets/shadcn-ui-seeklogo.svg";
import kestraIcon from "../assets/kestra-plain.svg";
import gcsIcon from "../assets/Cloud_Storage-512-color.svg";
import bigqueryIcon from "../assets/BigQuery-512-color.svg";
import dbtIcon from "../assets/dbt-bit-standalone.png";
import cloudinaryIcon from "../assets/cloudinary_cloud_glyph_regular.svg";

const projects = [
  {
    title: "AI Economic Index",
    description: [
      "Built an end-to-end ELT pipeline ingesting Anthropic's Economic Index from Hugging Face into BigQuery via GCS, orchestrated with Kestra on Docker",
      "Transformed raw data with dbt across staging, intermediate, and marts layers, enriched with GDP, population, and O*NET occupation datasets",
      "Delivered insights via a static Evidence dashboard and a Bruin AI analyst bot in Discord for natural-language queries against live warehouse data",
      "Analyzed five dataset releases to surface automation vs. augmentation trends, occupational AI adoption shifts, and task-level effectiveness metrics",
    ],
    images: [
      "https://res.cloudinary.com/dwyzndpyq/image/upload/q_auto/f_auto/v1775199659/Screenshot_2026-04-03_134257_vzh0it.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/q_auto/f_auto/v1775199659/Screenshot_2026-04-03_135157_grjb3u.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/q_auto/f_auto/v1775199659/Screenshot_2026-04-03_134417_eat17t.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/q_auto/f_auto/v1775199659/Screenshot_2026-04-03_134744_jukjpc.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/q_auto/f_auto/v1775199660/Screenshot_2026-04-03_135742_nqpgfq.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/q_auto/f_auto/v1775203272/portfolio_tftezc.jpg",
    ],
    tools: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Kestra", svg: kestraIcon },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Terraform", icon: "devicon-terraform-plain" },
      { name: "Google Cloud Storage", svg: gcsIcon },
      { name: "BigQuery", svg: bigqueryIcon },
      { name: "dbt", svg: dbtIcon },
    ],
    liveLink: "https://gofhilman.github.io/ai-economic-index/",
    sourceLink: "https://github.com/gofhilman/ai-economic-index",
  },
  {
    title: "Private, Group, and Global Chat App",
    description: [
      "Built a full-stack messaging app with global, private, and group conversations in a responsive mobile-first interface",
      "Implemented JWT authentication, guest access, user profiles, avatar uploads, and image messaging",
      "Added core chat UX features like read tracking, online/offline presence, searchable user discovery, and group creation/editing",
      "Designed the app for reliability with retry-based API/database handling and polling-driven near real-time updates",
    ],
    images: [
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1773848225/Slide1_qcuc55.jpg",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1773849570/Slide4_c20kyd.jpg",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1773848225/Slide2_zu38mw.jpg",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1773849567/Slide3_kwfg9m.jpg",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1773848257/Screenshot_2026-03-18_220853_wiujic.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1773849544/Screenshot_2026-03-18_225825_waebqc.png",
    ],
    tools: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Prisma ORM", icon: "devicon-prisma-original" },
      { name: "Cloudinary", svg: cloudinaryIcon },
      { name: "Passport.js", icon: "devicon-passport-plain" },
      { name: "React Router", icon: "devicon-reactrouter-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
      { name: "Vite", icon: "devicon-vitejs-plain" },
      { name: "shadcn/ui", svg: shadcnIcon },
      { name: "Motion", icon: "devicon-framermotion-original" },
    ],
    liveLink: "https://secrechat.pages.dev/",
    sourceLink: "https://github.com/gofhilman/messaging-app",
  },
  {
    title: "Where's Scorpion?",
    description: [
      "Engineered a React 19/Node.js web game with backend-authoritative hit validation to prevent client-side tampering.",
      "Utilized relative percentage coordinates (0-100) for cross-device hit-box accuracy and responsive progress marking.",
      "Developed stateless session persistence via JWT, allowing players to resume active runs without account creation.",
      "Architected a PostgreSQL/Prisma backend for real-time game tracking, random target generation, and global leaderboards.",
    ],
    images: [
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1772286862/Screenshot_2026-02-28_205358_f4vftg.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1772286886/Screenshot_2026-02-28_205240_zxc6qk.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/q_auto/f_auto/v1775215078/where_s_scorpion_w7q0sf.jpg",
    ],
    tools: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Prisma ORM", icon: "devicon-prisma-original" },
      { name: "Passport.js", icon: "devicon-passport-plain" },
      { name: "React Router", icon: "devicon-reactrouter-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
      { name: "Vite", icon: "devicon-vitejs-plain" },
      { name: "shadcn/ui", svg: shadcnIcon },
    ],
    liveLink: "https://where-s-scorpion.pages.dev/",
    sourceLink: "https://github.com/gofhilman/where-s-scorpion",
  },
];

export default projects;
