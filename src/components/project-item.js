import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import webBox from "../assets/web-box.svg";
import chevronLeft from "../assets/square-chevron-left.svg";
import chevronRight from "../assets/square-chevron-right.svg";

class ProjectItem extends HTMLElement {
  set project(data) {
    this._project = data;
    this.render();
  }

  get project() {
    return this._project;
  }

  connectedCallback() {
    if (this._project) {
      this.initCarousel();
    }
  }

  render() {
    const { title, description, images, tools, liveLink, sourceLink } =
      this._project;

    this.innerHTML = `
      <article>
        <div class="embla">
          <div class="embla__viewport">
            <div class="embla__container">
              ${images
                .map(
                  (img) => `
                <img src="${img}" alt="${title}" class="embla__slide" />
              `,
                )
                .join("")}
            </div>
          </div>
          <div class="embla__buttons">
            <img src="${chevronLeft}" alt="Previous" class="embla__prev w-8 lg:w-10" />
            <img src="${chevronRight}" alt="Next" class="embla__next w-8 lg:w-10" />
          </div>
        </div>
        <h4>${title}</h4>
        <p>${description}</p>
        <div class="project-tools">
          ${tools
            .map(
              (tool) => `
            <div>
              ${
                tool.icon
                  ? `<i class="${tool.icon}"></i> ${tool.name}`
                  : `<div class="center-icon">
                      <img class="white-icon" src="${tool.svg}" alt="${tool.name}" />
                      ${tool.name}
                    </div>`
              }
            </div>
          `,
            )
            .join("")}
        </div>
        <div>
          <a href="${liveLink}" target="_blank" rel="noopener noreferrer">
            <div class="center-icon">
              <img class="big-icon" src="${webBox}" alt="Web icon" />
              View live
            </div>
          </a>
          <a href="${sourceLink}" target="_blank" rel="noopener noreferrer">
            <div><i class="devicon-github-original"></i> Source</div>
          </a>
        </div>
      </article>
    `;

    // Initialize carousel after rendering
    this.initCarousel();
  }

  initCarousel() {
    const viewportNode = this.querySelector(".embla__viewport");
    const prevButtonNode = this.querySelector(".embla__prev");
    const nextButtonNode = this.querySelector(".embla__next");

    if (viewportNode && !this.emblaApi) {
      const emblaApi = EmblaCarousel(viewportNode, { loop: true }, [
        Autoplay(),
      ]);
      const autoplay = emblaApi.plugins().autoplay;

      if (prevButtonNode) {
        prevButtonNode.addEventListener("click", () => {
          emblaApi.scrollPrev();
          autoplay?.stop();
        });
      }

      if (nextButtonNode) {
        nextButtonNode.addEventListener("click", () => {
          emblaApi.scrollNext();
          autoplay?.stop();
        });
      }

      autoplay?.play();
      this.emblaApi = emblaApi;
    }
  }

  disconnectedCallback() {
    if (this.emblaApi) {
      this.emblaApi.destroy();
      this.emblaApi = null;
    }
  }
}

customElements.define("project-item", ProjectItem);
