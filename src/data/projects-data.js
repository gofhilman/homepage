import shadcnIcon from "../assets/shadcn-ui-seeklogo.svg";
import kestraIcon from "../assets/kestra-plain.svg";
import gcsIcon from "../assets/Cloud_Storage-512-color.svg";
import bigqueryIcon from "../assets/BigQuery-512-color.svg";
import dbtIcon from "../assets/dbt-bit-standalone.png";
import evidenceIcon from "../assets/idbTm7Pupt_logos.jpeg"

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
    liveLink: "https://where-s-scorpion.pages.dev/",
    sourceLink: "https://github.com/gofhilman/where-s-scorpion",
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
  {
    title: "Photo Tagging App",
    description: `A hidden-object web game inspired by photo tagging mechanics,
built around Gus Morais' Mortal Kombat artwork. It combines simple
click-to-tag play with backend validation, session persistence via
JWT, and a leaderboard for fastest runs, offering a lightweight
but competitive experience.`,
    images: [
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1772286862/Screenshot_2026-02-28_205358_f4vftg.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1772286886/Screenshot_2026-02-28_205240_zxc6qk.png",
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
  {
    title: "Shopping Cart",
    description: `A mock shopping website built as a Single-Page Application (SPA)
using React Router. Users can browse products, add them to a cart,
and simulate a shopping experience. The app features a responsive
design and a user-friendly interface.`,
    images: [
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1757752826/22_mx9z69.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1771234562/Screenshot_2026-02-16_163534_jpe86x.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1771234561/Screenshot_2026-02-16_163147_wgekiw.png",
    ],
    tools: [
      { name: "React Router", icon: "devicon-reactrouter-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
      { name: "Vite", icon: "devicon-vitejs-plain" },
      { name: "Vitest", icon: "devicon-vitest-plain" },
      { name: "shadcn/ui", svg: shadcnIcon },
    ],
    liveLink: "https://shopping-cart-b3g.pages.dev/",
    sourceLink: "https://github.com/gofhilman/shopping-cart",
  },
  {
    title: "Battleship Game",
    description: `The Battleship Game is a classic strategy game implemented as a
web application. Players can compete against a computer or another
human player by strategically placing their ships on a grid and
taking turns to attack the opponent's grid. The game ends when all
ships of one player are sunk.`,
    images: [
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1757752823/18_n0eokh.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1771236867/Screenshot_2026-02-16_171147_kafyvo.png",
      "https://res.cloudinary.com/dwyzndpyq/image/upload/v1771236866/Screenshot_2026-02-16_171401_gpcipq.png",
    ],
    tools: [
      { name: "Jest", icon: "devicon-jest-plain" },
      { name: "Webpack", icon: "devicon-webpack-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    liveLink: "https://gofhilman.github.io/battleship/",
    sourceLink: "https://github.com/gofhilman/battleship",
  },
];

export default projects;
