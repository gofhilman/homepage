import arrowIcon from "../assets/arrow-down-right.svg";
import emailIcon from "../assets/email.svg";
import rssIcon from "../assets/rss.svg";
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg";
import instagramIcon from "../assets/iconfinder-social-media-applications-3instagram-4102579_113804.svg";
import blueskyIcon from "../assets/Bluesky_Logo.svg";

class ContactSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section
        class="separator grid justify-items-center pb-10 lg:grid-flow-col lg:grid-rows-[max-content_1fr] lg:justify-items-stretch"
        id="contact"
      >
        <h2>
          Hilman Fikry
          <img
            class="inline-block w-10 translate-y-3"
            src="${arrowIcon}"
            alt=""
          />
        </h2>
        <p class="mx-3 my-3 text-xl lg:ml-15">
          A software and data engineer from Indonesia
        </p>
        <article
          class="mt-[20px] justify-self-stretch lg:row-span-full lg:mt-[60px]"
        >
          <h3 class="text-center">Get in touch</h3>
          <address>
            <article>
              <a href="mailto:hilman12fikry@gmail.com">
                <img src="${emailIcon}" alt="Logo" />
                <p>Email</p>
              </a>
            </article>
            <article>
              <a
                href="https://stacked-stories.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="${rssIcon}" alt="Logo" />
                <p>Blog</p>
              </a>
            </article>
            <article>
              <a
                href="https://github.com/gofhilman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="Logo"
                />
                <p>Github</p>
              </a>
            </article>
            <article>
              <a
                href="https://www.linkedin.com/in/hilman-fikry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="${linkedinIcon}" alt="Logo" />
                <p>LinkedIn</p>
              </a>
            </article>
            <article>
              <a
                href="https://www.instagram.com/gofhilman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="${instagramIcon}"
                  alt="Logo"
                />
                <p>Instagram</p>
              </a>
            </article>
            <article>
              <a
                href="https://bsky.app/profile/gofhilman.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="${blueskyIcon}" alt="Logo" />
                <p>Bluesky</p>
              </a>
            </article>
          </address>
        </article>
      </section>
    `;
  }
}

customElements.define("contact-section", ContactSection);
