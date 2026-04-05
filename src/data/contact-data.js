import emailIcon from "../assets/email.svg";
import rssIcon from "../assets/rss.svg";
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg";

const contactData = {
  name: "Hilman Fikry",
  description: "A software and data engineer from Indonesia",
  links: [
    {
      label: "Email",
      url: "mailto:hilman12fikry@gmail.com",
      icon: emailIcon,
    },
    {
      label: "Blog",
      url: "https://blog.gofhilman.my.id/",
      icon: rssIcon,
      external: true,
    },
    {
      label: "Github",
      url: "https://github.com/gofhilman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      external: true,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hilman-fikry/",
      icon: linkedinIcon,
      external: true,
    },
  ],
};

export default contactData;
