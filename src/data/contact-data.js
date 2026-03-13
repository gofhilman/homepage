import emailIcon from "../assets/email.svg";
import rssIcon from "../assets/rss.svg";
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg";
import instagramIcon from "../assets/iconfinder-social-media-applications-3instagram-4102579_113804.svg";
import blueskyIcon from "../assets/Bluesky_Logo.svg";

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
      url: "https://stacked-stories.pages.dev/",
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
    {
      label: "Instagram",
      url: "https://www.instagram.com/gofhilman/",
      icon: instagramIcon,
      external: true,
    },
    {
      label: "Bluesky",
      url: "https://bsky.app/profile/gofhilman.bsky.social",
      icon: blueskyIcon,
      external: true,
    },
  ],
};

export default contactData;
