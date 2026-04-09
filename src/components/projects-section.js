import projects from "../data/projects-data";

class ProjectsSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="separator flex flex-col pb-20" id="projects">
        <h2 class="line mb-10">Featured Projects</h2>
        <div id="projects-container"></div>
        <a
          class="cta-button cta-button--primary mt-15 self-center text-xl lg:text-3xl"
          href="https://github.com/gofhilman"
        >
          See other projects
        </a>
      </section>
    `;

    const container = this.querySelector("#projects-container");
    projects.forEach((projectData) => {
      const projectItem = document.createElement("project-item");
      // Set the project property which triggers rendering
      projectItem.project = projectData;
      container.appendChild(projectItem);
    });
  }
}

customElements.define("projects-section", ProjectsSection);
