import arrowIcon from "../assets/arrow-down-right.svg";
import contactData from "../data/contact-data";

class ContactSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const { name, description, links } = contactData;

    this.innerHTML = `
      <section
        class="separator grid justify-items-center pb-10 lg:grid-flow-col lg:grid-rows-[max-content_1fr] lg:justify-items-stretch"
        id="contact"
      >
        <h2>
          ${name}
          <img
            class="inline-block w-10 translate-y-3"
            src="${arrowIcon}"
            alt=""
          />
        </h2>
        <p class="mx-3 my-3 text-xl lg:ml-15">
          ${description}
        </p>
        <article
          class="mt-[20px] justify-self-stretch lg:row-span-full lg:mt-[60px]"
        >
          <h3 class="text-center">Get in touch</h3>
          <address>
            ${links
              .map(
                (link) => `
              <article>
                <a href="${link.url}">
                  <img src="${link.icon}" alt="${link.label} logo" />
                  <p>${link.label}</p>
                </a>
              </article>
            `,
              )
              .join("")}
          </address>
        </article>
      </section>
    `;
  }
}

customElements.define("contact-section", ContactSection);
