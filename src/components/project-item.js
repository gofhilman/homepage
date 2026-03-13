import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import chevronLeft from "../assets/square-chevron-left.svg";
import chevronRight from "../assets/square-chevron-right.svg";

class ProjectItem extends HTMLElement {
  connectedCallback() {
    // Read the images, title, description, tools, and links from the inner HTML or attributes
    // In this case, we prefer keeping the content declarative in the light DOM
    // so we can just grab the existing innerHTML, but we need to initialize Embla
    
    // We expect the consumer to provide the article contents inside this tag:
    // <project-item> <article> ... </article> </project-item>
    
    // Check if the DOM is fully parsed
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initCarousel());
    } else {
      this.initCarousel();
    }
  }

  initCarousel() {
    // If the template engine already rendered the innerHTML, we just find the embla elements
    const viewportNode = this.querySelector(".embla__viewport");
    const prevButtonNode = this.querySelector(".embla__prev");
    const nextButtonNode = this.querySelector(".embla__next");

    if (viewportNode) {
      const emblaApi = EmblaCarousel(viewportNode, { loop: true }, [
        Autoplay(),
      ]);
      const autoplay = emblaApi.plugins().autoplay;

      if (prevButtonNode) {
        prevButtonNode.addEventListener(
          "click",
          () => {
            emblaApi.scrollPrev();
            autoplay?.stop();
          },
          false,
        );
      }

      if (nextButtonNode) {
        nextButtonNode.addEventListener(
          "click",
          () => {
            emblaApi.scrollNext();
            autoplay?.stop();
          },
          false,
        );
      }

      autoplay?.play();
      this.emblaApi = emblaApi;
    }
  }

  disconnectedCallback() {
    if (this.emblaApi) {
      this.emblaApi.destroy();
    }
  }
}

customElements.define("project-item", ProjectItem);
