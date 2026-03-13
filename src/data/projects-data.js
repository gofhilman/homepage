import shadcnIcon from "../assets/shadcn-ui-seeklogo.svg";

const projects = [
  {
    id: "photo-tagging",
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
    id: "shopping-cart",
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
    id: "battleship",
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
