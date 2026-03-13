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
          class="contact-button mt-15 block self-center bg-slate-500 text-xl font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-600 lg:text-3xl"
          href="https://github.com/gofhilman"
          target="_blank"
          rel="noopener noreferrer"
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
