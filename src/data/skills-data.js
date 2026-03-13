import cloudinaryIcon from "../assets/cloudinary-free-logo_svgstack_com_28081766118907.svg";
import ejsIcon from "../assets/ejs-svgrepo-com.svg";
import curlIcon from "../assets/curl-symbol.svg";
import shadcnIcon from "../assets/shadcn-ui-seeklogo.svg";
import testingLibraryIcon from "../assets/testing-library-seeklogo.svg";
import bqIcon from "../assets/BigQuery-512-color.svg";
import dbtIcon from "../assets/dbt-bit-standalone.png";
import lookerIcon from "../assets/Looker-512-color.svg";
import kestraIcon from "../assets/Kestra.monogram.logo.svg";

const skillsData = {
  description: `I focus on clean architecture and modern infrastructure from API
design to pipeline workflows while integrating DevOps practices.
Proficient at breaking down complexity into clear, sustainable, and
well‑architected solutions.`,
  categories: [
    {
      title: "Programming languages",
      skills: [
        { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Bash", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Go", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
        { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "MATLAB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
        { name: "Fortran", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fortran/fortran-original.svg" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Prisma ORM", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
        { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
        { name: "Cloudinary", src: cloudinaryIcon },
        { name: "Passport.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/passport/passport-original.svg" },
        { name: "EJS", src: ejsIcon },
        { name: "cURL", src: curlIcon },
        { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "React Router", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" },
        { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "Webpack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" },
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "shadcn/ui", src: shadcnIcon },
        { name: "PostCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original.svg" },
        { name: "Vitest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg" },
        { name: "Babel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" },
        { name: "Testing Library", src: testingLibraryIcon },
      ],
    },
    {
      title: "Data Analytics and Engineering",
      skills: [
        { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "BigQuery", src: bqIcon },
        { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "dbt", src: dbtIcon },
        { name: "Looker Studio", src: lookerIcon },
        { name: "Kestra", src: kestraIcon },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Terraform", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
        { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      ],
    },
  ],
};

export default skillsData;
